
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3, paper, ground,back,dustbinImage,paperImage;

function preload()
{
	back=loadImage("bg.jpg");
	dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,50);
	ground=new Ground(width/2,593,1250,40);
	dustbin1=new Dustbin(720,490,25,200);
	dustbin2=new Dustbin(870,490,25,200);
	dustbin3=new Dustbin(790,570,175,25);
	

	Engine.run(engine);
  
}


function draw() {
  background(back);



  rectMode(CENTER);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  imageMode(CENTER);
  image(dustbinImage,790,490,200,200);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	 Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
  
	}
}