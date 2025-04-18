( () => {
    "use strict";
    const t = {
        backClose: {
            x: 1205,
            y: 1526,
            w: 512,
            h: 110
        },
        backFar: {
            x: 730,
            y: 730,
            w: 512,
            h: 198
        },
        bird0: {
            x: 630,
            y: 1558,
            w: 170,
            h: 175
        },
        bird1: {
            x: 1400,
            y: 481,
            w: 160,
            h: 120
        },
        bird2: {
            x: 1400,
            y: 156,
            w: 165,
            h: 165
        },
        cloud0: {
            x: 1283,
            y: 1444,
            w: 82,
            h: 16
        },
        cloud1: {
            x: 1575,
            y: 266,
            w: 195,
            h: 28
        },
        cloud2: {
            x: 1748,
            y: 128,
            w: 103,
            h: 21
        },
        cloud3: {
            x: 1685,
            y: 222,
            w: 85,
            h: 16
        },
        cloud4: {
            x: 1575,
            y: 304,
            w: 111,
            h: 16
        },
        house0: {
            x: 1570,
            y: 441,
            w: 66,
            h: 136
        },
        house1: {
            x: 630,
            y: 1090,
            w: 84,
            h: 136
        },
        house2: {
            x: 810,
            y: 1558,
            w: 96,
            h: 136
        },
        house3: {
            x: 1400,
            y: 10,
            w: 338,
            h: 136
        },
        house4: {
            x: 940,
            y: 1250,
            w: 426,
            h: 184
        },
        pigeon1: {
            x: 1550,
            y: 331,
            w: 100,
            h: 100
        },
        pigeon2: {
            x: 1575,
            y: 156,
            w: 100,
            h: 100
        },
        pigeon3: {
            x: 1562,
            y: 611,
            w: 100,
            h: 100
        },
        replayIcon: {
            x: 1205,
            y: 1444,
            w: 68,
            h: 60
        },
        road: {
            x: 1205,
            y: 1646,
            w: 512,
            h: 65
        },
        robotBall: {
            x: 1400,
            y: 331,
            w: 140,
            h: 140
        },
        robotJump0: {
            x: 10,
            y: 10,
            w: 350,
            h: 350
        },
        robotJump1: {
            x: 370,
            y: 10,
            w: 350,
            h: 350
        },
        robotJump2: {
            x: 10,
            y: 370,
            w: 350,
            h: 350
        },
        robotJump3: {
            x: 370,
            y: 370,
            w: 350,
            h: 350
        },
        robotJump4: {
            x: 730,
            y: 10,
            w: 350,
            h: 350
        },
        robotJump5: {
            x: 730,
            y: 370,
            w: 350,
            h: 350
        },
        robotJump6: {
            x: 730,
            y: 370,
            w: 350,
            h: 350
        },
        robotJump7: {
            x: 10,
            y: 730,
            w: 350,
            h: 350
        },
        robotJump8: {
            x: 370,
            y: 730,
            w: 350,
            h: 350
        },
        robotRun0: {
            x: 1090,
            y: 10,
            w: 300,
            h: 300
        },
        robotRun1: {
            x: 1090,
            y: 320,
            w: 300,
            h: 300
        },
        robotRun2: {
            x: 1252,
            y: 630,
            w: 300,
            h: 300
        },
        robotRun3: {
            x: 730,
            y: 938,
            w: 300,
            h: 300
        },
        robotRun4: {
            x: 10,
            y: 1090,
            w: 300,
            h: 300
        },
        robotRun5: {
            x: 320,
            y: 1090,
            w: 300,
            h: 300
        },
        robotSlide0: {
            x: 1040,
            y: 940,
            w: 300,
            h: 300
        },
        robotSlide1: {
            x: 630,
            y: 1248,
            w: 300,
            h: 300
        },
        robotSlide2: {
            x: 10,
            y: 1400,
            w: 300,
            h: 300
        },
        robotSlide3: {
            x: 320,
            y: 1400,
            w: 300,
            h: 300
        },
        robotWall: {
            x: 940,
            y: 1444,
            w: 255,
            h: 245
        },
        robotWall2: {
            x: 1350,
            y: 940,
            w: 255,
            h: 283
        },
        robotWall3: {
            x: 1376,
            y: 1233,
            w: 255,
            h: 283
        },
        tree0: {
            x: 1748,
            y: 10,
            w: 46,
            h: 108
        },
        tree1: {
            x: 1090,
            y: 630,
            w: 46,
            h: 73
        },
        tree2: {
            x: 1685,
            y: 156,
            w: 30,
            h: 56
        }
    };
    async function e(t) {
        return new Promise(( (e, s) => {
            const i = new Image;
            i.onload = () => e(i),
            i.onerror = s,
            i.src = t
        }
        ))
    }
    async function s(t, e) {
        e || (e = function(t) {
            const e = t.slice(t.lastIndexOf("."))
              , s = t.split("/");
            return s[s.length - 1].slice(0, -1 * e.length)
        }(t));
        const s = document.createElement("style");
        s.innerHTML = `\n    @font-face {\n      font-family: ${e};\n      src: url(${t});\n    }\n  `,
        document.head.appendChild(s),
        await document.fonts.load(`12px ${e}`)
    }
    function i(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    function n() {
        return Boolean(i(0, 1))
    }
    const a = new Map;
    class r {
        constructor(t) {
            this.scale = .5,
            this._sprite = null,
            this.height = 0,
            this.width = 0,
            this.x = 0,
            this.y = 0,
            this.isSpinning = !1,
            this.angle = 0,
            t && (this.imageData = t,
            this.alphaMap = [])
        }
        set sprite(e) {
            this._sprite = e,
            this.height = t[e].h * this.scale,
            this.width = t[e].w * this.scale,
            this.imageData && (this.alphaMap = function(e, s) {
                if (a.has(s))
                    return a.get(s);
                const i = t[s]
                  , n = []
                  , r = e.width * i.y * 4;
                for (let t = r; t < r + i.h * e.width * 4; t += 8 * e.width) {
                    const s = []
                      , a = t + 4 * i.x;
                    for (let t = a; t < a + 4 * i.w; t += 8)
                        s.push(0 === e.data[t + 3] ? 0 : 1);
                    n.push(s)
                }
                return a.set(s, n),
                n
            }(this.imageData, e))
        }
        get sprite() {
            return this._sprite
        }
        get rightX() {
            return this.width + this.x
        }
        get rightXC() {
            return 1 * this.width + this.x
        }
        get leftXC() {
            return 0 * this.width + this.x
        }
        get bottomY() {
            return this.height + this.y
        }
        hits(t, e) {
            return t.some((t => {
                if (!t)
                    return !1;
                if (this.leftXC >= t.rightXC || t.leftXC >= this.rightXC)
                    return !1;
                if (this.y >= t.bottomY || t.y >= this.bottomY)
                    return !1;
                if (this.alphaMap && t.alphaMap) {
                    const r = Math.round(Math.max(this.y, t.y))
                      , h = Math.round(Math.min(this.bottomY, t.bottomY))
                      , o = Math.round(Math.max(this.x, t.x))
                      , d = Math.round(Math.min(this.rightX, t.rightX))
                      , l = Math.round(this.y)
                      , p = Math.round(t.y)
                      , c = Math.round(this.x)
                      , u = Math.round(t.x)
                      , g = .5 / this.scale
                      , w = .5 / t.scale;
                    for (let m = r; m < h; m++)
                        for (let r = o; r < d; r++) {
                            var s = Math.floor((r - c) * g)
                              , i = Math.floor((m - l) * g);
                            if (null != this.alphaMap[i] && 1 === this.alphaMap[i][s]) {
                                var n = Math.floor((r - u) * w)
                                  , a = Math.floor((m - p) * w);
                                if (null != t.alphaMap[a] && 1 === t.alphaMap[a][n])
                                    return e.strokeStyle = "rgb(255 10 10)",
                                    e.strokeRect(r - 5, m - 5, 10, 10),
                                    !0
                            }
                        }
                    return !1
                }
                return !0
            }
            ))
        }
    }
    const h = ["bird0", "bird1", "bird2"];
    class o extends r {
        static maxBirdHeight = ( () => Math.max(t.bird2.h, t.bird0.h))();
        static wingSpriteYShift = 11;
        constructor(t) {
            var e;
            super(t),
            this.scale = .4,
            this.wingFrames = 0,
            this.wingSpriteIndex = 0,
            this.wingDirection = "Up",
            this.sprite = (e = h)[i(0, e.length - 1)],
            this.x = null,
            this.y = null,
            this.speed = null,
            this.wingsRate = null
        }
        nextFrame() {
            this.x -= this.speed,
            this.determineSprite()
        }
        determineSprite() {}
    }
    class d extends r {
        static maxBirdHeight = ( () => Math.max(t.bird2.h, t.bird0.h))();
        constructor(t) {
            super(t),
            this.scale = .4,
            this.wingFrames = 0,
            this.wingSpriteIndex = 0,
            this.wingDirection = "Up",
            this.sprite = `pigeon${this.wingSpriteIndex + 1}`,
            this.x = null,
            this.y = null,
            this.speed = null,
            this.wingsRate = 15
        }
        nextFrame() {
            this.x -= this.speed,
            this.determineSprite()
        }
        determineSprite() {
            this.height,
            this.wingFrames >= this.wingsRate && (this.wingFrames = 0,
            this.wingSpriteIndex++,
            this.wingSpriteIndex > 2 && (this.wingSpriteIndex = 0)),
            this.sprite = `pigeon${this.wingSpriteIndex + 1}`,
            this.wingFrames++
        }
    }
    const l = ["robotWall", "robotWall2", "robotWall3", "house0", "house1", "house2", "house3", "house4"]
      , p = [.25, .25, .25, .5, .5, .5, .35, .25];
    class c extends r {
        constructor(t) {
            super(t);
            var e = i(0, 6);
            this.scale = p[e],
            this.sprite = l[e],
            this.speed = null,
            this.x = null,
            this.y = null
        }
        nextFrame() {
            this.x -= this.speed
        }
    }
    class u extends r {
        constructor(t) {
            super(),
            this.scale = 1.3,
            this.sprite = "cloud" + i(0, 4),
            this.speedMod = .01 * i(5, 15),
            this.speed = null,
            this.x = null,
            this.y = null
        }
        nextFrame() {
            this.x -= this.speed * this.speedMod
        }
    }
    class g extends r {
        constructor(t) {
            super(),
            this.scale = .7 + .01 * i(0, 10),
            this.sprite = "tree" + i(0, 2),
            this.speed = null,
            this.x = null,
            this.y = null
        }
        nextFrame() {
            this.x -= this.speed
        }
    }
    class w extends r {
        constructor(t) {
            super(t),
            this.scale = .3,
            this.sprite = "robotBall",
            this.speedMod = 1.25,
            this.speed = null,
            this.x = null,
            this.y = null,
            this.isSpinning = !0
        }
        nextFrame() {
            var t = this.speed * this.speedMod;
            this.x -= t,
            this.angle += this.speedMod / 10
        }
    }
    class m extends r {
        constructor(t) {
            super(t),
            this.scale = .3,
            this.isDucking = !1,
            this.wasDucking = !1,
            this.wasJumping = !1,
            this.state = "run",
            this.legFrames = 0,
            this.legSpriteIndex = 0,
            this.sprite = `robotRun${this.legSpriteIndex}`,
            this.vVelocity = null,
            this.baseY = 0,
            this.relativeY = 0,
            this.legsRate = null,
            this.lift = null,
            this.gravity = null
        }
        get y() {
            return this.baseY - this.height + this.relativeY
        }
        set y(t) {
            this.baseY = t
        }
        reset() {
            this.isDucking = !1,
            this.wasDucking = !1,
            this.wasJumping = !1,
            this.state = "run",
            this.legFrames = 0,
            this.legSpriteIndex = 0,
            this.sprite = `robotRun${this.legSpriteIndex}`,
            this.vVelocity = null,
            this.relativeY = 0
        }
        jump() {
            return 0 === this.relativeY && (this.legSpriteIndex = 0,
            this.legFrames = 0,
            this.vVelocity = -this.lift,
            this.wasJumping = !0,
            this.wasDucking = !1,
            !0)
        }
        duck(t) {
            var e = this.isDucking;
            this.isDucking = Boolean(t),
            e && !this.isDucking && (this.wasDucking = !0),
            e || !this.isDucking || this.wasJumping || (this.legSpriteIndex = 0,
            this.legFrames = 0)
        }
        nextFrame() {
            null !== this.vVelocity && (this.vVelocity += this.gravity,
            this.isDucking ? this.relativeY += 20 * this.gravity : this.relativeY += this.vVelocity),
            this.relativeY > 0 && (this.vVelocity = null,
            this.relativeY = 0),
            this.determineSprite()
        }
        pickJumpSprite() {
            this.legFrames >= this.legsRate && (this.legSpriteIndex++,
            this.legFrames = 0,
            this.legSpriteIndex > 8 && (this.legSpriteIndex = 8),
            this.legSpriteIndex >= 5 && (this.legFrames = 1),
            this.sprite = `robotJump${this.legSpriteIndex}`),
            this.legFrames += 2
        }
        pickDuckSprite() {
            this.legFrames >= this.legsRate / 2 && (this.wasDucking ? (3 == this.legSpriteIndex && (this.wasDucking = !1),
            this.legSpriteIndex = 3,
            this.legFrames = 0) : (this.legSpriteIndex++,
            this.legSpriteIndex > 2 && (this.legSpriteIndex = 2),
            this.legFrames = 0)),
            this.sprite = `robotSlide${this.legSpriteIndex}`,
            this.legFrames++
        }
        pickRunSprite() {
            this.legFrames >= this.legsRate && (this.legSpriteIndex++,
            this.legSpriteIndex > 5 && (this.legSpriteIndex = 0),
            this.legFrames = 0),
            this.sprite = `robotRun${this.legSpriteIndex}`,
            this.legFrames++
        }
        determineSprite() {
            this.relativeY < 0 ? this.pickJumpSprite() : (this.wasJumping && (this.legFrames = 0,
            this.legSpriteIndex = 0,
            this.wasJumping = !1),
            this.isDucking || this.wasDucking ? this.pickDuckSprite() : this.pickRunSprite())
        }
    }
    const x = ["house0", "house1", "house2", "house0", "house1", "house2", "house0", "house1", "house2", "house3", "house4"]
      , S = [1, 1, 1, 1, 1, 1, 1, 1, 1, .78, .55];
    class b extends r {
        constructor(t) {
            super();
            var e = i(0, 10)
              , s = 0;
            e < 9 && (s = .01 * i(-20, 20)),
            this.speedMod = 1 + s,
            this.scale = S[e] * this.speedMod,
            this.sprite = x[e],
            this.speed = null,
            this.x = null,
            this.y = null
        }
        nextFrame() {
            this.x -= this.speed * this.speedMod
        }
    }
    const f = new (window.AudioContext || window.webkitAudioContext)
      , y = ["game-over", "jump", "level-up"]
      , k = {};
    let v = !1;
    function I(t) {
        v && (f.resume(),
        function(t) {
            const e = f.createBufferSource();
            e.buffer = t,
            e.connect(f.destination),
            e.start()
        }(k[t]))
    }
    (async function() {
        await Promise.all(y.map((async t => {
            var e;
            k[t] = await (e = `/content/themes/warrobots/assets/source/js/modules/minigame-project/assets/${t}.mp3`,
            new Promise(( (t, s) => {
                const i = new XMLHttpRequest;
                i.open("GET", e),
                i.responseType = "arraybuffer",
                i.onload = () => f.decodeAudioData(i.response, t),
                i.onerror = s,
                i.send()
            }
            )))
        }
        ))),
        v = !0
    }
    )().catch(console.error);
    class R {
        constructor() {
            this.looping = !1,
            this.preloaded = !1,
            this.targetFrameRate = 60,
            this.frameCount = 0,
            this.frameRate = 0,
            this.paused = !1,
            this.stepFrames = null,
            this._lastFrameTime = window.performance.now(),
            this.__loop = this._loop.bind(this)
        }
        async start() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.preloaded || (this.preload && await this.preload(),
            this.preloaded = !0),
            t && (this.paused = t),
            this.looping = !0,
            t || window.requestAnimationFrame(this.__loop)
        }
        stop() {
            this.looping = !1
        }
        pause() {
            this.paused = !0
        }
        unpause() {
            this.paused = !1
        }
        step() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            "number" == typeof this.stepFrames ? this.stepFrames += t : this.stepFrames = t,
            this.__loop(window.performance.now())
        }
        _loop(t) {
            const e = window.performance.now();
            if (e - this._lastFrameTime >= 1e3 / this.targetFrameRate - 5 && (this.onFrame(),
            this.frameRate = 1e3 / (e - this._lastFrameTime),
            this._lastFrameTime = e,
            this.frameCount++),
            this.looping) {
                let t = !0;
                this.paused && ("number" == typeof this.stepFrames ? 0 === this.stepFrames ? (this.stepFrames = null,
                t = !1) : this.stepFrames-- : t = !1),
                t && window.requestAnimationFrame(this.__loop)
            }
        }
    }
    const F = new class extends R {
        constructor(t, e) {
            super(),
            this.width = null,
            this.height = null,
            this.canvas = this.createCanvas(t, e),
            this.canvasCtx = this.canvas.getContext("2d"),
            this.spriteImage = null,
            this.spriteImageData = null,
            this.defaultSettings = {
                bgSpeed: 8,
                bg1Speed: 3,
                bg2Speed: 1,
                birdSpeed: 7.2,
                birdSpawnRate: 383,
                birdWingsRate: 19,
                cactiSpawnRate: 80,
                spinnerSpawnRate: 480,
                cloudSpawnRate: 560,
                actualBirdSpawnRate: 350,
                backgroundBuildingSpawnRate: 180,
                treeSpawnRate: 100,
                cloudSpeed: 1,
                dinoGravity: .5,
                dinoGroundOffset: 48,
                dinoLegsRate: 6,
                dinoLift: 10,
                scoreBlinkRate: 20,
                scoreIncreaseRate: 6
            },
            this.state = {
                settings: {
                    ...this.defaultSettings
                },
                birds: [],
                actualBirds: [],
                cacti: [],
                clouds: [],
                treesBG: [],
                treesFG: [],
                backgroundBuildings: [],
                dino: null,
                gameOver: !1,
                groundX: 0,
                backgroundX: 0,
                background2X: 0,
                groundY: 0,
                isRunning: !1,
                level: 0,
                score: {
                    blinkFrames: 0,
                    blinks: 0,
                    isBlinking: !1,
                    value: 0
                },
                stats: {
                    startTime: Date.now(),
                    endTime: null,
                    jumpCount: 0,
                    duckCount: 0,
                    enemiesSpawned: {}
                }
            }
        }
        createCanvas(t, e) {
            const s = document.createElement("canvas")
              , i = s.getContext("2d");
            return window.devicePixelRatio,
            this.width = t,
            this.height = e,
            s.style.width = 2 * t + "px",
            s.style.height = 2 * e + "px",
            s.width = Math.floor(2 * t),
            s.height = Math.floor(2 * e),
            i.scale(2, 2),
            document.querySelector("#app").appendChild(s),
            s
        }
        async preload() {
            const {settings: i} = this.state
              , [n] = await Promise.all([e("/content/themes/warrobots/assets/source/js/modules/minigame-project/assets/sprite.png"), s("/content/themes/warrobots/assets/source/js/modules/minigame-project/assets/PressStart2P-Regular.ttf", "PressStart2P")]);
            this.spriteImage = n,
            this.spriteImageData = function(t) {
                const {width: e, height: s} = t
                  , i = document.createElement("canvas")
                  , n = i.getContext("2d");
                let a;
                return i.width = e,
                i.height = s,
                n.drawImage(t, 0, 0),
                a = n.getImageData(0, 0, e, s),
                i.remove(),
                a
            }(n);
            const a = new m(this.spriteImageData);
            a.legsRate = i.dinoLegsRate,
            a.lift = i.dinoLift,
            a.gravity = i.dinoGravity,
            a.x = 25,
            a.baseY = this.height - i.dinoGroundOffset,
            this.state.dino = a,
            this.state.groundY = this.height - t.road.h
        }
        onFrame() {
            const {state: t} = this;
            this.drawBackground(),
            this.drawGround(),
            this.drawClouds(),
            this.drawTrees(!1),
            this.drawActualBirds(),
            this.drawDino(),
            this.drawScore(),
            t.isRunning && (this.drawCacti(),
            t.level > 1 && this.drawBirds(),
            t.level > 2 && this.drawSpinners(),
            this.drawTrees(!0),
            t.dino.hits([t.cacti[0], t.birds[0], t.spinners[0]], this.canvasCtx) && (I("game-over"),
            t.gameOver = !0),
            t.gameOver ? this.endGame() : this.updateScore())
        }
        onInput(t) {
            const {state: e} = this
              , {stats: s} = e;
            switch (t) {
            case "jump":
                e.isRunning ? e.dino.jump() && (e.stats.jumpCount++,
                I("jump")) : (this.resetGame(),
                e.dino.jump(),
                I("jump"));
                break;
            case "duck":
                e.isRunning && e.dino.duck(!0);
                break;
            case "stop-duck":
                e.isRunning && (e.dino.duck(!1),
                e.stats.duckCount++)
            }
        }
        resetGame() {
            this.state.dino.reset(),
            Object.assign(this.state, {
                settings: {
                    ...this.defaultSettings
                },
                birds: [],
                cacti: [],
                spinners: [],
                gameOver: !1,
                isRunning: !0,
                level: 0,
                score: {
                    blinkFrames: 0,
                    blinks: 0,
                    isBlinking: !1,
                    value: 0
                },
                stats: {
                    startTime: Date.now(),
                    endTime: null,
                    jumpCount: 0,
                    duckCount: 0,
                    enemiesSpawned: {}
                }
            });
            const t = new CustomEvent("start",{
                detail: this.state.stats.startTime
            });
            document.dispatchEvent(t),
            this.start()
        }
        async getSessionID(t) {
            const {state: e} = this
              , {score: s, stats: i} = e
              , n = (new TextEncoder).encode(t)
              , a = await crypto.subtle.digest("SHA-256", n);
            return Array.from(new Uint8Array(a)).map((t => t.toString(16).padStart(2, "0"))).join("")
        }
        async doSend() {
            const {state: t} = this
              , {score: e, stats: s} = t
              , i = {
                j: e.value,
                d: s.startTime,
                r: Date.now(),
                k: s.jumpCount,
                f: s.duckCount,
                w: s.enemiesSpawned
            }
              , n = await this.getSessionID(btoa(JSON.stringify(i)))
              , a = new CustomEvent("fail",{
                detail: {
                    googleMetrics: i,
                    googleSessionId: n
                }
            });
            document.dispatchEvent(a)
        }
        sendResult() {
            this.doSend()
        }
        endGame() {
            const e = t.replayIcon;
            this.paintText("G A M E  O V E R", this.width / 2, this.height / 2 - 15, {
                font: "PressStart2P",
                size: "12px",
                align: "center",
                baseline: "bottom",
                color: "#535353"
            }),
            this.paintSprite("replayIcon", this.width / 2 - e.w / 4, this.height / 2 - e.h / 4 + 15),
            this.state.isRunning = !1,
            this.drawScore(),
            this.stop(),
            this.sendResult()
        }
        increaseDifficulty() {
            const {birds: t, cacti: e, clouds: s, treesFG: i, treesBG: n, spinners: a, dino: r, settings: h, backgroundBuildings: o} = this.state
              , {bgSpeed: d, bg1Speed: l, bg2Speed: p, cactiSpawnRate: c, dinoLegsRate: u} = h
              , {level: g} = this.state;
            g > 4 && g < 8 ? (h.bgSpeed++,
            h.birdSpeed = .8 * h.bgSpeed) : g > 7 && (h.bgSpeed = Math.ceil(1.1 * d),
            h.birdSpeed = .9 * h.bgSpeed,
            h.cactiSpawnRate = Math.floor(.98 * c),
            g > 7 && g % 2 == 0 && u > 3 && h.dinoLegsRate--),
            h.bg1Speed = 3 * h.bgSpeed / 8,
            h.bg2Speed = 1 * h.bgSpeed / 8;
            for (const e of t)
                e.speed = h.birdSpeed;
            for (const t of e)
                t.speed = h.bgSpeed;
            for (const t of s)
                t.speed = h.bgSpeed;
            for (const t of a)
                t.speed = h.bgSpeed;
            for (const t of i)
                t.speed = h.bgSpeed;
            for (const t of n)
                t.speed = h.bgSpeed;
            for (const t of o)
                t.speed = h.bgSpeed / 4;
            r.legsRate = h.dinoLegsRate
        }
        updateScore() {
            const {state: t} = this;
            if (this.frameCount % t.settings.scoreIncreaseRate == 0) {
                const e = t.level;
                t.score.value++,
                t.level = Math.floor(t.score.value / 100),
                t.level !== e && (I("level-up"),
                this.increaseDifficulty(),
                t.score.isBlinking = !0)
            }
        }
        drawFPS() {
            this.paintText("fps: " + Math.round(this.frameRate), 0, 0, {
                font: "PressStart2P",
                size: "12px",
                baseline: "top",
                align: "left",
                color: "#535353"
            })
        }
        drawBackground() {
            this.canvasCtx.fillStyle = "#CCE1E6",
            this.canvasCtx.fillRect(0, 0, this.width, this.height)
        }
        drawWideTile(t, e, s, i) {
            let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
            const {state: a} = this;
            for (this.paintSprite(t, s, i, n),
            this.tempGroundX = s,
            e *= n; this.tempGroundX <= -e + this.width; )
                this.tempGroundX += e - 1,
                this.paintSprite(t, this.tempGroundX, i, n)
        }
        drawGround() {
            const {state: e} = this
              , {bgSpeed: s, bg1Speed: i, bg2Speed: n} = e.settings;
            this.drawWideTile("backFar", t.backFar.w, e.background2X, e.groundY - .75 * t.backFar.h, 1),
            this.drawBackgroundBuildings(),
            this.drawWideTile("backClose", t.backClose.w, e.backgroundX, e.groundY - t.backClose.h / 2, 1),
            this.drawWideTile("road", t.road.w, e.groundX, e.groundY, 1),
            e.groundX -= s,
            e.groundX <= -t.road.w && (e.groundX += t.road.w),
            e.backgroundX -= i,
            e.backgroundX <= -t.backClose.w && (e.backgroundX += t.backClose.w),
            e.background2X -= n,
            e.background2X <= -t.backFar.w && (e.background2X += t.backFar.w)
        }
        drawActualBirds() {
            const {actualBirds: t, settings: e} = this.state;
            if (this.progressInstances(t),
            this.frameCount % e.actualBirdSpawnRate == 0) {
                const s = new d;
                s.speed = e.bgSpeed,
                s.x = this.width,
                s.y = i(10, 30),
                t.push(s),
                this.recordEnemySpawn(this.state.stats, "c")
            }
            this.paintInstances(t)
        }
        drawClouds() {
            const {clouds: t, settings: e} = this.state;
            if (this.progressInstances(t),
            this.frameCount % e.cloudSpawnRate == 0) {
                const s = new u;
                s.speed = e.bgSpeed / 2,
                s.x = this.width,
                s.y = i(20, 80),
                t.push(s),
                this.recordEnemySpawn(this.state.stats, "v")
            }
            this.paintInstances(t)
        }
        drawBackgroundBuildings() {
            const {backgroundBuildings: t, settings: e} = this.state;
            if (this.progressInstances(t),
            this.frameCount % e.backgroundBuildingSpawnRate == 0) {
                const s = new b;
                s.speed = e.bgSpeed / 4,
                s.x = this.width,
                s.y = this.height - s.height - e.dinoGroundOffset,
                t.push(s),
                t.sort(( (t, e) => t.speedMod - e.speedMod)),
                this.recordEnemySpawn(this.state.stats, "mm")
            }
            this.paintInstances(t)
        }
        drawTrees(t) {
            const {treesBG: e, treesFG: s, settings: i} = this.state;
            var a = e;
            if (t && (a = s),
            this.progressInstances(a),
            this.frameCount % i.treeSpawnRate == 0 && n()) {
                const t = new g;
                t.speed = i.bgSpeed,
                t.x = this.width,
                n() ? (a = s,
                t.y = this.height - i.dinoGroundOffset - t.height + 30) : (a = e,
                t.y = this.height - i.dinoGroundOffset - t.height - 15),
                a.push(t),
                this.recordEnemySpawn(this.state.stats, "y")
            }
            this.paintInstances(a)
        }
        drawDino() {
            const {dino: t} = this.state;
            t.nextFrame(),
            this.paintSprite(t.sprite, t.x, t.y, t.scale)
        }
        drawSpinners() {
            const {state: t} = this
              , {spinners: e, settings: s} = t;
            if (this.progressInstances(e),
            this.frameCount % s.spinnerSpawnRate == 0 && !t.birds.length && !t.cacti.length && n()) {
                const t = new w(this.spriteImageData);
                t.speed = s.bgSpeed,
                t.x = this.width,
                t.y = this.height - t.height - s.dinoGroundOffset,
                e.push(t),
                this.recordEnemySpawn(this.state.stats, "aa")
            }
            this.paintInstances(e)
        }
        drawCacti() {
            const {state: t} = this
              , {cacti: e, settings: s} = t;
            if (this.progressInstances(e),
            this.frameCount % s.cactiSpawnRate == 0 && !t.birds.length && !t.spinners.length && n()) {
                const t = new c(this.spriteImageData);
                t.speed = s.bgSpeed,
                t.x = this.width,
                t.y = this.height - t.height - s.dinoGroundOffset,
                e.push(t),
                this.recordEnemySpawn(this.state.stats, "vb")
            }
            this.paintInstances(e)
        }
        drawBirds() {
            const {state: e} = this
              , {birds: s, settings: i} = this.state;
            if (this.progressInstances(s),
            this.frameCount % i.birdSpawnRate == 0 && n() && !e.spinners.length) {
                const e = new o(this.spriteImageData);
                e.speed = i.birdSpeed,
                e.wingsRate = i.birdWingsRate,
                e.x = this.width,
                e.y = this.height - e.height - t.robotSlide2.h / 4 - i.dinoGroundOffset - s.push(e),
                this.recordEnemySpawn(this.state.stats, "h")
            }
            this.paintInstances(s)
        }
        drawScore() {
            const {canvasCtx: t, state: e} = this
              , {isRunning: s, score: i, settings: n} = e;
            let a = !0
              , r = i.value;
            s && i.isBlinking && (i.blinkFrames++,
            i.blinkFrames % n.scoreBlinkRate == 0 && i.blinks++,
            i.blinks > 7 ? (i.blinkFrames = 0,
            i.blinks = 0,
            i.isBlinking = !1) : i.blinks % 2 == 0 ? r = 100 * Math.floor(r / 100) : a = !1),
            a && (t.fillStyle = "#f7f7f7",
            t.fillRect(this.width - 336, 0, 336, 12),
            this.paintText("distance:" + (r + "").padStart(5, "0") + "  points:" + (Math.floor(r / 4) + "").padStart(5, "0"), this.width, 0, {
                font: "PressStart2P",
                size: "12px",
                align: "right",
                baseline: "top",
                color: "#535353"
            }))
        }
        recordEnemySpawn(t, e) {
            t.enemiesSpawned[e] || (t.enemiesSpawned[e] = 0),
            t.enemiesSpawned[e] += 1
        }
        progressInstances(t) {
            for (let e = t.length - 1; e >= 0; e--) {
                const s = t[e];
                s.nextFrame(),
                s.rightX <= 0 && t.splice(e, 1)
            }
        }
        paintInstances(t) {
            for (const e of t)
                e.isSpinning ? this.paintSpriteSpun(e.sprite, e.x, e.y, e.angle, e.scale) : this.paintSprite(e.sprite, e.x, e.y, e.scale)
        }
        paintSpriteSpun(e, s, i, n) {
            let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
            const {h: r, w: h, x: o, y: d} = t[e];
            this.canvasCtx.translate(s + h * a / 2, i + r * a / 2),
            this.canvasCtx.rotate(-n),
            this.canvasCtx.drawImage(this.spriteImage, o, d, h, r, -h * a / 2, -r * a / 2, h * a, r * a),
            this.canvasCtx.rotate(n),
            this.canvasCtx.translate(-(s + h * a / 2), -(i + r * a / 2))
        }
        paintSprite(e, s, i) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            const {h: a, w: r, x: h, y: o} = t[e];
            this.canvasCtx.drawImage(this.spriteImage, h, o, r, a, s, i, r * n, a * n)
        }
        paintText(t, e, s, i) {
            const {font: n="serif", size: a="12px"} = i
              , {canvasCtx: r} = this;
            r.font = `${a} ${n}`,
            i.align && (r.textAlign = i.align),
            i.baseline && (r.textBaseline = i.baseline),
            i.color && (r.fillStyle = i.color),
            r.fillText(t, e, s)
        }
    }
    (764,310);
    window.__dinoGame = {
        game: F
    },
    ("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (top.document.documentElement.addEventListener("touchstart", (t => {
        let {touches: e} = t;
        1 === e.length ? F.onInput("jump") : 2 === e.length && F.onInput("duck")
    }
    )),
    top.document.documentElement.addEventListener("touchend", ( () => {
        F.onInput("stop-duck")
    }
    )));
    {
        const t = new Set(["ArrowUp", "Space", "KeyW"])
          , e = new Set(["ArrowDown", "KeyS"]);
        top.document.documentElement.addEventListener("keydown", (s => {
            const {code: i} = s;
            t.has(i) ? F.onInput("jump") : e.has(i) && F.onInput("duck")
        }
        )),
        top.document.documentElement.addEventListener("keyup", (t => {
            const {code: s} = t;
            e.has(s) && F.onInput("stop-duck")
        }
        ))
    }
    F.start().catch(console.error)
}
)();
