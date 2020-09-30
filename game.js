var gameSettings = {
  playerSpeed: 200,
}

var config = {      //la variable config es accesible desde todos los js
  width: 256,       //mismo tamaño que la imagen de fondo
  height: 272,
  backgroundColor: 0x000000,    //en rgb, fondo negro
  scene: [BootScene, Level1],    //nombre de los ficheros sin extension, se lanza la primera, despues se llaman unas a otras
  pixelArt: true,     //se definen mejor los pixeles
  physics: {        //motor de fisicas 
    default: "arcade",    //selecciono el motor arcade, es mas sencillo, tambien esta matterjs
    arcade: {
      debug: false    //con true vemos mas informacion en la pantalla
    }
  }
}

var game = new Phaser.Game(config);     //creo el objeto pasandole config