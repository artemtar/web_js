var x = 150;
var y = 200;
var times = 10;
var width_x = 400;
function setup() {
  createCanvas(width_x,400);
  background(150);
}

function draw() {
background(map(mouseX, 0, width, 0,  255), map(mouseY, 0, width, 0,  255), 100);
var i = 0;
while (i < times){
  fill (20, 100, 150);
  ellipse(i * times * 2, mouseY, 20 + i, 20 + i);
  i = i + 1;
  // console.log(i)
}

}

function mousePressed(){

}