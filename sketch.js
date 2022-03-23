const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

 var opcoes = {
    isStatic: true
 }

  

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, opcoes)
  World.add(world, playerBase)
  //criar corpo do jogador
  player = Bodies.rectangle(250, 190, 50, 180, opcoes)
  World.add(world, player)


}

function draw() {
  background(backgroundImg);

   var p = playerBase.position
  image(baseimage, p.x, p.y, 180, 150)


  var po = player.position
  image(playerimage, po.x, po.y, 50, 180)

  

 

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
