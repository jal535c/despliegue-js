class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }


  create() {
    this.bgScene2 = this.add.image(0, 0, "background").setOrigin(0,0);   //creo una nueva propiedad para esta clase
   
    this.ship1 = this.add.image(config.width/2-50, config.height/2, "ship1");   //parametros: coordenada x, y, id de la imagen
    this.ship1.setScale(2);
    this.ship1.flipY = true;

    this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
    
    this.ship3 = this.add.image(config.width/2+50, config.height/2, "ship3");
    this.ship3.angle += 30;

    this.add.text(20, 50, 'THE Game!!!', {font:"25px Arial", fill:"yellow"});   //le paso un objeto, propiedad font y color de relleno
    console.log("cargando Scene 2");     //veo el texto por consola de chrome    
  }


  /**
   * 60 times per secons (jsdoc para que muestre informacion de mis metodos)
   */
  update() {
    this.ship3.angle += 3;        //gira a 60 fps
    console.log(this.ship3.angle);    //saldrian datos constantemente por consola
  }
}