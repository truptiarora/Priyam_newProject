 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,plat1,plat2; 
 var ground2;

 function preload(){
  // back = loadImage("grass2.png");
   backs = loadImage("bg3.jpeg");
   lavaa = loadImage("bg5.png");
   finishing = loadImage("finish.png");

 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(4500,displayHeight);



//ground
ground = new Ground(200,330,2190,10)
ground2 = new Ground(2080,330,420,10);
ground3 = new Ground(3170,330,420,10);

// the pc 
man = new Player(200,300,20,20);

//over here plat is platform
plat1 = new Platform(400,270,35,35); 
plat2 = new Platform(460,270,35,35); 
plat3 = new Platform(800,300,35,50); 
plat4 = new Platform(1000,300,35,50); 
lava = new Platform(440,325,150,20);


// over here obs refers to obstcale 
obs1 = new Obstacle(900,300,30,30);

// ug is underground
ug1 = new Underground(1300,452,10,255); 
ug2 = new Underground(1470,580,350,10); 
ug3 = new Underground(1350,430,10,210); 
ug4 = new Underground(1470,540,250,10); 
ug5 = new Underground(1650,550,10,70); 
ug6 = new Underground(1600,465,10,160); 
ug7 = new Underground(1680,520,70,10); 
ug8 = new Underground(1720,490,10,70); 
ug9 = new Underground(1750,450,70,10); 
ug10 = new Underground(1790,420,10,70); 
ug11 = new Underground(1830,390,70,10);
ug12 = new Underground(1870,360,10,70);
ug13 = new Underground(2290,500,10,350);
ug14 = new Underground(2470,670,350,10);
ug15 = new Underground(2350,475,10,290);
ug16 = new Underground(2465,625,240,10);
ug17 = new Underground(2590,490,10,280);
ug18 = new Underground(2650,643,10,65);
ug19 = new Underground(2678,610,65,10);
ug20 = new Underground(2710,583,10,65);
ug21 = new Underground(2737,550,65,10);
ug22 = new Underground(2770,523,10,65);
ug23 = new Underground(2797,495,65,10);
ug24 = new Underground(2830,467,10,65);
ug25 = new Underground(2858,440,65,10);
ug26 = new Underground(2890,413,10,65);
ug27 = new Underground(2920,380,65,10);
ug28 = new Underground(2960,355,10,60);

finish = new Finishing(3480,320,200,30);
 
 

console.log("plat1_options--->"+ plat1);
console.log(plat1);
console.log(man);


}



function draw() {

  background(backs);  
  drawSprites();
  ground.display();
  ground2.display();
  ground3.display();

  lava.display();

  man.display();

  plat1.display(); 
  plat2.display();
  plat3.display();
  plat4.display();

  obs1.display();

  ug1.display();
  ug2.display();
  ug3.display();
  ug4.display();
  ug5.display();
  ug6.display();
  ug7.display();
  ug8.display();
  ug9.display();
  ug10.display();
  ug11.display();
  ug12.display();
  ug13.display();
  ug14.display();
  ug15.display();
  ug16.display();
  ug17.display();
  ug18.display();
  ug19.display();
  ug20.display();
  ug21.display();
  ug22.display();
  ug23.display();
  ug24.display();
  ug25.display();
  ug26.display();
  ug27.display();
  ug28.display();

  finish.display();





text("Welcome Hope You Enjoy Our Game!",200,200,500,500);

image(finishing,3480,320,200,30);

console.log(man);

obs1.move();

image(lavaa,365,315,150,20);
//addImage(player,200,200,90,90);


//reset();


}

function keyPressed() {
if(keyCode===32){
  man.jump();

}
if(keyCode===39){
  man.walk();

}

 }

// function reset(){
// man.position.x = 200
// }





 


