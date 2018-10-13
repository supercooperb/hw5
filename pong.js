var ball = {
  x: 100,
  y: 100,
  size: 20,
  dx: 1,
  dy: -1,
}

var scoreL = 0;
var scoreR = 0;

const paddleWidth = 10;
const paddleHeight = 50;
const paddleSpeed = 5;

var ball = {
  x: 100,
  y: 100,
  size: 20,
  dx: 1,
  dy: -1,
}

var paddleL = {
  y: 100,
}

var paddleR = {
  y: 100,
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  // draw puck
  ellipse(ball.x, ball.y, ball.size);
  
  // draw left player
  rect(0, paddleL.y, paddleWidth, paddleHeight)
  
  // draw right player
  rect(width - paddleWidth, paddleR.y, paddleWidth, paddleHeight);
  
  //
  // update Ball
  //
  
  ball.x += ball.dx;
  ball.y += ball.dy;
  
  // check for user input
  if (keyIsDown(81)) // Letter Q
  {
    paddleL.y -= paddleSpeed;
  }
  
  if (keyIsDown(65)) // Letter A
  {
    paddleL.y += paddleSpeed;
  }
  
  if (keyIsDown(40)) // Down arrow
  {
    paddleR.y += paddleSpeed;
  }
}
