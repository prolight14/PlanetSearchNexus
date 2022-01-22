import GameObject from "./GameObject";

export default class Ship extends GameObject
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number | string, config?: any)
    {
        super(scene, x, y, texture, frame, config);
    }

    protected controls: {
        turnLeft: () => boolean;
        turnRight: () => boolean;
        goForward: () => boolean;
        slowDown: () => boolean;
        shoot: () => boolean;
    }

    protected maxSpeed: number = 5;
    protected speedAcl: number = 0.5;
    protected speedDeacl: number = 0.05;
    protected manualSpeedDeacl: number = 0.35;

    protected angleVel: number = 0.8;
    protected angleAcl: number = 0.4;
    protected angleDeacl: number = 0.1;
    protected maxAngleVel: number = 3;
    protected useAngleAcl: boolean = false;

    protected speed: number = 0;

    public preUpdate(time: number, delta: number)
    {
        super.preUpdate(time, delta);

        if(this.useAngleAcl)
        {
            if(this.controls.turnLeft())
            {
                this.angleVel -= this.angleAcl;
            }
            if(this.controls.turnRight())
            {
                this.angleVel += this.angleAcl;
            }
            this.angleVel = Math.min(Math.max(this.angleVel, -this.maxAngleVel), this.maxAngleVel);

            if(!this.controls.turnLeft() && !this.controls.turnRight())
            {
                if(this.angleVel > 0)
                {
                    this.angleVel -= this.angleDeacl;
                }
                if(this.angleVel < 0)
                {
                    this.angleVel += this.angleDeacl;
                }

                if(this.angleVel > -this.angleDeacl && this.angleVel < this.angleDeacl)
                {
                    this.angleVel = 0;
                }

            }

            this.setAngle(this.angle + this.angleVel);
        }
        else
        {
            if(this.controls.turnLeft())
            {
                this.setAngle(this.angle - this.angleVel);
            }     
            if(this.controls.turnRight())
            {
                this.setAngle(this.angle + this.angleVel);
            }
        }

        if(this.controls.goForward())
        {
            this.speed += this.speedAcl;
        }
        else 
        {
            if(this.speed > 0)
            {
                this.speed -= this.speedDeacl;
            }  
            else
            {
                this.speed = 0;
            } 
        }

        if(this.controls.slowDown())
        {
            if(this.speed > 0)
            {
                this.speed -= this.manualSpeedDeacl;
            }  
            else
            {
                this.speed = 0;
            } 
        }

        this.speed = Math.min(this.speed, this.maxSpeed);

        let angle = Phaser.Math.DEG_TO_RAD * (this.angle - 90);
        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;

        this.bodyConf.update();
    }
}