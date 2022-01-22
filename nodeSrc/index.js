"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayScene_1 = require("./Scenes/PlayScene");
var PlayLogicScene_1 = require("./Scenes/PlayLogicScene");
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