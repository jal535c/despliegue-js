class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }


  create() {
    this.bgScene2 = this.add.tileSprite(0, 0, config.width, config.height, "background").setOrigin(0,0);
        
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
      var powerUp = this.physics.add.sprite(16, 16, "powerUp");
      this.powerUps.add(powerUp);             //add by reference
      powerUp.setRandomPosition(0, 0, config.width, config.height);
      
      if (i%2 == 0) {       //is better than (Math.random() > 0.5)
        powerUp.play("red");    
      } else {
        powerUp.play("gray");
      }        
      
      powerUp.setVelocity(100, 100);        //Now goes out the screen
      powerUp.setCollideWorldBounds(true);  //Now sticky wall
      powerUp.setBounce(1);                 //Now bounce with the same velocity
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
      numberBeam: 20,
      //playerNumber: 1,
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
      numberBeam: 20,
      //playerNumber: 2,
    }
    this.player2 = new Player(configPlayer2);

    // A group for all the projectiles
    this.projectiles = this.add.group();

    var txtbalas1 = String(configPlayer.numberBeam);
    var txtbalas2 = String(configPlayer2.numberBeam);
    this.txt1 = this.add.text(10, 0, txtbalas2 , {font:"25px Arial", fill:"yellow"});
    this.txt2 = this.add.text(230, 0, txtbalas1, {font:"25px Arial", fill:"yellow"});
  }//create


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

    //update all the beams
    /*
    for (var i=0; this.scene.projectiles.getChildren.length; i++) {
      var beam = this.projectiles.getChildren[i];
      beam.update();
    }*/

    var beams = this.projectiles.getChildren();   //return array
    beams.forEach((beam) => {       
      beam.update();
    });
    
    var txtbalas1 = String(this.player.numberBeam);
    var txtbalas2 = String(this.player2.numberBeam);
    this.txt1.setText(txtbalas1);
    this.txt2.setText(txtbalas2);    
  }  
}