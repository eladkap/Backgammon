/* GLOBALS */
var game;

function SetGame() {
  game = new Game();
  game.Reset();
}

/* MAIN */
function setup() {
  createCanvas(windowWidth, windowHeight);
  SetGame();
}

function draw() {
  game.Draw();
}
