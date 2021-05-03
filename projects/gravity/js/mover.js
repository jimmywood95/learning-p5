class Mover {

    constructor(x, y, m) {
        this.mass = m;
        this.r = sqrt(this.mass) * 2;

        this.pos = createVector(x, y);
        // this.vel = p5.Vector.random2D();
        
        this.vel = createVector(1, 0);
        this.vel.mult(5);
        this.acc = createVector(0, 0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        noStroke();
        strokeWeight(2)
        fill(255, 150);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

}