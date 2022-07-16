
var trex ,trex_running;
var ground;
//load an animation, sound or an image by using preload function.
function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,10,50)
 trex.addAnimation("trex",trex_running )

 ground = createSprite(300,180,600,20)
}

function draw(){
  background("pink")
  
  trex.collide(ground)
drawSprites();
}
