var PlanetSearchNexus;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./GameObjects/GameObject.js":
/*!***********************************!*\
  !*** ./GameObjects/GameObject.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var SpaceGameObject = (function (_super) {
    __extends(SpaceGameObject, _super);
    function SpaceGameObject(scene, x, y, texture, frame, config) {
        var _this_1 = _super.call(this, scene, x, y, texture, frame) || this;
        scene.add.existing(_this_1);
        var _this = _this_1;
        _this_1.bodyConf = {
            moves: true,
            boundingBox: {},
            update: function () { },
            destroy: function () { }
        };
        _this_1.bodyConf.updateBoundingBox = function () {
            this.boundingBox.minX = _this.x - _this.displayWidth / 2;
            this.boundingBox.minY = _this.y - _this.displayHeight / 2;
            this.boundingBox.maxX = _this.x + _this.displayWidth / 2;
            this.boundingBox.maxY = _this.y + _this.displayHeight / 2;
        };
        _this_1.bodyConf.updateBoundingBox();
        return _this_1;
    }
    return SpaceGameObject;
}(Phaser.GameObjects.Sprite));
exports.default = SpaceGameObject;
//# sourceMappingURL=GameObject.js.map

/***/ }),

/***/ "./GameObjects/PlayerShip.js":
/*!***********************************!*\
  !*** ./GameObjects/PlayerShip.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Ship_1 = __webpack_require__(/*! ./Ship */ "./GameObjects/Ship.js");
var PlayerShip = (function (_super) {
    __extends(PlayerShip, _super);
    function PlayerShip(scene, x, y, texture, frame, config) {
        var _this = _super.call(this, scene, x, y, texture, frame, config) || this;
        _this.keys = {
            turnLeft: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            turnRight: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            goForward: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            slowDown: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            shoot: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            shootZ: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
        };
        _this.controls = {
            turnLeft: function () {
                return _this.keys.turnLeft.isDown;
            },
            turnRight: function () {
                return _this.keys.turnRight.isDown;
            },
            goForward: function () {
                return _this.keys.goForward.isDown;
            },
            slowDown: function () {
                return _this.keys.slowDown.isDown;
            },
            shoot: function () {
                return false;
            }
        };
        return _this;
    }
    PlayerShip.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
    };
    return PlayerShip;
}(Ship_1.default));
exports.default = PlayerShip;
//# sourceMappingURL=PlayerShip.js.map

/***/ }),

/***/ "./GameObjects/Ship.js":
/*!*****************************!*\
  !*** ./GameObjects/Ship.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameObject_1 = __webpack_require__(/*! ./GameObject */ "./GameObjects/GameObject.js");
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship(scene, x, y, texture, frame, config) {
        var _this = _super.call(this, scene, x, y, texture, frame, config) || this;
        _this.maxSpeed = 5;
        _this.speedAcl = 0.5;
        _this.speedDeacl = 0.05;
        _this.manualSpeedDeacl = 0.35;
        _this.angleVel = 0.8;
        _this.angleAcl = 0.4;
        _this.angleDeacl = 0.1;
        _this.maxAngleVel = 3;
        _this.useAngleAcl = false;
        _this.speed = 0;
        return _this;
    }
    Ship.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
        if (this.useAngleAcl) {
            if (this.controls.turnLeft()) {
                this.angleVel -= this.angleAcl;
            }
            if (this.controls.turnRight()) {
                this.angleVel += this.angleAcl;
            }
            this.angleVel = Math.min(Math.max(this.angleVel, -this.maxAngleVel), this.maxAngleVel);
            if (!this.controls.turnLeft() && !this.controls.turnRight()) {
                if (this.angleVel > 0) {
                    this.angleVel -= this.angleDeacl;
                }
                if (this.angleVel < 0) {
                    this.angleVel += this.angleDeacl;
                }
                if (this.angleVel > -this.angleDeacl && this.angleVel < this.angleDeacl) {
                    this.angleVel = 0;
                }
            }
            this.setAngle(this.angle + this.angleVel);
        }
        else {
            if (this.controls.turnLeft()) {
                this.setAngle(this.angle - this.angleVel);
            }
            if (this.controls.turnRight()) {
                this.setAngle(this.angle + this.angleVel);
            }
        }
        if (this.controls.goForward()) {
            this.speed += this.speedAcl;
        }
        else {
            if (this.speed > 0) {
                this.speed -= this.speedDeacl;
            }
            else {
                this.speed = 0;
            }
        }
        if (this.controls.slowDown()) {
            if (this.speed > 0) {
                this.speed -= this.manualSpeedDeacl;
            }
            else {
                this.speed = 0;
            }
        }
        this.speed = Math.min(this.speed, this.maxSpeed);
        var angle = Phaser.Math.DEG_TO_RAD * (this.angle - 90);
        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;
        this.bodyConf.update();
    };
    return Ship;
}(GameObject_1.default));
exports.default = Ship;
//# sourceMappingURL=Ship.js.map

