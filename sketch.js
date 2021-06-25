//Create variables here
var database,happyDog,foodS,foodStock,dog;
var dogImage,dogImage1;
function preload()
{
   dogImage=loadImage("images/dogImg.png")
   dogImage1=loadImage("images/dogImg1.png")
   //load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,40,40);
  dog.addImage("id",dogImage1) 
  dog.scale=0.3
database=firebase.database()
foodStock=database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  

  drawSprites();
  background(40, 9, 7) 
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
 dog.addImage("id",dogImage);

}
drawSprites();
text("Note:Press Up Arrow to feed the dog",150,20);
text("Food:" +foodS,400,50)
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
 
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



