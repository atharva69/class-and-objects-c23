const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var box2;
var ground2,ground3,ground4;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1= new Ground(200,390,400,15);
    box2= new Box(230,100,55,50);
    ground2= new Ground(200,10,400,15);
    ground3= new Ground(5,200,15,400);
    ground4= new Ground(390,200,15,400);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    ground2.display();
    ground3.display();
    ground4.display();

}