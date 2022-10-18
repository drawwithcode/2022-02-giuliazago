let square = []; // array of obj 
let count = 500;
let colorList = ['black','gray','darkblue'];
let coltext = "white";
b = 80;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(let i=0; i < count; i++) {
    square.push(new Obj());
  }
}

function draw() {
	background(b);
  for (let i = 0; i < count; i++) {
    square[i].move();
    square[i].squares();
    square[i].shift();
  }

  // design a little square that follows the mouse
  push();
 	fill("white");
  	noStroke();
  	rect(mouseX,mouseY, 15,15);
  pop();

  // write a message in the center of the canva
  push();
  	let msg = "Click the screen to change the color!";
  	textFont("Source Code Pro");
  	textStyle("bold");
  	textAlign(CENTER);
  	textSize(20);
  	noStroke();
  	fill(coltext);
  	text(msg, width/2, height/1.5);
  pop();
}

// obj class
class Obj {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
  }

  move() {
    this.x += 4*random(-1,1)*noise(this.x);
    this.y += 4*random(-1,1)*noise(this.y);
    this.dimension = 25*noise(this.y);
  }

  // define the shape
  squares() {
    noFill();
    strokeWeight(0.5);
    stroke('white');
    rect(this.x, this.y, this.dimension, this.dimension);
  }
  
  shift() {
  if(this.x - this.dimension > height) {
    } 
  }
}

// change color of the background with every press of the mouse
  function mousePressed() {
    b = random(colorList); 
    if(coltext=== "white") {
      coltext=colorList[2]; //change color of the text with a precise value of the array
    }
    else {colortext= "white"
	}
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
