'use strict';

let topbutton = document.getElementById("topbtn");

window.onscroll = function() {scrollfunction()};

// function
function scrollfunction() {
    if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    }
    else {
        topbutton.style.display = "none";
    }
}

// click button 
function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}