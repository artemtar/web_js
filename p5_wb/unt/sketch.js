class Bubble{
  constructor() {
    this.x = 200;
    this.y = 200
  }
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
};
let b1;
let b2;

function setup() {
  createCanvas(400, 400);
  b1 = new Bubble();
  b2 = new Bubble();
}

function draw() {
  background(200);
  b1.move();
  b2.move();
  b1.show();
  b2.show();
}

function mousePressed(){

}