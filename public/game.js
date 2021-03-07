/**
 * Objeto de configuración, contiene los parámetros de configuración del juego.
 * @type {{width: number, height: number, parent: string, pixelArt: boolean, physics: Object, scene: Array}}
 */
var config = {      
  width: 256,       
  height: 272,
  backgroundColor: 0x000000,    
  scene: [BootScene, Level1, GameOver, MenuScene],
  pixelArt: true,     
  physics: {          // Select physics engine 
    default: "arcade",    
    arcade: {
      debug: false    
    }
  }
}


/**
 * Velocidad del jugador
 * @type {{playerSpeed: number}} 
 */
var gameSettings = {
  playerSpeed: 200,
}


/** 
 * Guarda la instancia del juego.
 * @type {Game} 
 */
var game = new Phaser.Game(config);     // Create the game