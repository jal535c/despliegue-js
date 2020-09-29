class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }


  create() {
    this.bgScene2 = this.add.tileSprite(0, 0, config.width, config.height, "background").setOrigin(0,0);
    
    this.ship1 = this.add.sprite(config.width/2-50, config.height/2, "ship1");
    this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
    this.ship3 = this.add.sprite(config.width/2+50, config.height/2, "ship3");
    

    this.add.text(20, 50, 'THE Game!!!', {font:"25px Arial", fill:"yellow"});   //le paso un objeto, propiedad font y color de relleno
    console.log("cargando Scene 2");     //veo el texto por consola de chrome    
  }


  /**
   * 60 times per secons (jsdoc para que muestre informacion de mis metodos)
   */
  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);

    this.bgScene2.tilePositionY -= 0.5;   //se retrasa 0.5seg, para parecer efecto scroll paralax
  }


  /**
   * 
   * @param {*} ship 
   * @param {*} speed 
   */
  moveShip(ship, speed) {   //la quiero usar para los 3 ship, por eso le paso la nave 
    //this.ship1...       si solo usara para ship1, no se lo paso, ya lo uso dentro
    
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
}