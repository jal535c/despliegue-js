class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }


  create() {
    //TileSprite background
    this.bgScene2 = this.add.tileSprite(0, 0, config.width, config.height, "background").setOrigin(0,0);
        
    //create physics group for collisions enemies
    this.enemies = this.physics.add.group();

    //Create the enemies
    var configEnemy1 = {
      scene: this,
      posX: config.width/2 - 50,
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
      posX: config.width/2 + 50,
      posY: config.height/2,
      texture: "ship3",
      anim: "ship3_fly",
      speed: 3
    }
    this.ship3 = new Enemy(configEnemy3);

    
    this.add.text(20, 50, 'THE Game!!!', {font: "25px Arial", fill: "yellow"});
    console.log("cargando Scene 2");

    //Create group or collection for powerup object
    this.powerUps = this.physics.add.group();

    //Create 4 objects and add to the group
    var maxObjects = 4;
    for (var i=0; i<maxObjects; i++) {
      var anim = (i%2 == 0) ? "red" : "gray";
      
      var powerUp = new PowerUp({
        scene: this, 
        texture: "powerUp",
        anim: anim,        
      });      
    }

    //Player create
    var configPlayer = {
      scene: this,
      posX: config.width/2,
      posY: config.height - 60,
      texture: "player",
      color: "0xff0000",    //red, also valid without double quotes
      cursors: true,       //use the cursor keys
      shootKey: Phaser.Input.Keyboard.KeyCodes.K,
      beamMax: 20,
      playerNumber: 2
    }
    this.player = new Player(configPlayer);

    //Player2 create
    var configPlayer2 = {
      scene: this,
      posX: config.width/2 - 50,
      posY: config.height - 60,
      texture: "player",
      color: "0x00ff00",    //green
      cursors: false,      //use the WASD keys
      shootKey: Phaser.Input.Keyboard.KeyCodes.F,
      beamMax: 20,
      playerNumber: 1
    }
    this.player2 = new Player(configPlayer2);

    // A group for all the projectiles
    this.projectiles = this.add.group();

    //Collisions
    //this.physics.add.collider(this.player, this.powerUps);
    //this.physics.add.collider(this.powerUps, this.powerUps);

    this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);
    this.physics.add.overlap(this.player2, this.powerUps, this.pickPowerUp, null, this);
    
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
    this.physics.add.overlap(this.player2, this.enemies, this.hurtPlayer, null, this);
  }//create


  /**
   * Collision between player and enemy
   * @param - player 
   * @param - enemy 
   */
  hurtPlayer(player, enemy) {
    enemy.resetShipPos();
    player.x = config.width / 2;
    player.y = config.height - 60;
    
    player.lives--;
  }


  /**
   * Collision between player and powerUp
   * @param - player 
   * @param - powerUp
   */
  pickPowerUp(player, powerUp) {
    if (powerUp.extraLife) player.lives++;
    if (powerUp.extraBeam) {
      player.beamMax += 10;
      player.beamTxt.text = player.beamMax;   //update beam text
    }
    
    powerUp.destroy();
  }


  /**
   * Update 60 times per secons
   */
  update() {    
    this.ship1.update();
    this.ship2.update();
    this.ship3.update();
    
    this.bgScene2.tilePositionY -= 0.5;   //scroll effect

    this.player.update();
    this.player2.update();
    
    if (this.player.lives==0 && this.player2.lives==0) {
      this.scene.start("GameOver");
    }

    //update all the beams
    var beams = this.projectiles.getChildren();   //return array
    beams.forEach((beam) => {       
      beam.update();
    });
  }  
}