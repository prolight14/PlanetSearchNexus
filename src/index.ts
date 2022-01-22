// @ts-nocheck

import PlayScene from "./Scenes/PlayScene";
import PlayLogicScene from "./Scenes/PlayLogicScene";

let config: Phaser.Types.Core.GameConfig = {
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
        PlayScene, PlayLogicScene
    ],
}
var game: Phaser.Game = new Phaser.Game(config);

window.game = game;
