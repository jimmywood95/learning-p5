let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(100, 200, 4);
}

function draw() {
  background(0);

  if(keyIsDown(LEFT_ARROW)) {
    mover.angle -= 0.03;
  } else if (keyIsDown(RIGHT_ARROW)) {
    mover.angle += 0.03;
  }

  mover.update();
  mover.edges();
  mover.show();
}