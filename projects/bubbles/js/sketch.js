/*

I want to take a look at this as a visualisation for COVID-19.
the bubbles becoming SOCIAL CIRCLES.
A handful begin their life as INFECTED.
and when they intersect there is a CHANCE of the INFECTION spreading.
This might mean implimenting an R rating. I could print this on screen.
SOCIAL CIRCLES remain INFECTED for a period of time (representative of 1-2 weeks, 1-2 seconds). 

Further could there be a LOCKDOWN button which seperates all bubbles imperfectly.
R rating will have to be dynamic based on how many bubbles each bubble has infected before losing infected status.

*/

// Declare a container for the bubbles
let bubbles = [];

// The setup() function runs once
function setup() {
    createCanvas(windowWidth, windowHeight);

    // produce any amount of bubbles with a loop.
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}

// The draw function runs continuously, 60fps by default
function draw() {
    background(0); 
    for (let bubble of bubbles) {
        // Assume bubbles aren't intersecting
        bubble.intersecting = false;
        // Check if bubble intersects any other bubble
        for (let other of bubbles) {
            if (bubble !== other && bubble.intersects(other)) bubble.intersecting = true;
        }
        // If the bubble is hovered over change colour, if its intersecting change colour
        // otherwise change the colour to black.
        bubble.contains(mouseX, mouseY) ? bubble.changeColor(255, 100) :
        bubble.intersecting ? bubble.changeColor(255, 35) : bubble.changeColor(0, 100);
        // Move the bubble.
        bubble.move();
        // Draw the bubble
        bubble.show();
    }
}

// Delete bubble from array when clicked.
function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}

// When the mouse is dragged add bubbles to the array. Max = 100.
function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);

    bubbles.push(b);

    if (bubbles.length > 100) {
        bubbles.splice(0, 1);
    }
}







/*
I am confused by my attempt at this. I should revisit later...
it was working but resetting intersecting to false didnt work.
function draw() {
    background(0);
    //reduce checks with the following example...
      var array = ["A", "B", "C", "D"];
      for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
          console.log(array[i] + array[j]);
        }
      }
    // expand by looking at quad trees...

    for(let i = 0; i < bubbles.length; i++) {
        for(let j = i + 1; j < bubbles.length; j++) {
            if (bubbles[i] !== bubbles[j] && bubbles[i].intersects(bubbles[j])) {
                bubbles[i].intersecting = true;
                bubbles[j].intersecting = true;
            }
            bubbles[i].intersecting ? bubbles[i].changeColor(255, 100) : bubbles[i].changeColor(0, 100);
            bubbles[j].intersecting ? bubbles[j].changeColor(255, 100) : bubbles[j].changeColor(0, 100);
        }
        // bubbles[i].contains(mouseX, mouseY) ? bubbles[i].changeColor(255, 100) :
        
        bubbles[i].move();
        bubbles[i].show();
    } 
}
*/

