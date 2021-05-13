let angle = 0;
let r = 150;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // clear();
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    translate(width / 2, height / 2);
    // circle(0, 0, r * 2);

    let increment = map(mouseX, 0, width, 0.01, PI);
    // let increment = 0.5;

    beginShape();

        for (let a = 0; a < TWO_PI; a+= 0.01) {
            let r1 = r + random(-100,50);
            let x = cos(a) * r1;
            let y = sin(a) * r1;
            vertex(x, y);
        }

    endShape(CLOSE);

    // strokeWeight(16);
    // stroke(252, 238, 33);

    // angle += random(-0.1, 0.1);
    // // r -= 0.1;
    // r += random(-2, 2);
    // let x = cos(angle) * r;
    // let y = sin(angle) * r;
    // point(x, y);
    
}