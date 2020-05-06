class Checker {
  constructor(x, y, radius, player) {
    this.pos = new Vector(x, y);
    this.radius = radius;
    this.player = player;
  }

  Draw() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = BLACK;
    ctx.fillStyle = this.player == 1 ? PLAYER1 : PLAYER2;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
