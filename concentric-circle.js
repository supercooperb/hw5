function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i < height; i = i + 10){
    ellipse(200, 200, i, i);
    noFill()
  }
}
