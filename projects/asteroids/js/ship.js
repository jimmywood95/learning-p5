class Ship {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.angle = 0;

        this.thrusting = false;       
        this.topSpeed = 6;
        this.damping = 0.995;

        this.size = 16;
        this.mass = sqrt(this.size);
    }

    // Euler Intergration vel add acc -> pos add vel
    update() {
        this.vel.add(this.acc);
        //slow the ship over time
        this.vel.mult(this.damping);
        this.vel.limit(this.topSpeed);

        this.pos.add(this.vel);

        // reset acceleration each frame
        this.acc.mult(0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    turn(a) {
        this.angle += a;
    }

    thrust() {
        let angle = this.angle;
        
        let force = new createVector(cos(angle), sin(angle)); // why?
        force.mult(0.1);
        this.applyForce(force);

        this.thrusting = true;
    }

    wrapEdges() {
        let buffer = this.size * 2;

        if (this.pos.x > width + buffer) this.pos.x = -buffer;
        else if (this.pos.x < -buffer) this.pos.x = width + buffer;
        if (this.pos.y > height + buffer) this.pos.y = -buffer;
        else if (this.pos.y < -buffer) this.pos.y = height + buffer;
    }

    show() {
        strokeWeight(2);
        noFill();

        push();
        translate(this.pos.x, this.pos.y + this.size);
        rotate(this.angle);

        // booster
        noStroke();
        if (this.thrusting) stroke(255);
        triangle(-this.size - 20, 0, -this.size, -5, -this.size, 5);

        //rocket
        stroke(255);
        triangle(-this.size, -this.size, -this.size, this.size, this.size, 0);
        pop();
    
        this.thrusting = false;
    }
}