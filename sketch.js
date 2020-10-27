var Car, database;
var position;
var playerCount = 0;
var player;
var form;
var gameState = 0;
var game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
}

function draw(){
  background("white");
  //console.log("Name "+ playerCount);
  game.start();
}