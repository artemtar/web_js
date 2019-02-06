let h;
var bg;
var bt;
var input;
function setup(){
  createCanvas(200, 200);
  bg = color(100);
  // createP("Hello?")
  // createElement('h1', 'MyElement');
  var h = createP('loading');
  bt = createButton('go');
  bt.mousePressed(changecolor);
  h.mouseOver(overpar);
  slider = createSlider(10, 100, 50);
  input = createInput("input");
  input.changed(updatetext)
}
function updatetext(){
  h.html(input.value())
}
function overpar(){
  h.html("mouse is over")
  input.html("hello")
}
function changecolor(){
  bg = color(random(0, 255));
}

function draw(){
  background(bg);
  fill(255, 0, 0);
  rect(slider.value(), 100, 50, slider.value());
  text(input.value() ,slider.value(), 10);
}
function mousePressed(){
  createP("hello there");
  h.html("loaded");
}