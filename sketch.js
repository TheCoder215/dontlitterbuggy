const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var tc1, tc2, tc3;
var ground
var trashcan, tcIMG;

function preload(){

	tcIMG = loadImage("Trashcan.png");

}


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,365,800,15);
	paper = new Paper(42,200,70)//(62,260,18);
	tc1 = new Trashcan(515,298,15,150);
	tc2 = new Trashcan(645,298,15,150);
	tc3 = new Trashcan(575,383,200,30);

	trashcan = createSprite(555,278,100,100);
	trashcan.addImage(tcIMG);
	trashcan.scale = 0.92

	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);
  background("black");
  
  ground.display();
  paper.display();
  tc1.display();
  tc2.display();
  tc3.display();


drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 520, y: -700})
	}
}



