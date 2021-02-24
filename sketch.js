const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rand, ground, platform;
var plank;
function preload() {

}

function setup() {
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, height, 1000, 50);
    platform = new Platform(300, 560);
    plank = new Plank();

}

function draw() {
    background(175, 238, 238);
    Engine.update(engine);
    ground.display();
    platform.display();
    plank.display();
}


