let x;
let y;

function setup() {
    createCanvas(400,400);
    x = 200;
    y = 200;
    background(0); 
}

function draw() {
    
    stroke(255);
    strokeWeight(4)
    point(x,y);

    let r = floor(random(4));

    switch (r) {
        case 0:
            x = x + 1;
            break;
        case 1:
            x = x - 1;
            break;
        case 2:
            y = y + 1;
            break;
        case 3:
            y = y - 1;
            break;
    }
    
}