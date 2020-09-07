const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var stand;
var divisionHeight=300;
var particles = [];
var plinkos = [];
var divisions = [];
var score=0;
var particle;
var turn=0;
var gameState="Play";
var gameState="end";

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  stand = new Ground(400,790,800,20);
 
  //stand2= createSprite(80,470,800,10);

  
}

function draw() {
  background(0); 
  Engine.update(engine); 

  for(i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2+10), 10,10));
  }

  for(i=0;i<particles.length;i++)
  {
    particles[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
 
  stand.display();
  stroke("yellow");

  text("score" + score,40,40);
  text("500",30,540);
  text("500",100,540);
  text("400",185,540);
  text("400",265,540);
  text("300",340,540);
  text("300",420,540);
  textSize(40);

  line(0,460,600,460);
  
 // particle.display();
  //stand2.display();

  if(particle!=null)
   {
      particle.display();

      if(particle.body.position.y> 760)
      {
        if(particle.body.position.x < 300)
        {
          score=score+500;
          particle=null;
          if(count>= 5) {
            gameState = "end";
            
          }
          if(gameState==="end"){
            textSize(50);
            text("GAME OVER",0,400);
          }
        }
      }
    }
     if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y> 760)
     {

    if(particle.body.position.x > 301 && particle.body.position.x<600)
    {
      score=score+100;
      particle=null;
      if(turn>= 5) {
        gameState = "end";
        
      }
      if(gameState==="end"){
        textSize(50);
        text("GAME OVER",0,400);
      }
    }
     }
   
     if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y> 760)
     {

    if(particle.body.position.x > 601 && particle.body.position.x<900)
    {
      score=score+200;
      particle=null;
      if(turn>= 5) {
        gameState = "end";
      }
      if(gameState==="end"){
        textSize(50);
        text("GAME OVER",350,400);
      }
    }
     }
   }
  }
  if(gameState==="end"){
    textSize(50);
    fill("green")
    text("GAME OVER",280,430);
  }
  


function mousePressed(){
  if(gameState!="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}}