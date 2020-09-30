//en vez de import Player from Player.js, añado Player.js al html


class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }


  create() {
    this.bgScene2 = this.add.tileSprite(0, 0, config.width, config.height, "background").setOrigin(0,0);
        
    var configEnemy1 = {
      scene: this,
      posX: config.width/2-50,
      posY: config.height/2,
      texture: "ship1",
      anim: "ship1_fly",
      speed: 1  
    }
    this.ship1 = new Enemy(configEnemy1);
    
    var configEnemy2 = {
      scene: this,
      posX: config.width/2,
      posY: config.height/2,
      texture: "ship2",
      anim: "ship2_fly",
      speed: 2
    }
    this.ship2 = new Enemy(configEnemy2);

    var configEnemy3 = {
      scene: this,
      posX: config.width/2+50,
      posY: config.height/2,
      texture: "ship3",
      anim: "ship3_fly",
      speed: 3
    }
    this.ship3 = new Enemy(configEnemy3);

    
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
      color: "0xff0000",    //rojo, puedo usar sin comillas, o comillas simples
      cursors: true,       //usa las flechas cursores
      shootKey: Phaser.Input.Keyboard.KeyCodes.K
    }
    this.player = new Player(configPlayer);

    //Player2 create
    var configPlayer2 = {
      scene: this,
      posX: config.width/2-50,
      posY: config.height-60,
      texture: "player",
      color: "0x00ff00",    //verde, puedo usar sin comillas, o comillas simples
      cursors: false,      //usa las teclas WASD
      shootKey: Phaser.Input.Keyboard.KeyCodes.F
    }
    this.player2 = new Player(configPlayer2);    
  }


  /**
   * Update 60 times per secons (jsdoc para que muestre informacion de mis metodos)
   */
  update() {    
    this.ship1.update();
    this.ship2.update();
    this.ship3.update();
    
    this.bgScene2.tilePositionY -= 0.5;   //se retrasa 0.5seg, para parecer efecto scroll paralax

    this.player.update();
    this.player2.update();    
  }  
}