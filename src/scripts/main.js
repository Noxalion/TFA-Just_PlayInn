"use strict";

//burgermenu
let burgerMenu = document.querySelector(".menu__btn");
let menu = document.querySelector(".menu");
if (burgerMenu && menu) {
    burgerMenu.addEventListener("click", burgerStatus);
}

function burgerStatus(){
    menu.classList.toggle("open");
}
    //cette partie, c'est pour fermer le menu si on est dans une one-page
let anchor = document.querySelectorAll(".anchor");
if (anchor) {
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener("click", burgerStatus);
    }
}