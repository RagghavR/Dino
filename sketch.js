var trex,walk,ground,floor;
function preload(){
  walk = loadAnimation("trex1.png","trex3.png","trex4.png")
  floor = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,50,50);
  trex.addAnimation("walkgcv",walk)
  trex.scale = 0.5;
  ground =createSprite(300,180,600,20)
  ground.addImage(floor)

}
function draw(){
  background ("lightgrey")
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground)
  if (keyDown("space")){
    trex.velocityY = -8
  }
  drawSprites();
  ground.velocityX = -10
  if (ground.x < 0){
    ground.x = 300
  }
}


