var frect;





function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 25, 100);
  
  
o2 = createSprite(30,200,50,50)

o2.velocityX = 2
}

function draw() {
  background("black"); 
  if(istouching(o2,frect)){
    o2.shapeColor = "red"
    o2.velocityX = 0
  }

bounceOff(o2,frect)
drawSprites();
}
