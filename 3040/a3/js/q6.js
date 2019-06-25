var input;
var output;
var trButton;
window.onload = function(){
    console.log("log")
    input = document.getElementById("in");
    output = document.getElementById("out");
    trButton = document.getElementById("trButton");
    trButton.addEventListener("click", printLatinWord, false);
}

let printLatinWord = function(){
    sentence = input.value;
    var tokenized = sentence.split(" ");
    var out = tokenized.map(x => x.substring(1) + x.substring(0, 1) + "ay");
    var reducer = (acc, val) => acc + " " + val;
    output.value += out.reduce(reducer) + "\n";
}