function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(400);
  stroke(0)
  rect(25, 20, 350, 350);
  stroke('magenta');
  line(350, 200, 50, 200);
  stroke('magenta');
  line(260, 150, 130, 250);
}
