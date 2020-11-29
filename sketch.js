var bg,mario,ground;


function setup() {  
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(0,0,windowWidth,windowHeight);
  bg.scale=2;
  bg.shapeColor="orange";

  ground=createSprite(windowWidth/2,windowHeight-60,windowWidth,150);
  ground.velocityX=-10
}

function draw() {
  background(0,0,0);  
  drawSprites();
}

