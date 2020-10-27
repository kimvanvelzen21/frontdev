// JavaScript
var klapMenuUit = document.querySelector("header img:first-of-type");
var klapMenuIn = document.querySelector(".menu img");

var menu = document.querySelector(".menu");

klapMenuUit.addEventListener("click", uitklappen);
klapMenuIn.addEventListener("click", inklappen);

function uitklappen() {
    menu.classList.add("toonHamburgermenu");
    body.classList.add("absolute");
}

function inklappen() {
    menu.classList.remove("toonHamburgermenu");
    body.classList.remove("absolute");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("boxSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("showBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "-";
    moreText.style.display = "inline";
  }
}
