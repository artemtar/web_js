let start = function(){
    var output;
    output = document.getElementById("out");
    var primes = Array(1000).fill(1);
    primes[0] = 0;
    primes[1] = 0;
    var ind = 2;

    while (ind <= 500){
        if ( primes[ind] == 1 ){
            var replace = 2 * ind;
            while(replace < 1000){
                primes[replace] = 0;
                replace += ind;
            }
        }        
        ind++;
    }
    var count = 0;
    rowstart = "<tr>"
    rowend = "</tr>"
    var flagStart = false;
    var flagEnd = false;
    var out = "<table>";

    for(var i = 2; i < 1000; ++i){
        if (primes[i] == 1){
            if(count % 5 == 0){
                if(flagStart == false){
                    flagStart = true;
                    flagEnd = false;
                    out += rowstart;
                }
            }
            count ++;
            out += "<td>" + "<strong>" + count + "</strong>" 
                + ": " + "<em>" + i + "</em>" + "</td>";
            if(count % 5 == 0){
                if(flagEnd == false){
                    flagEnd = true;
                    flagStart = false;
                    out += rowend;
                }
        }
    }
}
    out += rowend + "</table>";
    output.innerHTML = out;
}
window.addEventListener("load", start, false);