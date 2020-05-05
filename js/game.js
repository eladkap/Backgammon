class Game {
  constructor() {
    //borderSize, borderColor, backColor
    this.board = new Board(
      BOARD_X,
      BOARD_Y,
      BOARD_WIDTH,
      BOARD_HEIGHT,
      BORDER_SIZE,
      BROWN,
      ANTIQUEWHITE
    );
    this.dices = this.CreateDices();
  }

  Draw() {
    this.board.Draw();
    for (let dice of this.dices) {
      dice.Draw();
    }
  }

  Reset() {
    this.board.Reset();
  }

  CreateDices() {
    let dices = [];
    let x = DICE_X;
    let y = DICE_Y;
    for (let i = 0; i < 2; i++) {
      let value = RandomInt(6);
      let dice = new Dice(x, y, DICE_WIDTH, value, WHITE);
      dices.push(dice);
      x += DICE_WIDTH * 1.5;
    }
    return dices;
  }
}
