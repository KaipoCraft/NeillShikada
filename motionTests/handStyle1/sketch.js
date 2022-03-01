const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
let fillColor = (255, 200, 200);
let angle = 0;
let vertexList = [];
let height = 720;
let width = 1280;

// --------------------------- Setup the Canvas to Draw --------------------------------------- //
function setup() {
    
    createCanvas(width, height);
    
}
        
function onResults(results) {

    background(250, 200, 200);

    if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
// -------------------------- Draw the hands using p5.js -------------------------------------- //
            // Draw circles at the landmarks
            let c = color(0, 0, 0);
            let i=0;
            
            do {
                stroke(c);
                strokeWeight(3);
                noFill();
                let x = landmarks[i].x*width;
                let y = landmarks[i].y*height;
                let z = landmarks[i].z;
                ellipse(x,y, 10);
                i++
            } 
            while (i < landmarks.length);

            // Draw lines connecting the landmarks
            stroke(c);
            strokeWeight(3);
            var palm = [0,1,5,9,13,17];                     // Landmark indices that make up the palm
            for (var j = 0; j < landmarks.length; j++) {                 
                let x = landmarks[j].x*width;                // finds the coordinates in space
                let y = landmarks[j].y*height;

                var isPalm = palm.indexOf(j);               // Finds out if it's a palm landmark
                var next;                                   // Sets up who to connect with
                if (isPalm == -1) {                         // Connect with previous finger landmark
                    next = landmarks[j-1];
                } else {                                    // Connect with next palm landmark
                    next = landmarks[palm[(isPalm+1)%palm.length]];
                }

                line(x, y, next.x*width, next.y*height);
            }

// -------------------------------- Draw Hand Things ----------------------------------------------------- //
            indexTip = landmarks[8];
            thumbTip = landmarks[4];

            var [x1, y1] = [indexTip.x*width, indexTip.y*height];
            var [x2, y2] = [thumbTip.x*width, thumbTip.y*height];
            // Distance formula
            // d = sqrt(sq(x2-x1)+sq(y2-y1))
            var d = sqrt(sq(x2-x1)+sq(y2-y1));
            var medianX = (x1 + x2)/2;
            var medianY = (y1 + y2)/2; 

            
            new IndexPointer(indexTip.x*width, indexTip.y*height).draw();     
        
            //releaseParticles(indexTip.x*width, indexTip.y*height);
            for (let i = 0; i < 3; i++) {
                vertexList.push(new Polyline(indexTip.x*width, indexTip.y*height));
            }
        }

        for (vertex in vertexList) {
            Polyline.draw();
        }

        angle += 3;
    }
    canvasCtx.restore();
    
}

const hands = new Hands({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
    maxNumHands: 3,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.8
});
hands.onResults(onResults);
 
const camera = new Camera(videoElement, {
    onFrame: async () => {
        await hands.send({image: videoElement});
    },
    width: 1280,
    height: 720
});
camera.start();

function setLineDash(list) {
    drawingContext.setLineDash(list);
}

// ------------------------------ Object Declarations---------------------------------- //

class IndexPointer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        push();
            strokeWeight(1);
            textFont("Oswald");
            textSize(30);
            text('index', indexTip.x*width + 25, indexTip.y*height - 25);
        pop();
        push();
            noFill();
            color(fillColor);
            strokeWeight(3);
            setLineDash([6,10]);
            translate(indexTip.x*width, indexTip.y*height)
            rotate(angle);
            ellipse(0, 0, 50);
        pop();
    }
}

class Polyline {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        strokeWeight(3);
        stroke(0,0,0);
        beginShape();
        for (vertex in vertexList) {
            vertex(x,y);
        }
        endShape();
    }
}