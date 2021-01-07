
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(0,400,1600,20);
	ball=new paper(20,100);
	dbin=new dustbin(610,380,200,20)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  ball.display();
  dbin.display();
  ground.display();
  
}

function keyPressed(){
 
        if(keyCode===UP_ARROW){

			Matter.Body.applyForce(ball.body,ball.body.position,{x:105,y:-105});

		}

}

