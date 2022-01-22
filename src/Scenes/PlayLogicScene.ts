import PlayerShip from "../GameObjects/PlayerShip";
import PlayScene from "./PlayScene";

export default class PlayLogicScene extends Phaser.Scene
{
    constructor()
    {
        super("playLogic");
    }

    preload()
    {

    }

    public selectedTexture: string = "GreenWType";
    public mainPlayerShip: PlayerShip;

    create()
    {
        const playScene = this.scene.get("play") as PlayScene;
        const world = playScene.csp.world;

        const playerShips = world.add.gameObjectArray(PlayerShip, "playerShip");
        this.mainPlayerShip = playerShips.add(this, 3000, 3000, this.selectedTexture);

        playScene.cameras.main.startFollow(this.mainPlayerShip);

        // Very important to remember to call this since it makes the
        // csp recognize objects that have been added to space
        playScene.csp.syncWithGrid();

        playScene.loadStarScenes();
    }

    update(time: number, delta: number) 
    {
        
    }
}