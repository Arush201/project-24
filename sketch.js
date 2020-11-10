
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,630)
	ground = new Ground(600,height,1200,20)
	box1 = new Dustbin(900,630,200,20)
	box2 = new Dustbin(800,620,20,100)
	box3 = new Dustbin(1000,620,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  box1.display()
  box2 .display()
  box3 .display()
  drawSprites();
 
}



