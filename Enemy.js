

class Enemy extends Phaser.GameObjects.Sprite {
  constructor(cfg) {

    super(cfg.scene, cfg.x, cfg.y, cfg.texture);

    cfg.scene.add.existing(this);

    this.play(cfg.anim);
  }


  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
  }


  /**
   * Movement management
   * @param ship - object to move
   * @param speed - object speed
   */
  moveShip(ship, speed) {   //la quiero usar para los 3 ship, por eso le paso la nave     
    ship.y += speed;

    if (ship.y > config.height+10) {
      this.resetShipPos(ship);
    }
  }


  /**
   * Reset ship position with random x
   * @param ship - object to reset position 
   */
  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0+10, config.width-10);
    ship.x = randomX;
  }
}