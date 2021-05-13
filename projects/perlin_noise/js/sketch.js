    // let xoff1 = 0;
    // let xoff2 = 10000;
    //noiseDetail(4, 0.5); noiseDetail(octaves, ampFactor); Control noise behaviour
    let inc = 0.01;
    // let start = 0;

    function setup() {
        createCanvas(windowWidth, windowHeight);
        pixelDensity(1);
    }

    function draw() {
        
        let yoff = 0;
        loadPixels();
        for(let y = 0; y < width; y++) {
            let xoff = 0;
            for(let x = 0; x < width; x++) {
                let index = (x + y * width) * 4;
                // let r = random(255); // static like noise
                let r = noise(xoff, yoff) * 255;
                pixels[index + 0] = r;
                pixels[index + 1] = r;
                pixels[index + 2] = r;
                pixels[index + 3] = 255; 

                xoff += inc;
                    
            }
            yoff += inc;
        }
        

        updatePixels();

        // background(51); 

        
        // noFill();
        // stroke(255);
        //beginShape();
        // let xoff = start;
        // for(let x = 0; x < width; x++) {
        //     stroke(255);
        //     let n = map(noise(xoff), 0, 1, -150, 150); // for correct noisey sine...
        //     let s = map(sin(xoff), -1, 1, 0, height);
        //     let y = n + s;

        //     // let y = random(height);
        //     // let y = noise(xoff) * height; // perlin noise
        //     //let y = height / 2 + sin(xoff) * height / 2; // sine wave
        //     // let y = noise(xoff) * 100 + height / 2 + sin(xoff) * height / 2; // noisy sine offset wrong
        //     vertex(x, y);
        //     xoff += inc;
        // }
        // endShape();
        // start += inc;
        // noLoop();

        // var x = random(width);
        // let x = map(noise(xoff1), 0, 1, 0, width);
        // let y = map(noise(xoff2), 0, 1, 0, width);
        // xoff1 += 0.01;
        // xoff2 += 0.01;
        // ellipse(x, y, 26, 26);
    }
