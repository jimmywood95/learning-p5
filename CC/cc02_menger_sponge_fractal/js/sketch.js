let angle = 0;
let b;
let sponge = [];
let gen = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    normalMaterial();
    
    b = new Box(0, 0, 0, 400);
    sponge.push(b);
    
}

function draw() {
    background(51); 

    stroke(255);

    rotateX(angle);
    rotateY(angle * 0.4);
    rotateZ(angle * 0.1);

    lights();
    for(let b of sponge) {
        b.show();
    }
    
    angle += 0.01;
}

function mousePressed() {
    // Here I want to set a limit so it counts up and then 
    // counts down cycling the generations
    // maxing out after 2
    // needs thinking about, could set interval of 2 seconds
    if (gen > 1) {
        sponge = prevGen;
        gen--;
    } else {
        // make a new array to store boxes
        let next = [];
        // for each box currently in the array generate in the x,y,z
        for(let i = 0; i < sponge.length; i++) {
            let b = sponge[i]
            let newBoxes = b.generate();
            next = next.concat(newBoxes);
        }
        sponge = next;
        gen++;  
    }
      
}