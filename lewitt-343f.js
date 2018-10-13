function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(400);
  quad(150, 100, 325, 100, 250, 300, 75, 300);
  rect(0, 0, 50, 400);
  rect(0, 350, 400, 50);
  rect(0, 0, 400, 50);
  rect(350, 0, 50, 400);
  fill(0);
}
