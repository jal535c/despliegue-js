/**
 * Clase para la escena de fin de juego
 *
 * @class GameOver
 * @extends {Phaser.Scene}
 */
class GameOver extends Phaser.Scene {  

  /**
   * Crea una instancia de GameOver.
   * @memberof GameOver
   */
  constructor() {
    super("GameOver");   
  }

  /**
   * Crea los textos mostrados en la escena.
   *
   * @memberof GameOver
   */
  create() {  
    this.gameOverTxt = this.add.text(40, config.height/2 - 20, 'GAME OVER', {font:"25px Arial", fill:"red"});
    console.log("loading Scene Game over");

    this.gameOverTxt.setInteractive().on("pointerdown", ()=>{
      this.scene.start("MenuScene");
    });
  }
}