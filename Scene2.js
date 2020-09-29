//en vez de import Player from Player.js, añado Player.js al html


class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }


  create() {
    this.bgScene2 = this.add.tileSprite(0, 0, config.width, config.height, "background").setOrigin(0,0);
    
    this.ship1 = this.add.sprite(config.width/2-50, config.height/2, "ship1");
    this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
    this.ship3 = this.add.sprite(config.width/2+50, config.height/2, "ship3");
        
    //Play anims
    this.ship1.play("ship1_fly");
    this.ship2.play("ship2_fly");
    this.ship3.play("ship3_fly");

    //Make clickables the ships
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();
    this.input.on('gameobjectdown', this.destroyShip, this);    //listener o callback, le paso evento (un gameobjectdown es un click), delegado, contexto

    this.add.text(20, 50, 'THE Game!!!', {font:"25px Arial", fill:"yellow"});   //le paso un objeto, propiedad font y color de relleno
    console.log("cargando Scene 2");     //veo el texto por consola de chrome    

    //Create group for powerup object
    this.powerUps = this.physics.add.group();   //creo un grupo o coleccion para los powerups, que tendran fisicas

    //Create 6 objects and add to the group
    var maxObjects = 5;
    for (var i=0; i<=maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, "powerUp");
      this.powerUps.add(powerUp);             //añado el sprite con fisicas a la coleccion, va por referencia
      powerUp.setRandomPosition(0, 0, config.width, config.height);

      //if (Math.random() >0.5) {   //lo ideal, la mitad de cada uno
      if (i%2 == 0) {
        powerUp.play("red");    //activa animacion para el powerup rojo
      } else {
        powerUp.play("gray");
      }        
      
      powerUp.setVelocity(100, 100);    //establece la velocidad, la bola se sale de la pantalla
      powerUp.setCollideWorldBounds(true);    //choca con la pared, y se queda pegada
      powerUp.setBounce(1);           //la bola rebota a su velocidad
    }

    //Player create
    var configPlayer = {
      scene: this,
      posX: config.width/2,
      posY: config.height-60,
      texture: "player",
      color: '0xff0000',    //rojo, puedo usar sin comillas
      cursors: true       //usa las flechas cursores

    }
    this.player = new Player(configPlayer);

    //Player2 create
    var configPlayer2 = {
      scene: this,
      posX: config.width/2-50,
      posY: config.height-60,
      texture: "player",
      color: '0x00ff00',    //verde, puedo usar sin comillas
      cursors: false      //usa las teclas WASD

    }
    this.player2 = new Player(configPlayer2);

    //Create space key for fire
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }


  /**
   * Update 60 times per secons (jsdoc para que muestre informacion de mis metodos)
   */
  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
    
    this.bgScene2.tilePositionY -= 0.5;   //se retrasa 0.5seg, para parecer efecto scroll paralax

    this.player.update();
    this.player2.update();
    
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {    //al pulsar el spacebar, pinta fire por consola
      console.log("fire!!");
    }
  }
 

  /**
   * Move the ship
   * @param {*} ship 
   * @param {*} speed 
   */
  moveShip(ship, speed) {   //la quiero usar para los 3 ship, por eso le paso la nave     
    ship.y += speed;

    if (ship.y > config.height+10) {
      this.resetShipPos(ship);
    }
  }


  /**
   * Reset ship position with random x
   * @param {*} ship 
   */
  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0+10, config.width-10);
    ship.x = randomX;
  }


  /**
   * Destroy the ship clickable
   * @param {*} pointer no lo usamos todavia
   * @param {*} gameObject referencia al objeto que ha sido pulsado
   */
  destroyShip(pointer, gameObject) {    //gameObject (viene del input on) es una referencia al objeto k le hemos hecho click
    gameObject.setTexture("explosion");   //cambia la textura
    gameObject.play("explode");       //ejecuta la animacion
  }
}