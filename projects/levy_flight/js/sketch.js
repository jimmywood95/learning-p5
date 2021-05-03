let pos;
let prev;
function setup() {
    createCanvas(windowWidth, windowHeight);
    pos = createVector(width/2, height/2);
    prev = pos.copy();

    background(0); 
}

function draw() {
    
    
    stroke(255);
    strokeWeight(2);
    // point(pos.x, pos.y);
    line(pos.x, pos.y, prev.x, prev.y);
    // prev = pos.copy(); unnesssecarily create objects over and over
    prev.set(pos);
    let step = p5.Vector.random2D();

    let r = random(100);
    if (r < 1) {
        step.mult(random(25, 100));
    } else {
        step.setMag(5);
    }
    
    pos.add(step);
}