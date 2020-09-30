class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(cfg) {
    super(cfg.scene, cfg.posX, cfg.posY, cfg.texture);

    this.scene = cfg.scene;
    this.x = cfg.posX;
    this.y = cfg.posY;
    this.speed = cfg.speed;
    
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.play(cfg.anim);      

    //Make clickables the ships
    this.setInteractive();
    this.setInteractive();
    this.setInteractive();
    this.scene.input.on('gameobjectdown', this.destroyShip, this.scene);    //listener o callback, le paso evento (un gameobjectdown es un click), delegado, contexto
  }


  update() {
    this.moveShip(this.speed);
  }


  /**
   * Movement management
   * @param ship - object to move
   * @param speed - object speed
   */
  moveShip(speed) {  
    this.y += speed;
    
    if (this.y > config.height+10) {
      this.resetShipPos();
    }
  }


  /**
   * Reset ship position with random x
   * @param ship - object to reset position 
   */
  resetShipPos() {
    this.y = 0;
    var randomX = Phaser.Math.Between(0+10, config.width-10);
    this.x = randomX;
  }


  /**
   * Destroy the ship clickable
   * @param pointer - no lo usamos todavia
   * @param gameObject - referencia al objeto que ha sido pulsado
   */
  destroyShip(pointer, gameObject) {    //gameObject (viene del input on) es una referencia al objeto k le hemos hecho click
    gameObject.setTexture("explosion");   //cambia la textura
    gameObject.play("explode");       //ejecuta la animacion
  }
}