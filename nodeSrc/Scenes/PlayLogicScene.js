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
var PlayerShip_1 = require("../GameObjects/PlayerShip");
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