/***/ }),

/***/ "./Scenes/PlayLogicScene.js":
/*!**********************************!*\
  !*** ./Scenes/PlayLogicScene.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var PlayerShip_1 = __webpack_require__(/*! ../GameObjects/PlayerShip */ "./GameObjects/PlayerShip.js");
var PlayLogicScene = (function (_super) {
    __extends(PlayLogicScene, _super);
    function PlayLogicScene() {
        var _this = _super.call(this, "playLogic") || this;
        _this.selectedTexture = "GreenWType";
        return _this;
    }
    PlayLogicScene.prototype.preload = function () {
    };
    PlayLogicScene.prototype.create = function () {
        var playScene = this.scene.get("play");
        var world = playScene.csp.world;
        var playerShips = world.add.gameObjectArray(PlayerShip_1.default, "playerShip");
        this.mainPlayerShip = playerShips.add(this, 3000, 3000, this.selectedTexture);
        playScene.cameras.main.startFollow(this.mainPlayerShip);
        playScene.csp.syncWithGrid();
        playScene.loadStarScenes();
    };
    PlayLogicScene.prototype.update = function (time, delta) {
    };
    return PlayLogicScene;
}(Phaser.Scene));
exports.default = PlayLogicScene;
//# sourceMappingURL=PlayLogicScene.js.map

/***/ }),

/***/ "./Scenes/PlayScene.js":
/*!*****************************!*\
  !*** ./Scenes/PlayScene.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var StarScene_1 = __webpack_require__(/*! ./StarScene */ "./Scenes/StarScene.js");
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super.call(this, "play") || this;
    }
    PlayScene.prototype.preload = function () {
        this.load.image("GreenWType", "./assets/Ships/GreenWType.png");
        this.load.image("starBackground", "./assets/Stars/starBackground.png");
        this.load.scenePlugin({
            key: "CartesianSystemPlugin",
            url: "./libraries/CartesianSystemPlugin.js",
            sceneKey: 'csp'
        });
    };
    PlayScene.prototype.create = function () {
        this.cspConfig = {
            window: {
                width: this.game.config.width,
                height: this.game.config.height
            },
            grid: {
                cols: 100,
                rows: 100,
                cellWidth: 800,
                cellHeight: 800
            }
        };
        this.csp.initWorld(this.cspConfig);
        this.scene.run("playLogic");
    };
    PlayScene.prototype.loadStarScenes = function () {
        this.scene.add("spaceStar", StarScene_1.default, true, {
            imageKey: "starBackground",
            cspConfig: {
                window: {
                    width: this.cspConfig.width,
                    height: this.cspConfig.height
                },
                grid: {
                    cols: 100,
                    rows: 100,
                    cellWidth: 800,
                    cellHeight: 800,
                }
            }
        });
        this.scene.sendToBack("spaceStar");
    };
    PlayScene.prototype.update = function (time, delta) {
        var playerShip = this.scene.get("playLogic").mainPlayerShip;
        this.csp.setFollow(playerShip.x, playerShip.y);
        this.csp.updateWorld(function (csp) {
        });
    };
    return PlayScene;
}(Phaser.Scene));
exports.default = PlayScene;
//# sourceMappingURL=PlayScene.js.map

/***/ }),

