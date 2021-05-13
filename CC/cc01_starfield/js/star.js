class Star {
    // could swap star for random asteroid images!
    // can I rotate the stars or go backwards?!
    // Can I make the stars twinkle??
    constructor() {
        // Random x from left to right if origin is (0, 0)
        this.x = random(-width/2, width/2);
        // Random y from left to right if origin is (0, 0)
        this.y = random(-height/2, height/2);
        // Pseudo Z is a random value from 0 to width
        // for arguements sake: 400/400 screen [235, 153, 348, 35]
        this.z = random(width);
        // pz is initially the current z value [235, 153, 348, 35]
        this.pz = this.z;
    }

    update() {
        // take speed away from the current z each frame (arg speed = 50)
        // [235, 153, 348, 35] => [185, 103, 298, -15];
        this.z -= speed;
        // if z now equals a value less than 1 
        if(this.z < 1) {
            // [185, 103, 298, 400] Set the z to width (400)
            this.z = width;
            // Also give the z a new x and y
            this.x = random(-width, width);
            this.y = random(-height, height);

            // Reset the prev-z to the current z
            this.pz = this.z;
        }
    }

    show() {
        // alpha value based on Z mapped to a number between 255 and 0
        // if Z = width a = 0 if z = 0 z = 255;
        let a = map(this.z, 0, width, 255, 0);

        // starX and starY are a new x,y 
        // This is the bit im a little confused on. 
        // random x -200 to 200 / random z 2 to 400 yeilds a number between 0 and 1
        // each frame z - speed so z gets smaller and the stars move further away
        // each frame sx is a higher width value
        // grows faster each frame 20/400 = 0.05, 20/300 = 0.066, 20/200 = 0.1, 20/100 = 0.2
        // I'm not sure how this moves the stars away radially... 
        // because its translated to the center I would expect this to draw like a box from 
        // the center to the bottom right and outside the bounds
        // I would expect this because sx is a value from 0 to width (0 - 400 so this would suggest nothing could be at 
        // say -50, -50);
        // Yet it is working...
        let sx = map((this.x / this.z), 0, 1, 0, width);
        let sy = map((this.y / this.z), 0, 1, 0, height);

        // map radius to z
        let r = map(this.z, 0, width, 8, 0);

        fill(255, a);
        noStroke();

        ellipse(sx, sy, r, r);

        // map prev x and y to new variables
        let px = map((this.x / this.pz), 0, 1, 0, width);
        let py = map((this.y / this.pz), 0, 1, 0, height);

        // reset prev Z px and py still store previous as they are calculated before.
        this.pz = this.z;

        strokeWeight(r);
        stroke(255, a);

        // streak stars with a line from prev to current
        line(px, py, sx, sy);
    }
}