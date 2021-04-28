let bubbles = [];
let flower;
let kittens = [];

function preload() {
    flower = loadImage('img/flower.png');
    for(let i = 0; i < 5; i++) {
        kittens[i] = loadImage(`img/cat-${i}.jpg`);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(50, 100);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function draw() {
    background(0); 
    for (let bubble of bubbles) {

        bubble.move();
        bubble.show();
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

// function mouseDragged() {
//     let r = random(50, 100);
//     let b = new Bubble(mouseX, mouseY, r);

//     bubbles.push(b);

//     if (bubbles.length > 20) {
//         bubbles.splice(0, 1);
//     }
// }