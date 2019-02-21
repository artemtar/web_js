class Food{
    constructor(){
        var loc = this.picklocation();
        this.x = loc[0];
        this.y = loc[1];
    }
    
    show(){
        stroke(0)
        fill(200, 150, 0);
        rect(this.x, this.y, scl, scl);
    }

    update(){
        var loc = this.picklocation();
        this.x = loc[0];
        this.y = loc[1];
    }
    
    picklocation(){
    var posX = floor(random(width) / scl);
    var posY = floor(random(height) / scl);
    return [posX * scl, posY * scl];
}
}