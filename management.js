function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

if (is_touch_enabled()) {
    var box = document.getElementById("heading.msg");
    box.innerHTML = chrome.i18n.getMessage('dinoPlayTextTouch');
}
function keyDown(e) {
    Podium = {};
    var n = document.createEvent("KeyboardEvent");
    Object.defineProperty(n, "keyCode", {
        get: function () {
            return this.keyCodeVal;
        },
    }),
        n.initKeyboardEvent
            ? n.initKeyboardEvent(
                "keydown",
                !0,
                !0,
                document.defaultView,
                e,
                e,
                "",
                "",
                !1,
                ""
            )
            : n.initKeyEvent(
                "keydown",
                !0,
                !0,
                document.defaultView,
                !1,
                !1,
                !1,
                !1,
                e,
                0
            ),
        (n.keyCodeVal = e),
        document.body.dispatchEvent(n);
}
function keyUp(e) {
    Podium = {};
    var n = document.createEvent("KeyboardEvent");
    Object.defineProperty(n, "keyCode", {
        get: function () {
            return this.keyCodeVal;
        },
    }),
        n.initKeyboardEvent
            ? n.initKeyboardEvent(
                "keyup",
                !0,
                !0,
                document.defaultView,
                e,
                e,
                "",
                "",
                !1,
                ""
            )
            : n.initKeyEvent(
                "keyup",
                !0,
                !0,
                document.defaultView,
                !1,
                !1,
                !1,
                !1,
                e,
                0
            ),
        (n.keyCodeVal = e),
        document.body.dispatchEvent(n);
}
let autoPlay = null;
function gameStart(gameOver) {
    chrome.storage.local.get('resetGame', function(data) {
        if(data.resetGame == true){
            localStorage.removeItem('chrome-dino');
            chrome.storage.local.set({ 'resetGame': false }, function() {});
        }
    });
    chrome.storage.local.get('settings', function (data) {
        const settings = data.settings;
        if (settings.cheat6) {
            Runner.prototype.gameOver = gameOver;
            Runner.instance_.setSpeed(8);
            Runner.instance_.tRex.setJumpVelocity(10);
            Runner.instance_.tRex.groundYPos = 93;
            autoPlay = setInterval(function () {
                Runner.instance_.horizon.obstacles.length > 0 &&
                (Runner.instance_.horizon.obstacles[0].xPos <
                25 * Runner.instance_.currentSpeed -
                Runner.instance_.horizon.obstacles[0].width / 2 &&
                Runner.instance_.horizon.obstacles[0].yPos > 75 &&
                (keyUp(40), keyDown(38)),
                Runner.instance_.horizon.obstacles[0].xPos <
                30 * Runner.instance_.currentSpeed -
                Runner.instance_.horizon.obstacles[0].width / 2 &&
                Runner.instance_.horizon.obstacles[0].yPos <= 75 &&
                keyDown(40));
            }, 5);
        }
        else {
            clearInterval(autoPlay);
            if (settings.cheat1) {
                Runner.prototype.gameOver = function (){}
            }else{
                Runner.prototype.gameOver = gameOver;
            }
            if (settings.cheat2) {
                Runner.instance_.setSpeed(10000000000000000000000);
            }else if(settings.cheat3 == false){
                Runner.instance_.setSpeed(8);
            }
            if (settings.cheat3) {
                Runner.instance_.setSpeed(1);
            }else if(settings.cheat2 == false){
                Runner.instance_.setSpeed(8);
            }
            if (settings.cheat4) {
                Runner.instance_.tRex.setJumpVelocity(15);
            }else{
                Runner.instance_.tRex.setJumpVelocity(10)
            }
            if (settings.cheat5) {
                Runner.instance_.tRex.groundYPos = 0
            }else{
                Runner.instance_.tRex.groundYPos = 93
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[id]').forEach((element) => {
        const translation = chrome.i18n.getMessage(element.id);
        if (translation) {
            element.textContent = translation;
        }
    });
    let gameOver = Runner.prototype.gameOver;
    gameStart(gameOver);
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "getSettingsAgain") {
            gameStart(gameOver);
            sendResponse({ status: "Game settings updated" });
        }
    });
});
