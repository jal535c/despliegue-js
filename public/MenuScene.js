/**
 * Clase para la escena de menu
 *
 * @class MenuScene
 * @extends {Phaser.Scene}
 */
class MenuScene extends Phaser.Scene {  
  
  /**
   * Crea una instancia de MenuScene.
   * @memberof MenuScene
   */
  constructor() {
    super("MenuScene");   
  }

  /**
   * Crea textos para la escena menu, y los hace interactivos.
   *
   * @memberof MenuScene
   */
  create() {  
    this.add.text(20, config.height/2 - 60, 'SPACE SHOOTER', {font:"25px Arial", fill:"yellow"});
    
    this.txt1p = this.add.text(40, config.height/2, '1 Player', {font:"25px Arial", fill:"yellow"});
    this.txt2p = this.add.text(40, config.height/2 + 40, '2 Player', {font:"25px Arial", fill:"yellow"});
    
    this.txt1p.setInteractive().on("pointerdown", ()=>{
      this.scene.start("Level1", {numPlayers: 1});
    });

    this.txt2p.setInteractive().on("pointerdown", ()=>{
      this.scene.start("Level1", {numPlayers: 2});
    });
  }
}