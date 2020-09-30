// JavaScript
var klapUit = document.querySelector("header img:first-of-type");
var klapIn = document.querySelector(".menu img");
var body = document.querySelector("body");

var menu = document.querySelector(".menu");

klapUit.addEventListener("click", uitklappen);
klapIn.addEventListener("click", inklappen);

function uitklappen() {
    menu.classList.add("toonMenu");
    body.classList.add("absolute");
}

function inklappen() {
    menu.classList.remove("toonMenu");
    body.classList.remove("absolute");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
