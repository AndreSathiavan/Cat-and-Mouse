var garden, gardenImg, cat, catAnimation, catStopped, cat1, cat2, cat3, cat4
var mouse, mouseAnimation,  mouseStopped, mouse1, mouse2, mouse3, mouse4
function preload() {
    gardenImg = loadImage("images/garden.png");
    catAnimation = loadAnimation( "images/cat2.png", "images/cat3.png");//, "images/cat4.png", "images/cat1.png",
    mouseAnimation = loadAnimation("images/mouse1.png", "images/mouse2.png",  "images/mouse3.png"); //, "images/mouse4.png"
    catStopped = loadAnimation("images/cat4.png")
    mouseStopped = loadAnimation("images/mouse4.png");
}


function setup(){
    createCanvas(1000,800);
   cat = createSprite(900, 700);
   cat.addAnimation('cat running', catAnimation);
   cat.addAnimation('cat stopped', catStopped);
   cat.scale = 0.2;
   mouse = createSprite(100, 700);
   mouse.addAnimation('mouse running', mouseAnimation);
   mouse.addAnimation('mouse Stopped', mouseStopped);
   mouse.scale = 0.2;
   mouse.debug = true;
   cat.debug = true;
   cat.setCollider('rectangle',0,0,900,900);
   mouse.setCollider('rectangle',0,0,850,850);
}

function draw() {

    background(gardenImg);
      cat.velocityX = -3;
      if(cat.isTouching(mouse)){
        cat.velocityX = 0;
        cat.changeAnimation('cat stopped', catStopped);
        mouse.changeAnimation('mouse Stopped', mouseStopped);
      }
    drawSprites();
}
