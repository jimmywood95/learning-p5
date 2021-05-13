let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship(width/2, height/2);
}

function draw() {
  background(0);

  ship.update();
  ship.wrapEdges();
  ship.show();

  fill(255);
  text("left right arrows to turn, z to thrust", 10, height - 15);


  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } 
  
  if (keyIsDown(90)) {
    ship.thrust();
  }
}
