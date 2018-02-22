// TODO
// - coordinate system
// - ellipses and other shapes
// - fills, strokes
// - text
// - images
// - positioning
// - rotation

// runs before everything
// use to load assets


// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}



// runs every frame
function draw() {
  background(0,0,0);
  fill(71, 141, 255);
  stroke(255,255,255)
  strokeWeight(5);
  
  fill(239, 227, 4)
  triangle(150, 550, 550, 90, 950, 550);

  fill(0,0,0)
  ellipse(550, 400, 300, 300)

  fill(239, 4, 43)
  ellipse(550, 400, 200, 200);

  fill(0,0,0);
  ellipse(550, 400, 100, 200);

  fill(255, 255, 255)
  ellipse(550, 400, 100, 75);

  fill(0,0,0)
  ellipse(550, 400, 50, 75);
  resetMatrix();


  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

  // rendering text
  fill(255,255,255);
  textSize(42);
  text('C O N F I R M E D', 190, 80);
}



// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
