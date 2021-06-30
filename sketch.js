const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,amime;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");

  anime = loadAnimation("monster2.png","monster.png")

}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //stack1
  box1 = new Box(600, 100, 70, 70);
  box1a = new Box(600,100, 70, 70);
  box1b = new Box(600,100, 70 ,70);
  box1c = new Box(600,100, 70, 70);
  boxA = new Box(700, 100, 70, 70);
  boxB = new Box(700, 100, 70, 70);
  boxC = new Box(700, 100, 70, 70);
  boxD = new Box(700, 100, 70, 70);
  boxE = new Box(700, 100, 70, 70);
  boxF = new Box(700, 100, 70, 70);
  boxa1 = new Box(800,100, 70, 70);
  boxa2 = new Box(800,100, 70, 70);
  boxa3 = new Box(800,100, 70, 70);
  boxa4 = new Box(800,100, 70, 70);
  boxa5 = new Box(800,100, 70, 70);
  boxa6 = new Box(800,100, 70, 70);
  boxa7 = new Box(800,100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box1a.display();
  box1b.display();
  box1c.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  boxA.display();
  boxB.display();
  boxC.display();
  boxD.display();
  boxE.display();
  boxF.display();
  boxa1.display();
  boxa2.display();
  boxa3.display();
  boxa4.display();
  boxa5.display();
  boxa6.display();
  boxa7.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

  rope.fly();

}