var bg, bgi;
var bird,birdi;
var invisibleB;
var bullet,bulleti,bulletG;
var gm,gmi;
var score=0;









function preload(){
  bgi=loadImage("bg.png");
  birdi=loadImage("bird2.png");
  bulleti=loadImage("bullrt.jpg");
  gmi=loadImage("gm2.png");
  

}

function setup() {
  createCanvas(600,600);
  
  bg=createSprite(280,250,600,200);
  bg.addImage("B", bgi);
  bg.scale=1.5;
  bg.x = width /2;
  
  bird=createSprite(200,200,20,20);
  bird.addImage("BI", birdi);
  bird.scale=0.3;
  
  invisibleB=createSprite(300,500,600,20);
  bulletG=new Group();
 
}

function draw() {
  
  background(0)
  
   
    
  
  
  bg.velocityX = -2;
  if (bg.x < 0) {
      bg.x = width /2;
      
    }
  
  
  if(keyDown("space")) {
    bird.velocityY=-10;
    score = score + Math.round(getFrameRate()/80);
  }
  

  bird.velocityY=bird.velocityY+0.5;
  
  if(bird.isTouching(bulletG)) {
    bird.velocityY=0;
    bird.velocityX=0;
    bulletG.destroyEach();
    gm=createSprite(200,200,10,10);
    gm.addImage("GM", gmi);
  }
  
 
  
 
  spawnBullets();
  
  
  
  
  drawSprites();
  
  
  fill("red")
   textSize(20)
text("Distance Traveled: "+ score,150,100);
  
 
}


function spawnBullets() {
  if (frameCount % 80===0) {
    bullet=createSprite(30,500,20,20);
    bullet.y=Math.round(random(30,500));
    bullet.velocityX=4;
    bullet.addImage("R", bulleti);
    bullet.scale=0.06;
    bulletG.add(bullet);
    bullet.lifeTime=width/4;
    
  }
  
}