/**
 * Clase que implementa el rayo laser de la nave
 *
 * @class Beam
 * @extends {Phaser.GameObjects.Sprite}
 */
class Beam extends Phaser.GameObjects.Sprite {

  /**
   * Crea una instancia de Beam
   * @param {*} configBeam
   * @memberof Beam
   */
  constructor(configBeam) {
    super(configBeam.scene, configBeam.posX, configBeam.posY, configBeam.texture);

    this.scene = configBeam.scene;

    this.scene.add.existing(this);   
    this.scene.physics.world.enableBody(this);  

    this.play("beam_shoot");    

    this.body.velocity.y = -250;    //body required for physics

    this.scene.projectiles.add(this);
  }

/**
 * Destruye este objeto cuando llega a la parte superior de la escena
 *
 * @memberof Beam
 */
update() {
    if (this.y < 32) {     //beam disappears a little before the bound, for no kill enemy respawn
      this.destroy();
    }
  }
}