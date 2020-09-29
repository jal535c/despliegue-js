class Player extends Phaser.Physics.Arcade.Sprite {   
  constructor(configPlayer) {   
    super(configPlayer.scene, configPlayer.posX, configPlayer.posY, configPlayer.texture);    //necesita, la scene, posx, posy, texture, key
    
    //Add the player to the current scene, and enables physics to him
    configPlayer.scene.add.existing(this);
    configPlayer.scene.physics.world.enableBody(this);
    
    this.setCollideWorldBounds(true);     //evita que se salga de la pantalla
    this.play("player_fly");   //activa la animacion

    this.setTint(configPlayer.color);   //pinta una capa de color por encima del sprite
    
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
  }


  update() {      //llamado desde el update de la scene2
    this.movePlayerManager();
  }


  movePlayerManager() {
    this.body.setVelocity(0);     //si no pulso tecla, permanece quieto

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