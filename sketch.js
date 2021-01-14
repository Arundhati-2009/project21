var canvas;
var block1,block2,block3,block4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(0,580,360,30);
block1.shapeColor="pink";
block2=createSprite(295,580,200,30);
block2.shapeColor="blue";
block3=createSprite(515,580,200,30);
block3.shapeColor="orange";
block4=createSprite(740,580,220,30);
block4.shapeColor="green";

ball=createSprite(random(20,750),100,40,40);
ball.shapeColor="red";
ball.velocityX=5;
ball.velocityY=-5;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor="pink";
        music.play;
        }
    else  if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.shapeColor="blue";
            music.play;
            }
    else   if(block3.isTouching(ball) && ball.bounceOff(block3)){
                ball.shapeColor="orange";
                music.play;
                }
     else  if(block4.isTouching(ball) && ball.bounceOff(block4)){
                    ball.shapeColor="green";
                    music.play;
                    }

drawSprites();

    //add condition to check if box touching surface and make it box
}
