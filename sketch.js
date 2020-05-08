const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(800, 1000, WEBGL);
  engine = Engine.create();
   world = engine.world;
  // ground1 = new Ground(600,500,1200,20);
//ma1 = new happy(100,800);
 // box1 = new box(400,600);

}
function draw() {
  background(200);
  Engine.update(engine);
  rotateZ(millis() / 2000.0);
  fill("pink")
  torus(50, 45);
 // millis.debug = true;
 // console.log(millis.speed);

  //ma1.display();
//box1.display();
//ground1.display();
/*noStroke();
textSize(35)
fill("cyan")
print("ma",190,500);*/
 
}