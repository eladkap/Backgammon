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
    strokeWeight(0);
    stroke(BLACK);
    fill(this.backColor);
    if (this.dir == 1) {
      triangle(
        this.pos.x,
        this.pos.y,
        this.pos.x + this.w,
        this.pos.y,
        this.pos.x + this.w / 2,
        this.pos.y - this.h
      );
    } else {
      triangle(
        this.pos.x,
        this.pos.y,
        this.pos.x + this.w,
        this.pos.y,
        this.pos.x + this.w / 2,
        this.pos.y + this.h
      );
    }

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
    let y = this.cpos.y - this.dir * this.checkers.length * CHECKER_RADIUS * 2;
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
