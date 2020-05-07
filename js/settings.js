/* Colors */
const BLACK = [0, 0, 0];
const WHITE = [255, 255, 255];
const GRAY0 = [50, 50, 50];
const GRAY1 = [100, 100, 100];
const GRAY2 = [150, 150, 150];
const GRAY3 = [200, 200, 200];
const RED0 = [240, 128, 128];
const RED = [250, 0, 0];
const WOOD = [133, 94, 66];
const BISQUE = [255, 228, 196];
const ANTIQUEWHITE = [250, 235, 215];
const BROWN = [140, 70, 20];
const ORANGE = [255, 150, 50];
const PINK = [250, 0, 150];
const YELLOW = [255, 255, 0];
const GREEN = [0, 250, 0];
const GREEN_BG = [0, 70, 0];
const AQUA = [100, 255, 255];
const BLUE = [0, 0, 250];
const ROYAL = [65, 105, 225];
const PURPLE = [200, 0, 250];
const TURQUOISE = [32, 114, 106];
const TURQUOISELIGHT = [50, 180, 166];

/* Board */
const BOARD_X = 100;
const BOARD_Y = 50;
const BORDER_SIZE = 20;

/* Checker */
const CHECKER_RADIUS = 30;

/* Triangles */
const TRIANGLES_NUMBER_IN_SECTOR = 6;
const TRIANGLES_NUMBER = TRIANGLES_NUMBER_IN_SECTOR * 4;
const TRIANGLE_WIDTH = 80;
const TRIANGLE_HEIGHT = 320;

const BOARD_WIDTH =
  TRIANGLE_WIDTH * TRIANGLES_NUMBER_IN_SECTOR * 2 + 3 * BORDER_SIZE;
const BOARD_HEIGHT = TRIANGLE_HEIGHT * 2.5;

const STATS_WIDTH = 800;
const STATS_HEIGHT = 100;

const TRIANGLE1 = GRAY1;
const TRIANGLE2 = GRAY3;

/* Dices */
const DICE_X = BOARD_X + BOARD_WIDTH * 0.55;
const DICE_Y = BOARD_Y + BOARD_HEIGHT * 0.45;
const DICE_WIDTH = 80;
const DICE_DOT_RADIUS = 16;

/* Player colors */
const PLAYER1 = GRAY0;
const PLAYER2 = RED0;
