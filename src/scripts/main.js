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

let anchor = document.querySelectorAll(".anchor");
if (anchor) {
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener("click", burgerStatus);
    }
}


//déploiement des zones de détails
let zonesDetails = document.querySelectorAll(".details");
let btnsDetails = document.querySelectorAll(".btn--detailsOpen");
let btnsFerme = document.querySelectorAll(".btn--detailsClose");
if (zonesDetails && btnsDetails && btnsFerme) {
    for (let i = 0; i < btnsDetails.length; i++) {
        //pour ouvrir
        btnsDetails[i].addEventListener("click", () => {
            zoneDetailOpen(i);
        });
        //pour fermer
        btnsFerme[i].addEventListener("click", () => {
            zoneDetailOpen(i);
        }); 
    }
}

function zoneDetailOpen(el){
    zonesDetails[el].classList.toggle("open");
}