function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");

  fill("brown");
  
  noStroke();
  rect(110, 110, 110, 110);
  noStroke();
  let columns = windowWidth / (110+10);
  let rows = windowHeight / (110+20);

  for (let i = 0; i < columns; i++) {
    for (let r = 0; r < rows; r++) {
     let xPos = i * 120 + random(-5, 5);
    rect (xPos, r * 130, 110, 110);
  }
}
}

  fill("orange");
  noStroke();
  rect(110, 110, 110, 110);