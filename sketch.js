
var trex, trexCorrendo, solo, soloImg;
function preload() {
  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200)

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("correndo", trexCorrendo);
  trex.scale = 0.5;

  solo = createSprite(300, 180, 600, 20);
  solo.addImage(soloImg);
}

function draw() {
  background("white");
  solo.velocityX = -2;

  if (solo.x < 0) {
    solo.x = solo.width / 2;
  }

  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;


  trex.collide(solo);
  drawSprites();
}
