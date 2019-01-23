
var circle = {
  x:0,
  y:0,
  d:50,
  r:100,
  b:100,
  g:50
};

function setup() {
  createCanvas(300,400);
  background(200);
}

function draw() {
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);
  sx = random(0, 300);
  sy = random(0, 400);
  d = random(20, 60);
  fill(r, b, g, random(20, 70));
  ellipse(sx, sy, d, d);
  fill(circle.r,circle.b, circle.g, 50);
  ellipse(mouseX,mouseY,circle.d,circle.d);
  // noStroke();


}

function mousePressed(){
  background(map(mouseX, 0, 300, 0, 255));
  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);
  circle.d = random(20,70);
}