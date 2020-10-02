class Player extends Phaser.Physics.Arcade.Sprite {   
  constructor(configPlayer) {   
    super(configPlayer.scene, configPlayer.posX, configPlayer.posY, configPlayer.texture);    //necesita: scene, x, y, texture
    
    this.scene = configPlayer.scene;    //creo una propiedad para Player, y la vinculo a la scene pasada

    //Add the player to the current scene, and enables physics to him (como this.physics.add.sprite)
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    
    this.setCollideWorldBounds(true);     //evita que se salga de la pantalla (choca con la pared)
    this.play("player_fly");   //activa la animacion

    this.setTint(configPlayer.color);   //pinta una capa de color semitransparente por encima del sprite
    
    if (configPlayer.cursors) {
      this.playerKeys = configPlayer.scene.input.keyboard.createCursorKeys();   //crea atributo para teclas de jugador
    } else {
      this.playerKeys = configPlayer.scene.input.keyboard.addKeys({   
        up: Phaser.Input.Keyboard.KeyCodes.W,       
        left: Phaser.Input.Keyboard.KeyCodes.A,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        right: Phaser.Input.Keyboard.KeyCodes.D
      });
    }
    
    this.shootKey = this.scene.input.keyboard.addKey(configPlayer.shootKey);  //crea tecla, desde la scene la añado y le digo cual
  }


  update() {      //llamado desde el update de la scene2
    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {    //al pulsar mi shoot key, pinta fire por consola
      console.log("fire!!");

      var beam = new Beam({
        scene: this.scene,
        posX: this.x,
        posY: this.y-16,
        texture: "beam"
      });
    }
  }


  movePlayerManager() {
    this.body.setVelocity(0);     //si no pulso tecla, permanece quieto
    //this.setVelocity(0);      //sin body tambien funciona
    if (this.playerKeys.left.isDown) {
      this.body.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.playerKeys.right.isDown) {
      this.body.setVelocityX(gameSettings.playerSpeed);
    } 
    
    if (this.playerKeys.up.isDown) {      //asi permite diagonales, con else no
      this.body.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.playerKeys.down.isDown) {
      this.body.setVelocityY(gameSettings.playerSpeed);
    }
  }
}