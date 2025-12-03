export class startScene extends Phaser.Scene {
  constructor() {
    super("startScene");
  }

  preload() {
    this.load.image("background", "assets/background/purpleBG.jpeg");
  }

  create() {
   const texture = this.textures.get('background').source[0];
    const originalWidth = texture.width;
    const originalHeight = texture.height;

    const scaleFactor = this.scale.height / originalHeight;
    
    this.background = this.add.tileSprite(
      this.scale.width / 2 ,
      this.scale.height / 2 ,
      originalWidth,
      originalHeight,
      "background"
    )
    .setOrigin(0.5,0.5)
    .setScrollFactor(0,0)
    .setScale(scaleFactor)

    this.titletext = this.add.text(350, 80, "Immortal protocol", {
  
      fontSize: "36px",
      fontFamily : "'Press Start 2P'",
      fill: "#e1b67aff",
      backgroundColor : "black",
      
    });

    this.tweens.add ({
      targets : this.titletext,
      y : this.titletext.y+10,
      duration : 800,
      yoyo : true,
      repeat : -1,
      
    })
  }

  update() {
    
  }
}
