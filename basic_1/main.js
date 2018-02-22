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
var duck;

function preload() {
  // // load an image
  duck = loadImage('assets/duck.png');
  
  
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(252,248,7);
  fill(71, 141, 255);
  stroke(255,128,0)
  



rotate(0.1)
  // https://p5js.org/reference/#/p5/ellipse
  ellipse(550, 300, 600, 600);

  // https://p5js.org/reference/#/p5/fill
  fill(66, 134, 244);
resetMatrix();
rotate(-0.1)
  // https://p5js.org/reference/#/p5/rect

  fill(181, 10, 158);
  rotate(0.1);
  rect(500, 60, 50, 600);
  resetMatrix();
  

  rect(500, 60, 50, 200);
  

  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

  // rendering text
  fill(10, 10, 181);
  textSize(69);
  text('hello there', 250, 100);

  // render the image at x=125, y=200
  image(duck, 700, 200);

  

for (var i=0; i<100; i++) {
  fill(100+i*20, 0, i*20)
  image(duck, i*20, i*20, 40, 40)
}
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
