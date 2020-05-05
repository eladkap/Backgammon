class Triangle {
  constructor(x, y, w, h, index, dir, backColor, player) {
    this.pos = new Vector(x, y);
    this.w = w;
    this.h = h;
    this.index = index;
    this.dir = dir;
    this.checkers = [];
    this.backColor = backColor;
    this.player = player;
  }

  Draw() {
    ctx.lineWidth = 0;
    ctx.strokeStyle = BLACK;
    ctx.fillStyle = this.backColor;
    ctx.beginPath();
    if (this.dir == "bottom") {
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.w, this.pos.y);
      ctx.lineTo(this.pos.x + this.w / 2, this.pos.y - this.h);
    } else {
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.w, this.pos.y);
      ctx.lineTo(this.pos.x + this.w / 2, this.pos.y + this.h);
    }
    ctx.fill();

    // ctx.font = "30px Arial";
    // ctx.fillStyle = "black";
    // ctx.textAlign = "center";
    // ctx.fillText(this.index, this.pos.x + this.w * 0.5, this.pos.y);
  }

  CheckersNum() {
    return this.checkers.length;
  }

  GetPlayer() {
    return this.player;
  }

  SetPlayer(player) {
    this.player = player;
  }

  IsEmpty() {
    return (this.checkersNum = 0);
  }
}
