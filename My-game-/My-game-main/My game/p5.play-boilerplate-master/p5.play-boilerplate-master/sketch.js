var bg, bgImg;
var shooter, shooterImg;
var enemy, enemyImg, enemyGroup;
var shooterBullet, shooterBulletImg;
var ufoBullet, ufoBulletImg;
var boom, boomImg;

function preload(){
  bgImg = loadImage("bg.jpg");
  shooterImg = loadImage("Shooter.png");
  enemyImg = loadImage("Ufo_img.png");
  ufoBulletImg = loadImage("Ufo bullet.png");
  shooterBulletImg = loadImage("shooter bullet.png");
  boomImg = loadImage("boom.png");
}
function setup() {
  createCanvas(800,400);
 
  bg = createSprite(100, 100, 800, 1200);
  bg.velocityY = 1;
  bg.addImage(`background`,bgImg);

  shooter = createSprite(200,300);
  shooter.addImage(shooterImg);
  shooter.scale = 0.2;
  
  
}

function draw() {
  background(255,255,255);
  
  if(bg.y > 400){
    bg.y = 200;
  }
  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x+3;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x-3;
  }

  if(keydown(SPACE)){

  }
 
  spawnUfos(); 
  drawSprites();
}

function spawnUfos(){
  if(frameCount % 150 === 0){
    var ufo = createSprite(random(50,700), 20);
    ufo.addImage(enemyImg);
    ufo.velocityY = 1;
    ufo.scale = 0.15;
  }
}

function shootBullet(){
  shooterBullet= createSprite(150, width/2, 50,20)
  shooterBullet.y= gun.y-20
  shooterBullet.addImage(bulletImg)
  shooterBullet.scale=0.12
  shooterBullet.velocityX= 7
  bulletGroup.add(shooterBullet)
}