/***/ "./Scenes/StarScene.js":
/*!*****************************!*\
  !*** ./Scenes/StarScene.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var SpaceStarScene = (function (_super) {
    __extends(SpaceStarScene, _super);
    function SpaceStarScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceStarScene.prototype.preload = function () {
        this.load.scenePlugin({
            key: "CartesianSystemPlugin",
            url: "./libraries/CartesianSystemPlugin.js",
            sceneKey: 'csStars'
        });
    };
    SpaceStarScene.prototype.create = function (data) {
        this.starScroll = (!data.starScroll || data.starScroll <= 0) ? 1 : data.starScroll;
        this.playScene = this.scene.get("play");
        this.csStars.initWorld(data.cspConfig || this.playScene.cspConfig);
        var bounds = this.csStars.world.bounds;
        var width = bounds.maxX - bounds.minX;
        var height = bounds.maxY - bounds.minY;
        this.subScrollX = (width - width / this.starScroll) * this.starScroll;
        this.subScrollY = (height - height / this.starScroll) * this.starScroll;
        this.rt = this.add.renderTexture(0, 0, this.game.config.width, this.game.config.height);
        this.cameras.main.ignore(this.rt);
        this.starImage = this.add.image(0, 0, data.imageKey);
        this.frontCamera = this.cameras.add();
        this.frontCamera.setOrigin(0, 0);
        this.frontCamera.ignore(this.rt);
        this.frontCamera.startFollow(this.cameras.main);
        this.cameras.add();
        this.tileStarImage();
        this.cellGraphics = this.add.graphics();
    };
    SpaceStarScene.prototype.tileStarImage = function () {
        var cellWidth = this.csStars.world.cameraGrid.cellWidth;
        var cellHeight = this.csStars.world.cameraGrid.cellHeight;
        var cellImageRT = this.add.renderTexture(0, 0, cellWidth, cellHeight);
        cellImageRT.beginDraw();
        for (var x = 0; x < cellWidth; x += this.starImage.displayWidth) {
            for (var y = 0; y < cellHeight; y += this.starImage.displayHeight) {
                cellImageRT.batchDraw(this.starImage, x, y);
            }
        }
        cellImageRT.endDraw();
        this.cellImageRT = cellImageRT;
    };
    SpaceStarScene.prototype.update = function () {
        var mainCam = this.playScene.cameras.main;
        var w = mainCam.width / 2;
        var h = mainCam.height / 2;
        var scrollX = mainCam.scrollX * this.starScroll - this.subScrollX - (w - w * this.starScroll);
        var scrollY = mainCam.scrollY * this.starScroll - this.subScrollY - (h - h * this.starScroll);
        var cam = this.cameras.main;
        cam.setScroll(scrollX, scrollY);
        cam.setZoom(mainCam.zoom);
        cam.setRoundPixels(true);
        cam.setAngle(this.getCameraAngle());
        var world = this.playScene.csp.world;
        this.csStars.world.camera.setWindow(world.camera.x, world.camera.y, world.camera.width + Math.floor(world.camera.width / mainCam.zoom), world.camera.height + Math.floor(world.camera.height / mainCam.zoom));
        this.csStars.setFollow(mainCam.scrollX * this.starScroll - this.subScrollX, mainCam.scrollY * this.starScroll - this.subScrollY);
        this.csStars.updateWorld();
        this.showGrid();
        this.sys.displayList.add(this.rt);
        this.sys.displayList.add(this.cellGraphics);
        this.renderStars();
        this.frontCamera.zoom = cam.zoom;
    };
    SpaceStarScene.prototype.getCameraAngle = function () {
        return 0;
    };
    SpaceStarScene.prototype.renderStars = function () {
        var _this = this;
        var world = this.csStars.world;
        var mainCam = this.cameras.main;
        var cellWidth = world.cameraGrid.cellWidth;
        var cellHeight = world.cameraGrid.cellHeight;
        this.rt.camera.x = -this.frontCamera.scrollX * this.frontCamera.zoom;
        this.rt.camera.y = -this.frontCamera.scrollY * this.frontCamera.zoom;
        this.rt.camera.zoom = this.frontCamera.zoom;
        this.rt.camera.setAngle(0);
        this.rt.clear();
        this.rt.beginDraw();
        world.loopThroughVisibleCells(function (cell, col, row) {
            _this.rt.batchDraw(_this.cellImageRT, Math.floor(col * cellWidth - mainCam.scrollX), Math.floor(row * cellHeight - mainCam.scrollY));
        });
        this.rt.endDraw();
    };
    SpaceStarScene.prototype.showGrid = function () {
        var _this = this;
        this.cellGraphics.clear();
        this.cellGraphics.lineStyle(2, 0x549431, 1.0);
        var world = this.csStars.world;
        var cellWidth = world.cameraGrid.cellWidth;
        var cellHeight = world.cameraGrid.cellHeight;
        world.loopThroughVisibleCells(function (cell, col, row) {
            _this.cellGraphics.strokeRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
        });
    };
    return SpaceStarScene;
}(Phaser.Scene));
exports.default = SpaceStarScene;
//# sourceMappingURL=StarScene.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.js ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var PlayScene_1 = __webpack_require__(/*! ./Scenes/PlayScene */ "./Scenes/PlayScene.js");
var PlayLogicScene_1 = __webpack_require__(/*! ./Scenes/PlayLogicScene */ "./Scenes/PlayLogicScene.js");
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    disableContextMenu: true,
    scene: [
        PlayScene_1.default, PlayLogicScene_1.default
    ],
};
var game = new Phaser.Game(config);
window.game = game;
//# sourceMappingURL=index.js.map
})();

PlanetSearchNexus = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=PlanetSearchNexus.js.map