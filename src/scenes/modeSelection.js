export default class modeSelection  extends Phaser.Scene {
  constructor() {
    super('modeSelection');
  }

  create() {
    console.log('Mode Selection Scene Loaded');
    this.add.text(100, 100, 'Mode Selection Scene', {
      fontSize: '32px',
      color: '#ffffff'
    });
  }
}
