let w = 400;
let h = 400;
let p;

function setup(){
noCanvas();
for (var i = 0; i < 5; i++){
p = createP("this is a link: ");
p.style('background-color', 'grey');
p.style('padding', '24pt');
var a = createA("#", 'link ');
a.mousePressed(dosmth)
a.parent(p);
}
var btn = select('#cclear');
btn.mousePressed(rm);
}

function dosmth(){
  var img = createImg('../download.jpg');
  img.size(100, 100);
  par = this.parent()
  img.parent(par);
}
function rm(){
  imges = selectAll('img');
  for (var i = 0; i < imges.length; i++){
    imges[i].remove();
  }
}

function draw(){
}
function mousePressed(){

}