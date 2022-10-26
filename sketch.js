const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  var options = {
    density: 0.001
  }
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(10,{x:100, y:20})

  fruit = Bodies.circle(100, 200, 10, options);
  Matter.Composite.add(rope.body, fruit);

  connections = new Link(rope, fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)


}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  ellipse(fruit.position.x, fruit.position.y, 10, 10);
  Engine.update(engine);
  
  
 
   
}
