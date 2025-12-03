

export class startScene extends Phaser.Scene {
    constructor() {
        super('startScene');
    }

    


    preload() {
        this.load.image("background","assets/background/mainBackground.png")
        
    }

    
    create() {
        this.background = this.add.tileSprite(640, 360, 1280, 460,"background")
        this.titletext = this.add.text(450,50,"Immortal protocol",{font : "40px courier",fill : "#00ff00"})
        this.tweens.add({
            targets : this.titletext,
            x : this.titletext.x+10,
            duration : 580,
            yoyo : true,
            repeat : -1
        })
        
        var animationConfig = {
    key : "shake",
    frames : this.anims.generateFrameNumbers("Logoname",{
        start : 0,
        end : 5
    }),
    repeat : -1,
    frameRate : 10
    
}
        this.anims.create(animationConfig)
    }

   

    update(){
        this.background.tilePositionX += 0.2
    }

}
