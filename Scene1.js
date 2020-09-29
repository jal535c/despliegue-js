class Scene1 extends Phaser.Scene {   //hereda de la clase Scene de Phaser
  constructor() {
    super("bootGame");    //nombre o key o id de mi scene, para que lo sepa el padre
  }


  preload() {     //lo que cargue lo tengo disponible para todas las scenas
    this.load.image("background", "assets/images/background.png");   
    
    this.load.spritesheet("ship1", "assets/spritesheets/ship.png", {frameWidth:16, frameHeight: 16} );  //id, url, tamaño sprite
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {frameWidth:32, frameHeight: 16} );
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {frameWidth:32, frameHeight: 32} );

    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {frameWidth:16, frameHeight: 16} );
  }


  create() {
    this.add.text(20, 20, 'Loading game...');     //parametros: coordenadas, texto
    console.log("cargando Scene 1");     //veo el texto por consola de chrome    
   
    this.scene.start("playGame");   //lanza la otra scena    
  }
}