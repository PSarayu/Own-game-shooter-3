var player,alien,teamMates,tm,tmImg
var bg,playerImg,alienImg,ALIENS
var laser, laserImg,Laser



function preload(){
bg=loadImage("Pictures/bg.jpg")
playerImg=loadImage("Pictures/player.png")
alienImg=loadImage("Pictures/Alien.png")
laserImg=loadImage("Pictures/laser.png")
tmImg=loadImage("Pictures/team.png")
}

function setup(){
createCanvas(displayWidth-3,displayHeight-140)
player=createSprite(displayWidth/2,displayHeight-250,50,50)
player.shapeColor="black"
player.addImage(playerImg)
player.scale=1.5
player.setCollider("circle",0,0,50)




ALIENS=new Group()
teamMates=new Group()
Laser=new Group()

}

function draw(){
background(bg)


if(keyDown("right")){
     player.x=player.x+2
}


if(keyDown("left")){
    player.x=player.x-2
}

if(keyDown(32)){
    laser=createSprite(player.x,player.y,20,20)
    laser.addImage(laserImg)
    Laser.add(laser)
    laser.scale=0.3
    laser.velocityY=-5
    player.depth=laser.depth
    player.depth+=2
    laser.depth-=1
 }


if(ALIENS.isTouching(player)){
    for(var i=0;i<ALIENS.length;i++){
        if(ALIENS[i].isTouching(player)){
            ALIENS.destroyEach();
            teamMates.destroy();
        }
    }
}

if(ALIENS.isTouching(Laser)){
    for(var i=0;i<ALIENS.length;i++){
        if(ALIENS[i].isTouching(Laser)){
            ALIENS[i].destroy();  
            Laser.destroyEach();                      
        }
    }
}


aliens();
teammates();
drawSprites();


}
function aliens(){
if(frameCount%70===0){
    alien=createSprite(Math.round(random(20,1300)),Math.round(random(-10,200)),40,40)
    alien.addImage(alienImg)
    alien.scale=0.3
    alien.velocityY=2
    ALIENS.add(alien)
    alien.debug=true
}
}

function teammates(){
  if(frameCount%160===0){
      tm=createSprite(Math.round(random(20,1300)),Math.round(random(-10,200)),40,40)
      tm.addImage(tmImg)
      tm.scale=1
      tm.velocityY=2
      teamMates.add(tm)
  }
}
