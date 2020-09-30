class BootScene extends Phaser.Scene {   //hereda de la clase Scene de Phaser
  constructor() {
    super("BootScene");    //nombre o key o id de mi scene, para que lo sepa el padre
  }


  init() {    //para inicializar variables

  }


  preload() {     //lo que cargue lo tengo disponible para todas las scenas
    this.load.image("background", "assets/images/background.png");   
    
    this.load.spritesheet("ship1", "assets/spritesheets/ship.png", {frameWidth:16, frameHeight: 16} );  //id, url, tamaño sprite
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {frameWidth:32, frameHeight: 16} );
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {frameWidth:32, frameHeight: 32} );

    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {frameWidth:16, frameHeight: 16} );

    this.load.spritesheet("powerUp", "assets/spritesheets/power-up.png", {frameWidth: 16, frameHeight: 16} );

    this.load.spritesheet("player", "assets/spritesheets/player.png", {frameWidth: 16, frameHeight: 24} );
  }


  create() {
    this.add.text(20, 20, 'Loading game...');     //parametros: coordenadas, texto
    console.log("cargando Scene 1");     //veo el texto por consola de chrome    
   
    //Sprite animations
    this.anims.create({
      key: "ship1_fly",
      frames: this.anims.generateFrameNumbers("ship1"),   //le paso el id del sprite
      frameRate: 20,
      repeat: -1    //en bucle
    });
    this.anims.create({
      key: "ship2_fly",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1    //en bucle
    });
    this.anims.create({
      key: "ship3_fly",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1    //en bucle
    });
    
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,   //solo se hace una vez
      hideOnComplete: true
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("powerUp", {start: 0, end: 1}),   //le paso id del spritesheet y numeros de sprites
      frameRate: 20,    //fps
      repeat: -1        //en bucle
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("powerUp", {start: 2, end: 3}),
      frameRate: 20,
      repeat: -1
    });
    
    this.anims.create({
      key: "player_fly",
      frames: this.anims.generateFrameNumbers("player"),    //asi los usa todos
      frameRate: 20,
      repeat: -1
    });

    this.scene.start("Level1");   //lanza la otra scena    
  }
}