// window.addEventListener("load", start, false);
const START = 1;
const FINISH = 70;
var track;
var startB;
var output;

window.onload = function(){
    startB = document.getElementById("startB");
    startB.addEventListener("click", start, false);
    track = document.getElementById("track");
}

let start = function(){
    var T = 1;
    var H = 1;

    alert("ON YOUR MARK, GET SET"
            + "BANG!!!" +
                "AND THEY’RE OFF!!!");

    track.innerHTML = '';

    while (true){
        var num = Math.floor(Math.random() * 10) + 1;
        try{
            T += get_x_T(num);
            H += get_x_H(num);
        }catch(er){
            console.log(er);
        }
        console.log(T);
        console.log(H);
        if (T >= FINISH || H >= FINISH){
            break;
        }
        if (T < 1) T = 1;
        if (H < 1) H = 1;
        printTrack(H, T);
    }
    winner(H, T);
}

let winner = function(H, T){
    if(H >= 70 && T >= 70){
        alert("IT’S A TIE")
        return;
    }
    if(H >= 70){
        alert("HARE WINS. YUCK!")
    }
    if(T >= 70){
        alert("TORTOISE WINS!!! YAY!!!");
    }
}

let printTrack = function(H, T){
    var out = "<div><table><tr>"
    for (var i = 0; i < 70; ++i){
        var spot = i + 1;
        if (spot == H && spot == T){
            out += "<td>|OUCH|</td>";
            continue;
        }
        if (spot == T){
            out += "<td>|T|</td>";
        }
        else if (spot == H){
            out += "<td>|H|</td>";
        }
        else out += "<td>|_|</td>";
    }
    out += "</tr></table></div>";
    track.innerHTML += out;
}

let get_x_T = function(num){
        if (num > 0 && num < 6)
            return 3;
        if (num == 6 || num == 7)
            return -6;
        if (num > 7 && num < 11)
            return 1;
        throw "num error"
}
let get_x_H = function(num){
        if (num < 3 && num > 0)
            return 0;
        if (num < 5 && num > 2)
            return 9;
        if (num == 5)
            return -12;
        if (num < 9 && num > 5)
            return 1;
        if (num < 11 && num > 8)
            return 2;
        throw "num error";
}