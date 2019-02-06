let w = 400;
let h = 400;

class Word{
  constructor(w, c){
    this.x = random(400);
    this.y = random(400);
    this.c = c;
    this.txt = createA("#", w);
    this.txt.position(this.x, this.y);
    this.txt.class(c)
    this.txt.mousePressed(become)
    }
  show(){
    
  }
}
function become(){
  if (this.c === "grape"){
    this.txt = createA("#", "apple");
    this.txt.class("apple");
    this.txt.position(this.x, this.y);
  }else{
    // this.txt.removeClass("apple");
    this.txt.class("grape");
    this.txt.position(this.x, this.y);
  }
  print(words.length);
}
let words = [];
function setup(){
createCanvas(w, h);
for(var i = 0; i < 100; i++){
  words.push(new Word("grape", "grape"));
}
for(i = 0; i < 100; i++){
  words.push(new Word("apple", "apple"));
}
}


function draw(){
background(200);
}
function mousePressed(){

}