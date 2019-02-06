var slider;
var w = 400;
var h = 400;
var angle = 0;
sliders = []
function setup() {
  noCanvas();
  // createCanvas(w,h);
  for (var i = 0; i < 70; i++){
  slider = createSlider(0, 255, map(sin(angle), -1, 1, 0, 255));
  angle += 0.1;
  sliders.push(slider);  
  }

}

function draw() {
  // background(slider.value());
  angle += 0.1;
  for (var i = 0; i < 70; i++){
  sliders[i].value(angle)
    
  }

}