class Bubble {
    // Constructor function sets the objects paramaters, here defaults can be set. e.g. r = 50
    constructor(x, y, r = 50) {
        // The bubbles x location on the canvas
        this.x = x;
        // The bubbles y location on the canvas
        this.y = y;
        // The bubbles radius
        this.r = r;
        // The bubbles initial fill value, can be a value from 0 – 255
        this.fill = 0;
        // The bubbles alpha property denotes transparency, can be a value from 0 – 255
        this.alpha = 100;
        // The bubbles intersecting property is a boolean, only true if the bubble is within range of another.
        this.intersecting = false;
    }

    /*
    The intersects() function takes an object as an argument and will return true if the 
    distance (d) between the two objects x and y are less than the sum of their radius's.
    */
    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    /*
    The move() function will add a random number to the current x between -5 and 5.
        This could be updated to accept an argument denoting the amount to move.
    */
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    /*
    The show() function uses p5 to draw the object on the canvas
    */
    show() {
        fill(this.fill, this.alpha);
        strokeWeight(4);
        stroke(255);
        ellipse(this.x, this.y, (this.r * 2));
    }

    /*
    The changeColor() function takes two arguments, both numbers from 0 – 255
    denoting the grayscale fill and alpha.
    */
    changeColor(color, alpha) {
        this.fill = color;
        this.alpha = alpha;
    }

    /*
    The contains() function takes x and y arguments and returns true if the point is 
    within the current radius
    */
    contains(x, y) {
        let d = dist(x, y, this.x, this.y);
        return (d <= this.r);
    }
}