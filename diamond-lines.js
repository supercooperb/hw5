// cooper berella and addina from J.D.'s class

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  var startX = 195;
	var endX = 205;
  for (var y = 10; y <= 200; y = y + 10) {
    line(startX, y, endX, y);
    startX = startX - 10;
    endX = endX + 10;
  }
  
  for (var y = 200; y <= 400; y = y + 10) {
    line(startX, y, endX, y);
    startX = startX + 10;
    endX = endX - 10;
  }
}
