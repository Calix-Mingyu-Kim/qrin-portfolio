const pageStatus_div = document.getElementById("pageStatus");
const toggleWrapper_div = document.getElementById("toggleWrapper");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var numbers = document.getElementsByClassName("numbertext");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        numbers[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    numbers[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function togglePopup() {
    let i;
    let content = document.getElementsByClassName("content");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById("popup-1").classList.toggle("active");
    content[slideIndex-1].style.display = "block";
/*
    var i;
    var content = document.getElementById("p1");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById("p4") = content;
    console.log(content);
    */
}

function displayStatus () {
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.exitFullscreen();
        pageStatus_div.src = "images/fullscreenIcon.png";
       toggleWrapper_div.style.padding = "0px 0px 0px 0px";
    } else {
        document.documentElement.requestFullscreen();
        pageStatus_div.src = "images/normalScreenIcon.png";
        toggleWrapper_div.style.padding = "10px 0px 0px 0px";
    }
}