var canvas = document.getElementById("main");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

/* GLOBALS */
var game;

function SetGame() {
  game = new Game();
  game.Reset();
}

/* MAIN */
function Setup() {
  SetGame();
}

function Draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.Draw();
  requestAnimationFrame(Draw);
}

Setup();
requestAnimationFrame(Draw);
