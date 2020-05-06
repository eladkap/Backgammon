class Triangle {
  constructor(x, y, w, h, index, dir, backColor, player) {
    this.pos = new Vector(x, y);
    this.cpos = new Vector(x + w / 2, y - CHECKER_RADIUS * dir);
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
    if (this.dir == 1) {
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.w, this.pos.y);
      ctx.lineTo(this.pos.x + this.w / 2, this.pos.y - this.h);
    } else {
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.w, this.pos.y);
      ctx.lineTo(this.pos.x + this.w / 2, this.pos.y + this.h);
    }
    ctx.fill();

    // ctx.fillStyle = RED;
    // ctx.beginPath();
    // ctx.arc(this.cpos.x, this.cpos.y, 3, 0, 2 * Math.PI);
    // ctx.fill();

    // ctx.font = "30px Arial";
    // ctx.fillStyle = "black";
    // ctx.textAlign = "center";
    // ctx.fillText(this.index, this.pos.x + this.w * 0.5, this.pos.y);

    // Draw checkers
    for (let checker of this.checkers) {
      checker.Draw();
    }
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
    return this.checkers.length == 0;
  }

  AddChecker(player) {
    let x = this.cpos.x;
    let y = this.cpos.y - this.dir * this.checkers.length * CHECKER_DIAMETER;
    let checker = new Checker(x, y, CHECKER_RADIUS, player);
    this.checkers.push(checker);
  }

  RemoveChecker() {}

  SetCheckersNum(checkersNum, player) {
    this.player = player;
    for (let i = 0; i < checkersNum; i++) {
      this.AddChecker(player);
    }
  }
}
