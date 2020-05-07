class Dice {
  constructor(x, y, w, value, backColor) {
    this.pos = new Vector(x, y);
    this.cpos = new Vector(x + w / 2, y + w / 2);
    this.w = w;
    this.value = value;
    this.backColor = backColor;
  }

  Draw() {
    strokeWeight(1);
    fill(this.backColor);
    stroke(GRAY1);
    rect(this.pos.x, this.pos.y, this.w, this.w);

    // Draw dots
    fill(BLACK);
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
    ellipse(this.cpos.x, this.cpos.y, DICE_DOT_RADIUS, DICE_DOT_RADIUS);
  }

  DrawTopCenterDot() {
    ellipse(
      this.cpos.x,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }

  DrawBottomCenterDot() {
    ellipse(
      this.cpos.x,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }

  DrawTopLeftDot() {
    ellipse(
      this.cpos.x - this.w / 4,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }

  DrawTopRightDot() {
    ellipse(
      this.cpos.x + this.w / 4,
      this.cpos.y - this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }

  DrawBottomLeftDot() {
    ellipse(
      this.cpos.x - this.w / 4,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }

  DrawBottomRightDot() {
    ellipse(
      this.cpos.x + this.w / 4,
      this.cpos.y + this.w / 4,
      DICE_DOT_RADIUS,
      DICE_DOT_RADIUS
    );
  }
}
