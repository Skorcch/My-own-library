
var fixedRect,movingRect;
function setup() {
createCanvas(1200,400);
fixedRect=createSprite(200, 200, 50, 80);
movingRect=createSprite(400,200,80,30);
 fixedRect.shapeColor="green"; 
movingRect.shapeColor="green"; } 
function draw() {
background(0,0,0);
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
console.log(movingRect.x-fixedRect.x);
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor="red"; fixedRect.shapeColor="red"; }
else{ movingRect.shapeColor="green"; fixedRect.shapeColor="green"; } drawSprites(); }
