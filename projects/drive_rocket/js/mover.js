class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;

        this.r = sqrt(this.mass) * 10;

        this.angle = 0;
    }

    applyForce(force) {
        // f = m * a... a = f/m
        let f = p5.Vector.div(force, mass);
        this.acc.add(f);
    }

    edges() {
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
          }
          if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
          } else if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
          }
    }

    update() {
        // this.angle += 0.1;
        this.vel.add(this.acc);

        this.vel = p5.Vector.fromAngle(this.angle);
        // this.vel.mult(5);
        this.pos.add(this.vel);
        // this.acc.set(0, 0);
    }


    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        push();
        translate(this.pos.x, this.pos.y);
        this.angle = this.vel.heading();
        rotate(this.angle);
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }


}