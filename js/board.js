class Board {
  constructor(x, y, w, h, borderSize, borderColor, backColor) {
    this.pos = new Vector(x, y);
    this.w = w;
    this.h = h;
    this.borderSize = borderSize;
    this.borderColor = borderColor;
    this.backColor = backColor;
    this.triangles = this.CreateTriangles();
  }

  Draw() {
    ctx.lineWidth = this.borderSize;
    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.backColor;
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.w, this.h);
    ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
    ctx.strokeRect(this.pos.x, this.pos.y, this.w, this.h);

    /* Middle line */
    ctx.moveTo(this.pos.x + this.w / 2, this.pos.y);
    ctx.lineTo(this.pos.x + this.w / 2, this.pos.y + this.h);
    ctx.stroke();

    /* Draw triangles */
    for (let triangle of this.triangles) {
      triangle.Draw();
    }
  }

  CreateTriangles() {
    let triangles = [];

    let x = BOARD_X + BOARD_WIDTH - TRIANGLE_WIDTH - BORDER_SIZE;
    let y = BOARD_Y + BOARD_HEIGHT - BORDER_SIZE * 0.5;
    let w = TRIANGLE_WIDTH;
    let h = TRIANGLE_HEIGHT;
    let index = 1;

    /* Draw bottom triangles */
    let dir = 1;
    let backColor = TRIANGLE1;
    for (let i = 1; i <= TRIANGLES_NUMBER_IN_SECTOR; i++) {
      backColor = i % 2 == 0 ? TRIANGLE1 : TRIANGLE2;

      let tri = new Triangle(x, y, w, h, index, dir, backColor, 0, 0);
      triangles.push(tri);
      x -= TRIANGLE_WIDTH;
      index++;
    }
    x -= BORDER_SIZE;

    for (let i = 1; i <= TRIANGLES_NUMBER_IN_SECTOR; i++) {
      backColor = i % 2 == 0 ? TRIANGLE1 : TRIANGLE2;

      let tri = new Triangle(x, y, w, h, index, dir, backColor, 0, 0);
      triangles.push(tri);
      x -= TRIANGLE_WIDTH;
      index++;
    }

    /* Draw top triangles */
    dir = -1;
    x += TRIANGLE_WIDTH;
    y = BOARD_Y + BORDER_SIZE * 0.5;
    for (let i = 1; i <= TRIANGLES_NUMBER_IN_SECTOR; i++) {
      backColor = i % 2 == 0 ? TRIANGLE1 : TRIANGLE2;

      let tri = new Triangle(x, y, w, h, index, dir, backColor, 0, 0);
      triangles.push(tri);
      x += TRIANGLE_WIDTH;
      index++;
    }
    x += BORDER_SIZE;

    for (let i = 1; i <= TRIANGLES_NUMBER_IN_SECTOR; i++) {
      backColor = i % 2 == 0 ? TRIANGLE1 : TRIANGLE2;

      let tri = new Triangle(x, y, w, h, index, dir, backColor, 0, 0);
      triangles.push(tri);
      x += TRIANGLE_WIDTH;
      index++;
    }

    return triangles;
  }

  Reset() {
    let p1 = 1;
    let p2 = 2;
    this.triangles[0].SetCheckersNum(2, p2);
    this.triangles[11].SetCheckersNum(5, p2);
    this.triangles[16].SetCheckersNum(3, p2);
    this.triangles[18].SetCheckersNum(5, p2);
    this.triangles[23].SetCheckersNum(2, p1);
    this.triangles[12].SetCheckersNum(5, p1);
    this.triangles[7].SetCheckersNum(3, p1);
    this.triangles[5].SetCheckersNum(5, p1);
  }
}
