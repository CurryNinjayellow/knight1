var knight;
var monster;

function preload(){
   knightimg= loadImage("knight1.png");
}

function setup(){
    createCanvas(500,500);
    knight = createSprite(100,420,10,10);
    knight.shapeColor="blue";
    knight.addImage(knightimg);

    forestbg = createSprite(250,490,500,50)
    forestbg.velocityX= -5
}
function draw(){
    background(0);
   if(forestbg.x < 0){
      forestbg.x= 250;
   }

   if(keyDown(RIGHT_ARROW)){
       knight.x+= 1;
   }
   console.log(forestbg.x);
    drawSprites();
}