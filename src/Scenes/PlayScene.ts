import PlayLogicScene from "./PlayLogicScene";
import StarScene from "./StarScene";

export default class PlayScene extends Phaser.Scene
{
    constructor()
    {
        super("play");
    }

    preload()
    {
        this.load.image("GreenWType", "./assets/Ships/GreenWType.png");
        this.load.image("starBackground", "./assets/Stars/starBackground.png");

        this.load.scenePlugin({
            key: "CartesianSystemPlugin",
            url: "./libraries/CartesianSystemPlugin.js",
            sceneKey: 'csp'
        });
    }

    public cspConfig: any;
    public csp: any;

    create()
    {
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
    }

    loadStarScenes()
    {
        this.scene.add("spaceStar", StarScene, true,
        {
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
    }

    update(time: number, delta: number) 
    {
        var playerShip = (this.scene.get("playLogic") as PlayLogicScene).mainPlayerShip;

        this.csp.setFollow(playerShip.x, playerShip.y);

        this.csp.updateWorld((csp?: any) =>
        {
            
        });
    }
}