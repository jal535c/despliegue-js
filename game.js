var config = {      
  width: 256,       
  height: 272,
  backgroundColor: 0x000000,    
  scene: [BootScene, Level1, GameOver],
  pixelArt: true,     
  physics: {          // Select physics engine 
    default: "arcade",    
    arcade: {
      debug: false    
    }
  }
}

var gameSettings = {
  playerSpeed: 200,
}

var game = new Phaser.Game(config);     // Create the game