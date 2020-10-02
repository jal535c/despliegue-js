class Beam extends Phaser.GameObjects.Sprite {
  constructor(configBeam) {
    //this.x = configBeam.player.x;
    //this.y = configBeam.player.y -16;  //para k salga del morro

    super(configBeam.scene, configBeam.posX, configBeam.posY, configBeam.texture);

    this.scece = configBeam.scene;

    this.scene.add.existing(this);    //add the enemy to the current scene 
    this.scene.physics.world.enableBody(this);    //with physics

    this.play("anim_shoot");    //configBeam.anim

    this.body.velocity.y = -250;    //body obligado para las fisicas

    this.scene.projectiles.add(this);
  }


  update() {
    if (this.y < 32) {     //la bala desaparece un poco antes, es para no matar un enenmy k esta saliendo
      this.destroy();
    }
  }
}