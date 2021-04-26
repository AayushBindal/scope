var pet;
var pet2;
var pet3;

var database, position;

function preload(){
  pet2 = loadImage("dogImg.png");
  pet3 = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database;
  createCanvas(800, 690);
  var petPosition = database.ref('pet/position');
  petPosition.on("value", readPosition);
}


function draw() {  
  background("#2E8A57");
  textSize(20);
  noStroke();
  fill(255);
  text("press up to feed the pet", width/2 -100, 100);
  text("food remaining: ", width/2-100, 300)
  
  if(keyCode === 38){ 
    pet.x  = pet.x -10;
  }
  else{
    pet = createSprite(width/2, height/2 +100);
    pet.addImage("petImg", pet2);
    pet.scale = 0.2;
  }
  drawSprites();
}

function readPosition(data){
  position = data.val();
  pet.x = position.x;
  pet.y = position.y;
}

function writePosition(x, y){
  database.ref('pet/position').set({
      'x': position.x +x,
      'y': position.y +y
  })
}