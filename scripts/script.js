// JavaScript
var klapMenuUit = document.querySelector("header img:first-of-type"); /*selecteerd de variable img:first-of-type*/
var klapMenuIn = document.querySelector(".menu img"); /*selecteerd de variable ".menu" & close image */
var menu = document.querySelector(".menu"); /*selecteerd de variable ".menu"*/

klapMenuUit.addEventListener("click", uitklappen);
klapMenuIn.addEventListener("click", inklappen);

function uitklappen() { /*uitklappen van het hamburgermenu*/
    menu.classList.add("toonHamburgermenu");
    body.classList.add("absolute");
}

function inklappen() { /*inklappen van het hamburgermenu*/
    menu.classList.remove("toonHamburgermenu");
    body.classList.remove("absolute");
}

function showText() {
  var main = document.getElementById("main-text"); /*variable main text*/
  var moreText = document.getElementById("more"); /*variable tweede gedeelte van de tekst*/
  var btnText = document.getElementById("showBtn"); /*variable button text*/

  if (main.style.display === "none") {
    main.style.display = "inline";/* Het element genereert een of meer inline elementboxen*/
    btnText.innerHTML = "+"; /* De button text*/
    moreText.style.display = "none"; /*Het tweede gedeelte van de tekst word getoond*/
  } else {
    main.style.display = "none"; /* De main text */
    btnText.innerHTML = "-";    /* De button text gaat van "+" naar "-" */
    moreText.style.display = "inline";/*Het element genereert een of meer inline elementboxen*/
  }
}
