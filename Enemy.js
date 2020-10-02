class Enemy extends Phaser.GameObjects.Sprite {
//class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(configEnemy) {
    super(configEnemy.scene, configEnemy.posX, configEnemy.posY, configEnemy.texture);

    this.scene = configEnemy.scene;
    //this.x = configEnemy.posX;    //no es necasario, Sprite ya tiene x e y
    //this.y = configEnemy.posY;
    this.speed = configEnemy.speed;
    
    this.scene.add.existing(this);    //add the enemy to the current scene 
    this.scene.physics.world.enableBody(this);    //with physics

    this.play(configEnemy.anim);      //play the animation for the enemy

    //Make clickable the sprite (the enemy ship)
    this.setInteractive();
    this.scene.input.on('gameobjectdown', this.destroyShip, this.scene);    //listener o callback, le paso evento (un gameobjectdown es un click), delegado, contexto
  }


  update() {
    this.moveShip();
  }


  /**
   * Movement management
   * @param ship - object to move
   * @param speed - object speed
   */
  moveShip() {  
    this.y += this.speed;
    
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
   * Destroy the ship clickable. Is a callback function, gameObject will be this
   * @param pointer - mouse positions, no lo usamos todavia
   * @param gameObject - reference to the ship object, referencia al objeto que ha sido pulsado
   */
  destroyShip(pointer, gameObject) {    //gameObject (viene del input on) es una referencia al objeto k le hemos hecho click
    gameObject.setTexture("explosion");   //cambia la textura
    gameObject.play("explode");         //ejecuta la animacion
  }
}