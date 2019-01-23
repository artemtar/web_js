var x = 3;

function sq(x) {
    return x * x;
}

var t = "whatever " + sq(x);
console.log(t);

(function qq(){
    console.log("my log")
})()

function myclosure(x){
    return function(y){
        console.log("the first" + x + "the second" + y);
    }
}

var cl =  myclosure(1);
cl(2); 

var hi = function(){
    alert("hello");
};
// hi();
var Pony = {
    hi: function(){
        alert("hi");
    }
};
//Pony.hi();

var fc = function(n){
    if (n > 0)
        return n * arguments.callee(n-1);
    else return 1;
    };
var xxx = fc(5);
console.log(xxx);

function setup(){
    
}

var myob = new Object;
myob.a = "a";
myob.n = 1;
myob.fun = function(){
    console.log(this.a, this.n);
};

console.log(myob);
myob.fun();

function Cr(a, b) {
    console.log("hellooooo");
    this.aa = a;
    this.bb = b;
}

var test = new Cr(1,2);
console.log(test);


var wo = new Object;
wo.a = "a";
wo["f"] = function(a){
    console.log(a + "some");
};

wo["f"] = function(){
    console.log(wo.a + "some2");
};
    var l = wo["f"];
l = function d(params) {
    log("inside");
};
console.log(wo);
wo["f"];