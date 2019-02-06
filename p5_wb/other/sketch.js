var w = 100;
var h = 100;
var drop;
function setup() {
  createCanvas(w, h);
  background(150);
  drop = select('#dropzone');
  drop.dragOver(highlight);
  drop.dragLeave(unhighlight);
  drop.drop(gotfile, unhighlight);
}
function gotfile(file){
  var p = createP('');
  var img = createImg(file.data);
  var dis = createP(file.name);
  img.parent(p);
  img.size(100, 100);
}
function unhighlight(){
  drop.style('background-color', 'white');
  
}
function highlight(){
  drop.style('background-color', 'lightblue');
}

function draw() {

}

function mousePressed(){

}