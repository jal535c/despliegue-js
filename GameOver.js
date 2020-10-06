class GameOver extends Phaser.Scene {  
  constructor() {
    super("GameOver");   
  }


  create() {  
    this.add.text(20, 20, 'GAME OVER...', {font:"25px Arial", fill:"yellow"});
    console.log("loading Scene Game over");    
  }
}