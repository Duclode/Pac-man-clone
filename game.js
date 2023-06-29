// pac-man 28 tiles in width 30 tiles in height
// https://editor.p5js.org/slow_izzm/sketches/QteUQyZUu
// tileset; 160 X 128
// tileset tile size: 32px x 32px

// prettier-ignore
let tileMap = [
  [6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7],
  [5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5],
  [5, 20, 6, 2, 2, 7, 20, 6, 2, 2, 2, 7, 20, 5, 5, 20, 6, 2, 2, 2, 7, 20, 6, 2, 2, 7, 20, 5],
  [5, 20, 11, 2, 2, 12, 20, 11, 2, 2, 2, 12, 20, 11, 12, 20, 11, 2, 2, 2, 12, 20, 11, 2, 2, 12, 20, 5],
  [5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5],
  [5, 20, 1, 2, 2, 3, 20, 6, 7, 20, 1, 2, 2, 7, 6, 2, 2, 3, 20, 6, 7, 20, 1, 2, 2, 3, 20, 5],
  [5, 20, 20, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 20, 20, 5],
  [11, 2, 2, 2, 2, 7, 20, 5, 16, 2, 2, 3, 21, 11, 12, 21, 1, 2, 2, 16, 5, 20, 6, 2, 2, 2, 2, 12],
  [21, 21, 21, 21, 21, 5, 20, 5, 5, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 5, 5, 20, 5, 21, 21, 21, 21, 21],
  [2, 2, 2, 2, 2, 12, 20, 11, 12, 21, 6, 2, 3, 21, 21, 1, 2, 7, 21, 11, 12, 20, 11, 2, 2, 2, 2, 2],
  [21, 21, 21, 21, 21, 21, 20, 21, 21, 21, 5, 21, 21, 21, 21, 21, 21, 5, 21, 21, 21, 20, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 20, 21, 21, 21, 5, 21, 21, 21, 21, 21, 21, 5, 21, 21, 21, 20, 21, 21, 21, 21, 21, 21],
  [2, 2, 2, 2, 2, 7, 20, 6, 7, 21, 11, 2, 2, 2, 2, 2, 2, 12, 21, 6, 7, 20, 6, 2, 2, 2, 2, 2],
  [21, 21, 21, 21, 21, 5, 20, 5, 5, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 5, 5, 20, 5, 21, 21, 21, 21, 21],
  [6, 2, 2, 2, 2, 12, 20, 11, 12, 21, 1, 2, 2, 7, 6, 2, 2, 3, 21, 11, 12, 20, 11, 2, 2, 2, 2, 7],
  [5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5],
  [5, 20, 1, 2, 2, 7, 20, 6, 2, 2, 2, 7, 20, 5, 5, 20, 6, 2, 2, 2, 7, 20, 6, 2, 2, 3, 20, 5],
  [5, 20, 20, 20, 20, 5, 20, 11, 2, 2, 2, 12, 20, 11, 12, 20, 11, 2, 2, 2, 12, 20, 5, 20, 20, 20, 20, 5],
  [16, 2, 2, 3, 20, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10, 20, 1, 2, 2, 16],
  [5, 20, 20, 20, 20, 20, 20, 0, 20, 20, 1, 2, 2, 7, 6, 2, 2, 3, 20, 20, 0, 20, 20, 20, 20, 20, 20, 5],
  [5, 20, 20, 20, 20, 20, 20, 5, 20, 20, 20, 20, 20, 5, 5, 20, 20, 20, 20, 20, 5, 20, 20, 20, 20, 20, 20, 5],
  [5, 20, 1, 2, 2, 2, 2, 16, 2, 2, 2, 3, 20, 11, 12, 20, 1, 2, 2, 2, 16, 2, 2, 2, 2, 3, 20, 5],
  [5, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 5],
  [11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 12]
];

let cellImgs = ["white", "red"];
cellSize = 0;
let mapWidth = tileMap[0].length;
let mapHeight = tileMap.length;
console.log(mapWidth, mapHeight);
let tileSize = 32; // 32px x 32px
function preload() {
  tileSet = loadImage("images/pacmanTileset.png");
  pill = loadImage("images/pac man pills/spr_pill_0.png");
  pac_man = loadImage("images/pac_man/pac_man_0.png");
  blinky = loadImage("images/ghost/red ghost/spr_ghost_red_0.png");
  pinky = loadImage("images/ghost/pink ghost/spr_ghost_pink_0.png");
  inky = loadImage("images/ghost/blue ghost/spr_ghost_blue_0.png");
  clyde = loadImage("images/ghost/orange ghost/spr_ghost_orange_0.png");
}

// dynamically calcualtes the dimensions of tilemap
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  ellipseMode(CORNER);
  cellSize = floor(min(width / mapWidth, height / mapHeight));
  //console.log(cellSize);
}

function draw() {
  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      if (tileMap[y][x] == 20 || tileMap[y][x] == 21) {
        fill("black");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        noStroke();
      }
      image(
        tileSet,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize,
        (tileMap[y][x] % 5) * tileSize,
        floor(tileMap[y][x] / 5) * tileSize,
        tileSize,
        tileSize
      );
    }
  }
  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      if (tileMap[y][x] == 20) {
        image(
          pill,
          x * cellSize + 12,
          y * cellSize + 10,
          cellSize / 4,
          cellSize / 4,
          0,
          0,
          8,
          8
        );
        console.log("hit");
      }
    }
  }
  image(
    pac_man,
    12 * cellSize, // x coordinate
    13 * cellSize, // y coordinate
    cellSize,
    cellSize,
    0,
    0,
    tileSize,
    tileSize
  );
  image(
    inky,
    11 * cellSize, // x coordinate
    11 * cellSize, // y coordinate
    cellSize,
    cellSize,
    0,
    0,
    tileSize,
    tileSize
  );
  image(
    pinky,
    13 * cellSize, // x coordinate
    10 * cellSize, // y coordinate
    cellSize,
    cellSize,
    0,
    0,
    tileSize,
    tileSize
  );
  image(
    clyde,
    15 * cellSize, // x coordinate
    11 * cellSize, // y coordinate
    cellSize,
    cellSize,
    0,
    0,
    tileSize,
    tileSize
  );
  image(
    blinky,
    13 * cellSize, // x coordinate
    8 * cellSize, // y coordinate
    cellSize,
    cellSize,
    0,
    0,
    tileSize,
    tileSize
  );
}
console.log(mapWidth);
