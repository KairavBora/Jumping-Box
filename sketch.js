var canvas,box,surface1,surface2,surface3,surface4;
var musicSound;

function preload(){
    musicSound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box=createSprite(Math.round(random(20,750)),100,50,50)
box.shapeColor="white"
box.velocityY=6;
box.velocityX=6;

surface1=createSprite(700,593,200,50)
surface1.shapeColor="blue"

surface2=createSprite(480,593,200,50);
surface2.shapeColor="red";

surface3= createSprite(260,593,200,50);
surface3.shapeColor="yellow";

surface4= createSprite(40,593,200,50);
surface4.shapeColor="green";



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
     
     edges= createEdgeSprites();
    
    box.bounceOff(edges);

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
    	box.shapeColor="blue";
    	musicSound.play();
    }

if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    	box.shapeColor="red";
    	musicSound.play();
    }

    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    	box.shapeColor="green";
    	musicSound.play();
    }

if(surface3.isTouching(box)){
	box.shapeColor="yellow";
	box.velocityX=0;
	box.velocityY=0;
	musicSound.stop();
}

    //add condition to check if box touching surface and make it box

    drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x <object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true
  }
  else {
    return false
 } 
}

function bounceOff(object1,object2){
	if(object1.x - object2.x < object2.width/2 + object1.width/2
		&&object2.x - object1.x <object2.width/2 + object1.width/2){
		object1.velocityX= object1.velocityX * (-1);
	    object2.velocityX = object2.velocityX * (-1);
	}

	if(object1.y - object2.y < object2.height/2 + object1.height/2
		&&object2.y - object1.y <object2.height/2 + object1.height/2){
		object1.velocityY= object1.velocityY * (-1);
	    object2.velocityY = object2.velocityY * (-1);
	}

}