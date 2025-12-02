// "Every great game begins with a single scene. Let's make this one unforgettable!"

export class startScene extends Phaser.Scene {
    constructor() {
        super('startScene');
    }


    preload() {
        this.load.image("background","assets/background/mainBackground.png")
    }

    
    create() {
        this.background = this.add.tileSprite(640, 360, 1280, 460,"background")
    }

    update(){
        this.background.tilePositionX += 0.2
    }

}
