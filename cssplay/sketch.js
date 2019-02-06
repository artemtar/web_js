let h;
var bg;
var bt;
var input;
let z;
function setup(){
  createCanvas(200, 200);
  bg = color(100);
  // createP("Hello?")
  // createElement('h1', 'MyElement');
  h = createP('loading');
  bt = createButton('go');
  bt.mousePressed(changecolor);
  h.mouseOver(overpar);
  slider = createSlider(10, 100, 50);
  input = createInput("input");
  input.input(updatetext);
  slider.input(updateF)
  z = createP("another");
  z.mousePressed(changeStyle);
  var par = select("cl");
  par.style("font-size", "30");
  pargs = selectAll('p');
  for (var i = 0; i < pargs.length; i++){
    pargs[i].mouseOver(highlight);
}
  var pp = createP("hsould be blue");
  pp.class('1')
}
function highlight(){
  this.style("background-color", "pink");
  this.style("padding", 8 + "px" );
}
function updateF(){
  print(map(0, slider.value(), 0, 64));
  h.style("font-size", slider.value() + "pt")
}

function updatetext(){
  h.html(input.value())
}

function changeStyle(){
  z.style("background-color", "red");
  z.style("padding", "8px");
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