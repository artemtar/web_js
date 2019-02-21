var n = 0;
class Snake{
    constructor(){
        this.speedX = 1;
        this.speedY = 0;
        this.tottal = 1;
        this.tail = [];
        this.tail.push(new Segment(width / 2, height / 2))
    }
    update(){

        for(var i = 1; i < this.tottal; i++){
            this.tail[i].update(this.tail[i - 1].x, this.tail[i - 1].y);
        }       
        
        this.tail[0].update(this.SpeedX * scl, this.Speed * scl);

    }
    show(){
        this.tail.forEach(e => {
            e.show();
        });
    }
    direction(_x, _y){
        this.speedX = _x;
        this.speedY = _y;
    }
    eat(food){
        var d = dist(this.tail[0].x, this.tail[0].y, food.x, food.y);
        return d < 1;
    }
    grow(food){
       this.tottal++;
       var head = new Segment (food.x, food.y);
       this.tail.unshift(head);
    //    this.update();
    }
}

class Segment{
    constructor(_x, _y){
        this.x = _x;
        this.name = n;
        n++;
        this.y = _y;
        this.c = color(random(255), random(255), random(255));
    }
    update(_x, _y){
        this.x = _x;
        this.y = _y;
    }
    show(){
        fill(this.c);
        stroke(0)
        rect(this.x, this.y, scl, scl);
    }
}