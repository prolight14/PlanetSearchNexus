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