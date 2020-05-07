class Checker {
  constructor(x, y, radius, player) {
    this.pos = new Vector(x, y);
    this.radius = radius;
    this.player = player;
  }

  Draw() {
    strokeWeight(1);
    stroke(BLACK);
    if (this.player == 1) {
      fill(PLAYER1);
    } else {
      fill(PLAYER2);
    }
    ellipse(this.pos.x, this.pos.y, 2 * this.radius, 2 * this.radius);
  }
}
