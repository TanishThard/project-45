var rocket,rocketImage;
var fireball,fireballImage;

function preload(){
rocketImage=loadImage("rocket.png");
fireballImage=loadImage("fireball.jpg");
}

function setup() {
  createCanvas(1000, 500);
  rocket=createSprite(350,350,100,100);
  rocket.addImage(rocketImage);
  rocket.scale=0.3;
  
  fireballGroup = createGroup();
  
}

function draw() {
  background(0);  
  rocket.y=World.mouseY;
  Fireball();
  drawSprites();
}

function Fireball() {
  
 if (frameCount % 40 === 0) {
    fireball = createSprite(950,350,100,100);
    fireball.y = Math.round(random(20,380))
    fireball.addImage(fireballImage);
    fireball.scale = 0.14;
    fireball.velocityX = -15;
    
    fireballGroup.add(fireball);
 }
}




