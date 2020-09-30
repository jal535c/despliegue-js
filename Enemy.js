class Enemy extends Phaser.GameObjects.Sprite {
  constructor(cfg) {

    super(cfg.scene, cfg.x, cfg.y, cfg.texture);

    cfg.scene.add.existing(this);

    this.play(cfg.anim);
  }


  update() {

  }
}