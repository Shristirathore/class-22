var engine,world;
var object;
var ball;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  var objectstatic={isStatic:true}
  ground=Bodies.rectangle(200,380,200,20,objectstatic);

  World.add(world,ground);
 /* console.log(object.position.x);
  console.log(object.position.y);*/
  var ballmoving={restitution:1.0}
  ball=Bodies.circle(200,200,20,ballmoving);

  World.add(world,ball);
 
}

function draw() {
  
  background("lightpink"); 

  drawSprites();
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}