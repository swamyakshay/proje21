var box1,box2,box3,box4,ball;

function setup(){
    createCanvas(700,600);

    box1=createSprite(50,550,100,100);
    box1.shapeColor="blue";

box2=createSprite(250,550,100,100);
box2.shapeColor="red";

ball=createSprite(random(20,750));
ball.shapeColor="white";
ball.velocityY=3;

box3=createSprite(450,550,100,100);
box3.shapeColor="green";

box4=createSprite(630,550,100,100);
box4.shapeColor="yellow";


}



function draw(){
background(0,0,0);

fill("white")

Text(mouseX+","+mouseY,100,50)

if(box1.isTouching(ball)){
   ball.shapeColor=rgb(255,128,0);
    music.stop();
}

if(box2.isTouching(ball)){
    ball.shapeColor=rgb(255,128,0);
    ball.velocityX=0;
    music.stop();
}
if(box3.isTouching(ball)){
   ball.shapeColor=rgb(255,128,0);
    ball.velocityX=0;
    music.stop();

}
if(box4.isTouching(ball)){
   ball.shapeColor=rgb(255,128,0);
    ball.velocityX=0;
    music.stop();
}




drawSprites();




}
