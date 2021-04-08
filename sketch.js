const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// global var
//var drop;
//var createDrop;
var boy, thunder, rand;
var thunder1, thunder2, thunder3;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
}

function setup(){

    createCanvas(400, 600);
  engine = Engine.create();
  world = engine.world;

  //drop = new Drops(200, 100, 10);

  boy = new Umbrella(200, 400, 40);

  
    
}

function draw(){
    background(0);
    Engine.update(engine);


    boy.display();


    // thunder
    rand = Math.round(random(1.4));
    if (frameCount%80 === 0){
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            default: break;

        }
        thunder.scale = random(0.3, 0.6);
    }
   

    rain();


    //drop.display();
}   

function rain(){
    var createDrops = [];
    
    var maxDrops = 100;
    for(var i =0; i< maxDrops; i++){
        createDrops.push(new Drops(random(0,400), random(0,400),10));
       
    }
}