var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18,wall19, wall20, wall21, wall22, wall23, wall24, wall25 ;

var cyanGhost,orangeGhost,redGhost,pinkGhost;
var pacmanImage, orangeGhostImage, cyanGhostImage, pinkGhostImage, redGhostImage;
function preload(){
pacmanImage = loadAnimation("Pacman1.png", "Pacman2.png", "Pacman3.png")
orangeGhostImage = loadAnimation("orangeGhost.png")
cyanGhostImage = loadAnimation("cyanGhost.png")
pinkGhostImage = loadAnimation("pinkGhost.png")
redGhostImage = loadAnimation("redGhost.png")
}

function setup(){
  createCanvas(600,600)
  wall1 = createSprite(150,30,250,10);
  wall2 = createSprite(450,30,250,10);
  wall3 = createSprite(272,15,10,25);
  wall4 = createSprite(328,15,10,25);
  wall5 = createSprite(150,570,250,10)
  wall6 = createSprite(450,570,250,10);
  wall7 = createSprite(272,585,10,25);
  wall8 = createSprite(328,585,10,25);
  wall9 = createSprite(28,153,10,250);
  wall10 = createSprite(28,447,10,250);
  wall11 = createSprite(14,275,25,10);
  wall12 = createSprite(14,325,25,10);
  wall13 = createSprite(572,153,10,250);
  wall14 = createSprite(572,447,10,250);
  wall15 = createSprite(586,275,25,10);
  wall16 = createSprite(586,325,25,10);
  wall17 = createSprite(180,100,160,10);
  wall18 = createSprite(257,156,10,110);
  wall19 = createSprite(103,115,10,30);
  wall20 = createSprite(305,210,100,10);
  wall21 = createSprite(352,177,10,70);
  wall22 = createSprite(350,140,90,10);
  wall23 = createSprite(308,157,10,30);
  wall24 = createSprite(392,197,10,110);
  wall25 = createSprite(80,395,10,250);
  wall26 = createSprite(105,220,50,10);
  wall27 = createSprite(550,500,50,10);
  wall28 = createSprite(510,55,10,50);
  wall29 = createSprite(200,500,80,10);
  wall30 = createSprite(300,350,10,90);
  wall31 = createSprite(450,400,90,10);
  wall32 = createSprite(180,300,90,10);
  wall33 = createSprite(520,200,100,10);
  wall34 = createSprite(400,350,10,90);
  wall35 = createSprite(350,300,100,10);
  wall36 = createSprite(500,300,10,100);
  wall37 = createSprite(200,400,10,100);
  wall38 = createSprite(380,118,10,50);
  wall39 = createSprite(55,220,50,10);
  wall40 = createSprite(430,485,10,70);
  wall41 = createSprite(340,500,70,10);

  //pac-man
  pacman = createSprite(390,200,20,20);
  pacman.addAnimation("Running_pacman",pacmanImage)
  pacman.scale = 0.3;


  //Shape Color
  wall1.shapeColor = "blue"
  wall2.shapeColor = "blue"
  wall3.shapeColor = "blue"
  wall4.shapeColor = "blue"
  wall5.shapeColor = "blue"
  wall6.shapeColor = "blue"
  wall7.shapeColor = "blue"
  wall8.shapeColor = "blue"
  wall9.shapeColor = "blue"
  wall10.shapeColor = "blue"
  wall11.shapeColor = "blue"
  wall12.shapeColor = "blue"
  wall13.shapeColor = "blue"
  wall14.shapeColor = "blue"
  wall15.shapeColor = "blue"
  wall16.shapeColor = "blue"
  wall17.shapeColor = "blue"
  wall18.shapeColor = "blue"
  wall19.shapeColor = "blue"
  wall20.shapeColor = "blue"
  wall21.shapeColor = "blue"
  wall22.shapeColor = "blue"
  wall23.shapeColor = "blue"
  wall24.shapeColor = "blue"
  wall25.shapeColor = "blue"
  wall26.shapeColor = "blue"
  wall27.shapeColor = "blue"
  wall28.shapeColor = "blue"
  wall29.shapeColor = "blue"
  wall30.shapeColor = "blue"
  wall31.shapeColor = "blue"
  wall32.shapeColor = "blue"
  wall33.shapeColor = "blue"
  wall34.shapeColor = "blue"
  wall35.shapeColor = "blue"
  wall36.shapeColor = "blue"
  wall37.shapeColor = "blue"
  wall38.shapeColor = "blue"
  wall39.shapeColor = "blue"
  wall40.shapeColor = "blue"
  wall41.shapeColor = "blue"


}

function draw(){
  background("black")

  if(keyDown(UP_ARROW)){
   pacman.velocityY = -3;
   pacman.velocityX = 0;
  }

  if(keyDown(DOWN_ARROW)){
    pacman.velocityY = +3;
    pacman.velocityX = 0;
   }

   if(keyDown(RIGHT_ARROW)){
    pacman.velocityX = +3;
    pacman.velocityY = 0;
   }

   if(keyDown(LEFT_ARROW)){
    pacman.velocityX = -3;
    pacman.velocityY = 0;
   }

  ghosts();

 drawSprites(); 
}
function ghosts(){
  background("black")
cyanGhost = createSprite(320,320,20,20);
orangeGhost = createSprite(380,320,20,20);
pinkGhost = createSprite(320,380,20,20);
redGhost = createSprite(380,380,20,20);

//add animation
cyanGhost.addAnimation("cyan",cyanGhostImage);
orangeGhost.addAnimation("orange",orangeGhostImage);
pinkGhost.addAnimation("pink",pinkGhostImage);
redGhost.addAnimation("red",redGhostImage);

//scale
cyanGhost.scale = 0.3;
orangeGhost.scale = 0.3;
pinkGhost.scale = 0.3;
redGhost.scale = 0.3;

//motion
cyanGhost.velocityY = 3
}