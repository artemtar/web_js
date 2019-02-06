
class Bubble{
  constructor(_x = 100, _y = 150, d){
  this.x = _x;
  this.y = _y;
  this.r = d;
}
  show(){
  fill(200);
  stroke(4);
  ellipse(this.x, this.y, this.r, this.r)
}
  move(_x = this.x, _y = this.y){
    this.x = _x;
    this.y = _y;
  }
  interset(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return d < (this.r + other.r) / 2 
    }
  }

var bbl = [];
var b1;
var b2;
w = 400
h = 400
function setup() {
  createCanvas(w,h);
  b1 = new Bubble(100, 100, 30);
  for (var i = 0; i < 10; i++ ){
    bbl.push(new Bubble(random(0, 400), random(0, 400), random(20, 50)))
  }
}

function draw() {
  background(100);
  for(b of bbl){
  if (b1.interset(b)){
    background(100, 50, 70);
  }}
  for(b of bbl){
    b.show();
    b.move()
  }
  b1.show();
  b1.move(mouseX, mouseY);

}