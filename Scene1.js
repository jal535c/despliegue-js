class Scene1 extends Phaser.Scene {   //hereda de la clase Scene de Phaser
  constructor() {
    super("bootGame");    //nombre o key o id de mi scene, para que lo sepa el padre
  }


  preload() {     //lo que cargue lo tengo disponible para todas las scenas
    this.load.image("background", "assets/images/background.png");   
    
    this.load.image("ship1", "assets/images/ship.png");     //parametros: id para usarlo, url del recurso
    this.load.image("ship2", "assets/images/ship2.png");
    this.load.image("ship3", "assets/images/ship3.png");    
  }


  create() {
    this.add.text(20, 20, 'Loading game...');     //parametros: coordenadas, texto
    console.log("cargando Scene 1");     //veo el texto por consola de chrome
    console.log(this);                   //para inspeccionar objetos por consola
   
    this.scene.start("playGame");   //lanza la otra scena    
  }
}