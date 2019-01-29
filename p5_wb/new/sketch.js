class Bubble{
  constructor() {
    this.x = 200;
    this.y = 200;
    this.r = 25;
  }
  move(){
    var updateX = this.x + random(-5, 5);
    var updateY = this.y + random(-5, 5);
    this.x = updateX;
    this.y = updateY;
  }
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
  }
  mouseClick(_x, _y){
    var d = dist(this.x, this.y, _x, _y);
    if (d < this.r){
      return true
    }
    else return false
  }
}

class Controller{
  constructor(_ouchAr){
    this.bbl =[]
    this.ouchAr = _ouchAr
  }
  add(){
    this.bbl.push(new Bubble)
  }
  checkRemove(x, y){
    console.log(x, y)
    var ar = this.bbl;
    var ouchAr = this.ouchAr;
    var flag = false;
    this.bbl.forEach(function(bubble, idx){
    if(bubble.mouseClick(x, y)){
      ar.splice(idx, 1);
      ouchAr.addWord(new Kazuki(x, y));
      flag = true;
    }
    })
    if(!flag){
    this.ouchAr.ar.forEach(function(bubble, idx){
      if(bubble.mouseClick(x, y)){
      bubble.suck();
    }
      
    })
  }}
  show(){
    this.ouchAr.show();
    this.bbl.forEach(function(bubble, idx){
    bubble.move();
    bubble.show();
    // console.log(idx);
  })
  }
}

class OuchWord{
  constructor(_x, _y){
    this.x = _x;
    this.y = _y;
    this.fontsize = random(20, 50)
    this.col = [random(0,255), random(0,255), random(0,255)];
  }
  show(){
    fill(this.col[0], this.col[1], this.col[2]);
    strokeWeight(3)
    textSize(this.fontsize);
    text("Ouch", this.x, this.y);
  }
}

class Kazuki{
    constructor(_x, _y){
    this.x = _x;
    this.y = _y;
    this.fontsize = random(20, 50);
    this.col = [random(0,255), random(0,255), random(0,255)];
    this.word = "Kazuki";
    this.speedX = 2;
    this.speedY = (-2.5);
    this.margin = 40;
  }
  show(){
    fill(this.col[0], this.col[1], this.col[2]);
    strokeWeight(3)
    textSize(this.fontsize);
    text(this.word, this.x, this.y);
    this.update()
  }
  update(){
    if(this.x > w){
      this.speedX = - this.speedX;
      console.log("hello", this.speedX);
    }
    if(this.y > h){
      this.speedY = - this.speedY;
      console.log("hello", this.speedY);
    }
    if(this.x < 0){
      this.speedX = - this.speedX;
      console.log("hello", this.speedX);
    }
    if(this.y < 0){
      this.speedY = - this.speedY;
      console.log("hello", this.speedY);
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }
      mouseClick(x, y){
      var d = dist(this.x, this.y, x, y)
      if (d < this.fontsize){
        return true;
      }
      return false;
    }
    suck(){
      this.word = "suck"
      this.fontsize = 100;
    }
}

class Ouch{
  constructor(){
    this.ar = [];
  }
  show(){
    this.ar.forEach(function(ouch){
      ouch.show();
    })
  }
  addWord(word){
    this.ar.push(word);
  }
    checkRemove(x, y){
    var ar = this.ar;
    this.bbl.forEach(function(bubble, idx){
    if(bubble.mouseClick(x, y)){
      console.log(idx);
      ar.splice(idx, 1);
      if(bubble instanceof Kazuki){
        bubble.word = "Suck";
      }else{
      ouchAr.addWord(new Kazuki(x, y));
      }
    }
      
    })
  }
  
}

var cnt;
var ouchAr;
var w = 800;
var h = 800;
function setup() {
  createCanvas(w, h);
  cnt = new Controller(new Ouch());
  for (var i = 0; i < 5; i++){
    cnt.add()
  }
}

function draw() {
  background(200);
  cnt.show()
}

function mousePressed(){
  cnt.checkRemove(mouseX, mouseY);
  
  
}