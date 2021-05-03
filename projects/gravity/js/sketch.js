let movers = [];
let attractor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 5; i ++) {
        let x = random(width);
        let y = random(height);
        let m = random(25, 50);
        movers[i] = new Mover(x, y, m);
    }
    
    attractor = new Attractor(width / 2, height / 2, 800);
    background(0); 
}

function draw() {
    background(0, 75); 

    for(mover of movers) {
        mover.update();
        mover.show();
        attractor.attract(mover);
    attractor.show();
    }
    

    
}