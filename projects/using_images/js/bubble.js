class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.img = random(kittens);
    }

    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    show() {
        rectMode(CENTER);
        image(this.img, this.x, this.y, this.r, this.r);
        // fill(this.fill, this.alpha);
        // strokeWeight(4);
        // stroke(255);
        // ellipse(this.x, this.y, (this.r * 2));
    }

    clicked(x, y) {
        let d = dist(x, y, this.x, this.y);
        if (x > this.x && x < this.x + this.r && y > this.y && y < this.y + this.r) {
            this.img = flower;
        }
    }

}