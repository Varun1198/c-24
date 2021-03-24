var ball,cup;
var ballImg;
var engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//ballImg=loadImage("")
}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(400,500,2,[circle],[2]);
	ellipse(56,46,55,55)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


