/**
 * Clase para los objetos extras con bonificaciones que aparecen en el juego
 *
 * @class PowerUp
 * @extends {Phaser.Physics.Arcade.Sprite}
 */
class PowerUp extends Phaser.Physics.Arcade.Sprite {
  
  /**
   * Crea una instancia de PowerUp.
   * @param {*} configPowerUp
   * @memberof PowerUp
   */
  constructor(configPowerUp) {
    super(configPowerUp.scene, 0, 0, configPowerUp.texture);

    this.scene = configPowerUp.scene;

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.scene.powerUps.add(this);      //add to the group by reference

    this.play(configPowerUp.anim);

    this.setRandomPosition(0, 0, config.width, config.height);

    this.setVelocity(100, 100);         //Now goes out the screen
    this.setCollideWorldBounds(true);   //Now sticky wall
    this.setBounce(1);                  //Now bounce with the same velocity

    this.extraLife = (configPowerUp.anim == "red") ? true : false;
    this.extraBeam = (configPowerUp.anim == "gray") ? true : false;    
  }
}