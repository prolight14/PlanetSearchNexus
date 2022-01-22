import Ship from "./Ship";

export default class PlayerShip extends Ship
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number | string, config?: any)
    {
        super(scene, x, y, texture, frame, config);

        this.keys = {
            turnLeft: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT), 
            turnRight: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            goForward: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            slowDown: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            shoot: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            shootZ: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
        };

        this.controls = {
            turnLeft: () =>
            {
                return this.keys.turnLeft.isDown;
            },
            turnRight: () =>
            {
                return this.keys.turnRight.isDown;
            },
            goForward: () =>
            {
                return this.keys.goForward.isDown;
            },
            slowDown: () =>
            {
                return this.keys.slowDown.isDown;
            },
            shoot: () =>
            {
                return false;
            }         
        };
    }

    private keys: {
        turnLeft: Phaser.Input.Keyboard.Key;
        turnRight: Phaser.Input.Keyboard.Key;
        goForward: Phaser.Input.Keyboard.Key;
        slowDown: Phaser.Input.Keyboard.Key;
        shoot: Phaser.Input.Keyboard.Key;
        shootZ: Phaser.Input.Keyboard.Key;
    };

    public preUpdate(time: number, delta: number)
    {
        super.preUpdate(time, delta);

        
    }
}