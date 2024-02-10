const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bottom;
var ball;
let engine;
let world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  bottom = new Ground(200,390,1200,10)

  topWall = new Ground(200,10,1200,10)

  left = new Ground(10,200,10,400)

  right = new Ground(790,200,10,400)
  wall1 = new Ground(600,370,10,70)
  wall2 = new Ground(750,370,10,70)
  var ballOptions = {
    restitution:0.5
  }
  ball = Bodies.circle(100,100,20,ballOptions)
  World.add(world,ball)
  
  button1= createImg("push.png")
  button1.position(300,30)
  button1.size(40,40)
  button1.mouseClicked(hForce)

  button2= createImg("push.png")
  button2.position(100,30)
  button2.size(40,40)
  button2.mouseClicked(vForce)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottom.show()
  topWall.show()
  left.show()
  right.show()
  wall1.show()
  wall2.show()
  ellipse(ball.position.x, ball.position.y, 20) 
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:0.05}) 
}
