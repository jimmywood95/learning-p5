class Box {
    constructor(x, y, z, r) {
        this.pos = createVector(x, y, z);
        this.r = r;
    }

    generate() {
        let boxes = [];
        // -2, 3 ++ is a 6^3 box
        // -1, 2 ++ is a 3^3 box
        // creates a cube value for the amount of inner boxes
        // could result in some interesting fractals for a gui
        for(let x = -1; x < 2; x++) {
            for(let y = -1; y < 2; y++) {
                for(let z = -1; z < 2; z++) {
                    // this math would be interesting to understand
                    let sum = abs(x) + abs(y) + abs(z);
                    // divide by total boxes
                    let newR = this.r / 3;
                    // this number is interesting to play with
                    if(sum > 1) {
                        let b = new Box(
                            // this math would be interesting to understand
                            this.pos.x + (x * newR), 
                            this.pos.y + (y * newR), 
                            this.pos.z + (z * newR), 
                            newR
                        );
                        boxes.push(b);

                    }
                }
            }
        }
        return boxes;
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        noStroke();
        box(this.r);
        pop();
    }
}