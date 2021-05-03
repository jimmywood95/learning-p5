let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS);
}

let pAngle = 0; // previous angle

function mouseDragged() {
    // this bit is hard to understand :(
    let v = createVector(pmouseX - width / 2, pmouseY - height / 2);
    pAngle = v.heading();
}

function mouseReleased() {
    let v2 = createVector(mouseX - width / 2, mouseY - height / 2);
    angleV = v2.heading() - pAngle;

    console.log(angleV);
}

function draw() {

    if (mouseIsPressed) {
        // this is a clue because it angles the rectacgle to the mouse and uses the same formulae,
        // this might be clearer when i learn more about polar coordinates and how vectors will translate
        let v = createVector(mouseX - width / 2, mouseY - height / 2);
        angle = v.heading();
    }

    background(146, 83, 161);
    noStroke();
    fill(240, 99, 164);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(angle);
    rect(0, 0, 256, 32);

    angleV += angleA;
    angle += angleV;


}