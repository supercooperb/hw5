function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(400);
  stroke(0);
  rect(25, 20, 350, 350);
  stroke('magenta');
  line(50, 350, 350, 50);
  stroke('magenta');
  line(350, 350, 50, 50);
}
