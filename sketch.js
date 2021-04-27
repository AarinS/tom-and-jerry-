var cat,catImage,catImage2,catImage3;
var backGroundImage;
var mouse,mouseImage2,mouseImage3;


function preload() { 
    backGroundImage = loadImage("images/garden.png");
    catImage = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png"); }

function setup(){
    createCanvas(1000,800);
   mouse = createSprite(200,700,20,20);
   mouse.addAnimation(mouseImage);
   mouse.scale = 0.15;
   cat = createSprite(750,700,20,20);
   cat.addAnimation(catImage);
   cat.scale = 0.15;
 
   cat.addAnimation("catLastImage", catImage3);
   cat.changeAnimation("catLastImage");



}

function draw() {

background(backGroundImage);


if(cat.x - mouse.x < (cat.width - mouse.width)/2){ 
    cat.velocityX = 0; cat.addAnimation("catLastImage", catImage3); 
    cat.changeAnimation("catLastImage"); 
    cat.x = 300; 
    cat.scale = 0.2; 
    mouse.addAnimation("mouseLastImage",mouseImage3); 
    mouse.changeAnimation("mouseLastImage"); 
    mouse.scale = 0.15; } 


drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImage2)
        cat.changeAnimation("catRunning") 
        mouse.addAnimation("mouseRunning",mouseImage2)
        mouse.changeAnimation("mouseRunning")
    }
}



    