let width = 400;
let height = 400;
var scl = 20;
var s;
var food;

function setup(){
createCanvas(width, height);
frameRate(8);
s = new Snake;
food = new Food;
}

function draw(){
background(50);
food.show();
s.show();
s.update();
if(s.eat(food)){
    food.update()
    s.grow(food);
    print(s.tail);
}
}



function keyPressed(){
    if(keyCode === UP_ARROW){
        s.direction(0,-1);
    }
    else if (keyCode === DOWN_ARROW){
        s.direction(0,1);
    }
    else if (keyCode === LEFT_ARROW){
        s.direction(-1,0);
    }
    else if (keyCode === RIGHT_ARROW){
        s.direction(1,0);
    }
}