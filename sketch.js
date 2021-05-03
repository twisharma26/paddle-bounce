var ball,img,paddle, ballimage, paddleimage, edges;

function preload() {
  ballimage = loadImage("ball.png");
  paddleimage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(50, 200, 20, 20);
  ball.addImage(ballimage);
  ball.velocityX = 9;
  
  paddle = createSprite(350, 200, 20, 20);
  paddle.addImage(paddleimage);
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
 
  ball.bounceOff(paddle, randomVelocity);  
  
  if(keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity() {
  ball.velocityY = random(-10, 10);
}

