"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var StarScene_1 = require("./StarScene");
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