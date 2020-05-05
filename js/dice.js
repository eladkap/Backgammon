class Dice {
  constructor(x, y, w, value, backColor) {
    this.pos = new Vector(x, y);
    this.cpos = new Vector(x + w / 2, y + w / 2);
    this.w = w;
    this.value = value;
    this.backColor = backColor;
  }

  Draw() {
    ctx.lineWidth = 1;
    ctx.fillStyle = this.backColor;
    ctx.strokeStyle = GRAY1;
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.w, this.w);
    ctx.fill();
    ctx.stroke();

    // Draw dots
    ctx.fillStyle = BLACK;
    if (this.value == 1) {
      this.DrawCenterDot();
    } else if (this.value == 2) {
      this.DrawBottomLeftDot();
      this.DrawTopRightDot();
    } else if (this.value == 3) {
      this.DrawCenterDot();
      this.DrawBottomLeftDot();
      this.DrawTopRightDot();
    } else if (this.value == 4) {
      this.DrawBottomLeftDot();
      this.DrawBottomRightDot();
      this.DrawTopRightDot();
      this.DrawTopLeftDot();
      ctx.closePath();
    } else if (this.value == 5) {
      this.DrawCenterDot();
      this.DrawBottomLeftDot();
      this.DrawBottomRightDot();
      this.DrawTopRightDot();
      this.DrawTopLeftDot();
    } else {
      this.DrawBottomLeftDot();
      this.DrawBottomRightDot();
      this.DrawTopRightDot();
      this.DrawTopLeftDot();
      this.DrawTopCenterDot();
      this.DrawBottomCenterDot();
    }
  }

  DrawCenterDot() {
    ctx.beginPath();
    ctx.arc(this.cpos.x, this.cpos.y, DICE_DOT_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }

  DrawTopCenterDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  DrawBottomCenterDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  DrawTopLeftDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x - this.w / 4,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  DrawTopRightDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x + this.w / 4,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  DrawBottomLeftDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x - this.w / 4,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  DrawBottomRightDot() {
    ctx.beginPath();
    ctx.arc(
      this.cpos.x + this.w / 4,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
