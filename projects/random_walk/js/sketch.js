let walker;
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    walker = new Walker(width/2, height/2);
    background(0);
}

function draw() {

    

    // let pos = createVector(200, 200);
    // let mouse = createVector(mouseX, mouseY);

    // let v = p5.Vector.sub(mouse, pos);
    // // v.normalize();
    // // let m = v.mag();
    // // v.div(m);
    // // v.mult(100);
    // v.setMag(100);

    
    // // console.log(m);
    // // v.mult(100);
    // translate(width/2, height/2);
     
    walker.update();
    walker.show();
    
    // // will make a square because components(x, y) are fixed to square bounds.. -100, 100 in x y
    // // let v = createVector(random(-100, 100), random(-100, 100));

    // // gives random direction with 0 magnitude, then multiply by a value to get a circle over time.
    // let v = p5.Vector.random2D();
    // v.mult(random(50, 100));

    // strokeWeight(4);
    // stroke(255);
    // line(0, 0, v.x, v.y)

}