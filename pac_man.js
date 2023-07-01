class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.frame = 0; //current frame
    this.maxFrame = 0; // total no. of animation's frames
    this.line = 0; // 0:left, 1:right, 2:up, 3:down
  }

  move() {
    this.maxFrame = 4; // frames start from 0
    if (keyIsDown(37) || keyIsDown(65)) {
      // left
      if (frameCount % 3 == 0) {
        this.line = 0;
        this.frame = ++this.frame % this.maxFrame;
        this.x -= 8;
      }
    } else if (keyIsDown(39) || keyIsDown(68)) {
      // right
      if (frameCount % 3 == 0) {
        this.line = 1;
        this.frame = ++this.frame % this.maxFrame;
        this.x += 8;
      }
    } else if (keyIsDown(38) || keyIsDown(87)) {
      // up
      if (frameCount % 3 == 0) {
        this.line = 2;
        this.frame = ++this.frame % this.maxFrame;
        this.y -= 8;
      }
    } else if (keyIsDown(40) || keyIsDown(83)) {
      // down
      if (frameCount % 3 == 0) {
        this.line = 3;
        this.frame = ++this.frame % this.maxFrame;
        this.y += 8;
      }
    }
  }
  draw() {
    image(
      pac_man,
      this.x,
      this.y,
      cellSize,
      cellSize,
      this.frame * tileSize,
      this.line * tileSize,
      tileSize,
      tileSize
    );
  }
}
