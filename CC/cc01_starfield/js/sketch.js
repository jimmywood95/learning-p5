let speed;
let warp = false;
let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create 800 Star objects
    for(let i = 0; i < 800; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0); 
    // Translate origin to the center of the screen.
    translate(width/2, height/2);
    // If warp is false no speed, otherwise hyperdrive speed...
    !warp ? speed = 5 : speed = 100;
    // Set warp when the mouse is held
    mouseIsPressed ? warp = true : warp = false; 
    // For each star in the array run update and run show.
    for(let star of stars) {
        star.update();
        star.show();
    }
}