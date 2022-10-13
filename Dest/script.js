"use strict";
let word = document.getElementById("word");
if (word != null) {
    word.addEventListener("mouseover", intro);
}
let timer;
function intro() {
    if (word != null) {
        timer = setInterval(fade, 10);
    }
}
function fade() {
    if (word != null)
        word.style.opacity = ".5";
}
