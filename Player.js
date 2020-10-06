class Player extends Phaser.Physics.Arcade.Sprite {   
  /**
   * Player manager
   * @param - configPlayer 
   */
  constructor(configPlayer) {   
    super(configPlayer.scene, configPlayer.posX, configPlayer.posY, configPlayer.texture);
    
    this.scene = configPlayer.scene;

    //Add the player to the current scene, and enables physics
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    
    this.setCollideWorldBounds(true);     //Set limits of the world
    this.play("player_fly");  

    this.setTint(configPlayer.color);   //paint semi-transparent color on top of sprite
    
    if (configPlayer.cursors) {
      this.playerKeys = configPlayer.scene.input.keyboard.createCursorKeys();
    } else {
      this.playerKeys = configPlayer.scene.input.keyboard.addKeys({   
        up: Phaser.Input.Keyboard.KeyCodes.W,       
        left: Phaser.Input.Keyboard.KeyCodes.A,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        right: Phaser.Input.Keyboard.KeyCodes.D
      });
    }
    
    this.shootKey = this.scene.input.keyboard.addKey(configPlayer.shootKey);  
    
    this.beamMax = configPlayer.beamMax;
    this.lives = 3;

    //paint the beams numbers
    let posX = (configPlayer.playerNumber == 1) ? 10 : 220;
    this.beamTxt = this.scene.add.text(posX, 0, this.beamMax, {font:"25px Arial", fill:"yellow"}).setDepth(2);
  }


  /**
   * Update player, called by the Level1 update
   */
  update() {   
    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.shootKey) && this.beamMax>0) {      
      this.beamMax--;
      this.beamTxt.text = this.beamMax;      
      
      var beam = new Beam({
        scene: this.scene,
        posX: this.x,
        posY: this.y - 16,      //beam start in front of the head
        texture: "beam"
      });      
    }
  }


  /**
   * Manager to move player
   */
  movePlayerManager() {
    this.body.setVelocity(0);     //stop if don't press key
    
    if (this.playerKeys.left.isDown) {
      this.body.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.playerKeys.right.isDown) {
      this.body.setVelocityX(gameSettings.playerSpeed);
    } 
    
    if (this.playerKeys.up.isDown) {      
      this.body.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.playerKeys.down.isDown) {
      this.body.setVelocityY(gameSettings.playerSpeed);
    }
  }
}