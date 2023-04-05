let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
timer = false;
const start = () => {
    timer = true;
    countdown()
}
const stop = () => {
    timer = false;
}
const reset = () => {
    timer = false;
 hr = 0;
 min = 0;
 sec = 0;
 count = 0;
 document.getElementById("hr").innerHTML="00";
 document.getElementById("min").innerHTML="00";
 document.getElementById("sec").innerHTML="00";
 document.getElementById("main").innerHTML="00";
}
const countdown = () => {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr= hr + 1;
            min = 0;
        }
        document.getElementById("hr").innerHTML = hr;

        document.getElementById("min").innerHTML = min;

        document.getElementById("sec").innerHTML = sec;

        document.getElementById("main").innerHTML = count;
        setTimeout("countdown()", 10);

    }


}