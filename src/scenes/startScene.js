

export class startScene extends Phaser.Scene {
  constructor() {
    super("startScene");
  }

  preload() {
    this.load.image("background", "assets/background/mainBackground.png");
   this.load.image("playBtn","assets/Buttons/startbtn.png")
   this.load.image("creditBtn","assets/Buttons/creditBtn.png")
   this.load.image("exitBtn","assets/Buttons/exitBtn.png")
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
    

    this.titletext = this.add.text(350, 50, "Immortal protocol", {
  
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

   this.playBtn = this.add.image(330,300,"playBtn").setInteractive().setScale(0.8)
   this.playBtn.on("pointerdown",()=>{
    this.scene.start('modeSelection')
    console.log("playbtn hit")
   })

   this.creditBtn = this.add.image(360,400,"creditBtn").setInteractive()
   this.creditBtn.setScale(1)

   this.exitBtn = this.add.image(335,500,"exitBtn").setInteractive()
   this.exitBtn.setScale(0.9)
   
  }

  update() {
    
  }
}
