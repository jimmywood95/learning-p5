class Attractor {

    constructor(x, y, m) {

        this.pos = createVector(x, y);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;
    }

    attract(obj) {
        let force = p5.Vector.sub(this.pos, obj.pos);
        let distanceSq = constrain(force.magSq(), 25, 1000);

        let G = 3;

        let strength = G * (this.mass * obj.mass) / distanceSq;

        force.setMag(strength);

        obj.applyForce(force);
    }

    show() {
        fill(255, 0, 100, 50);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

}