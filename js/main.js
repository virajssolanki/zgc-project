
// carosel

var right = 0;
var maxMargin;
var jumpMargin = 230;

function setWidth() {
    var boxwidth = document.querySelector(".container-carousel").offsetWidth;
    var displaywidth = document.querySelector(".row-carousel").offsetWidth;
    var displayheight = document.querySelector(".row-carousel").offsetHeight;
    var children = document.querySelectorAll(".row-container > .container-carousel").length;
    var outerboxwidth = children * boxwidth + (children * 10);
    document.querySelector(".row-container").style.width = outerboxwidth + "px";
    document.querySelectorAll(".buttons")[0].style.height = displayheight + "px";
    document.querySelectorAll(".buttons")[1].style.height = displayheight + "px";
    maxMargin = outerboxwidth - displaywidth;
}

function slideLeft(event) {
    var rowcont = document.querySelector(".row-container");
    if (right <= -maxMargin) {
        event.preventDefault();
    }
    else {
        right -= jumpMargin;
    }
    rowcont.style.marginLeft = right + "px";
}

function slideRight(event) {
    var rowcont = document.querySelector(".row-container");
    if (right == 0) {
        event.preventDefault();
    }
    else if (right >= maxMargin) {
        event.preventDefault();
    }
    else {
        right += jumpMargin;
    }
    rowcont.style.marginLeft = right + "px";
}

window.onload = setWidth;