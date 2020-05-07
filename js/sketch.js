/* GLOBALS */
var game;
var btnRollDice;

function SetGame() {
  game = new Game();
  SetButtons();
  game.Reset();
}

function SetButtons() {
  btnRollDice = SetButton(
    BOARD_X + BOARD_WIDTH / 6,
    BOARD_Y + BOARD_HEIGHT / 2.2,
    "Roll Dice",
    "60px",
    ROYAL,
    RollDices
  );
}

function RollDices() {
  game.RollDices();
}

/* MAIN */
function setup() {
  createCanvas(windowWidth, windowHeight);
  SetGame();
}

function draw() {
  game.Draw();
}
