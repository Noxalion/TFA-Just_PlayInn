"use strict";

let body = document.querySelector(".body");

//burgermenu
let burgerMenu = document.querySelector(".menu__btn");
let menu = document.querySelector(".menu");
if (burgerMenu && menu) {
    burgerMenu.addEventListener("click", burgerStatus);
}

function burgerStatus(){
    menu.classList.toggle("open");
    stopScrollMobile();
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
            stopScrollMobile();
        });
        //pour fermer
        btnsFerme[i].addEventListener("click", () => {
            zoneDetailOpen(i);
            stopScrollMobile();
        }); 
    }
}

function zoneDetailOpen(el){
    zonesDetails[el].classList.toggle("open");
}

//bloque le scroll du body quand on est dans un menu secondaire sur tell
function stopScrollMobile(){
    if (screen.width < 1000) {
        body.classList.toggle("blockScroll");
    }
}

//slider Probs
const buttonsProbs = {
	prev: document.querySelector(".btnProbs--left"),
	next: document.querySelector(".btnProbs--right"),
};
const probsContainerEl = document.querySelector(".probs");

if(buttonsProbs && probsContainerEl){
    buttonsProbs.next.addEventListener("click", () => swapProbs("right"));

    buttonsProbs.prev.addEventListener("click", () => swapProbs("left"));
}

function swapProbs(direction) {
	const currentProbEl = probsContainerEl.querySelector(".current--prob");
	const previousProbEl = probsContainerEl.querySelector(".previous--prob");
	const nextProbEl = probsContainerEl.querySelector(".next--prob");

	swapProbsClass();
    checkProbsSize();

	function swapProbsClass() {
		currentProbEl.classList.remove("current--prob");
		previousProbEl.classList.remove("previous--prob");
		nextProbEl.classList.remove("next--prob");

		if (direction === "right") {
			currentProbEl.classList.add("previous--prob");
			previousProbEl.classList.add("next--prob");
			nextProbEl.classList.add("current--prob");

		} else if (direction === "left") {
			currentProbEl.classList.add("next--prob");
			previousProbEl.classList.add("current--prob");
			nextProbEl.classList.add("previous--prob");
		}
	}

    function checkProbsSize() {    
        if (direction === "right") {
            if (nextProbEl.classList.contains("probs__prob--smaller")) {
                probsContainerEl.classList.add("probs--smaller");
            }else{
                probsContainerEl.classList.remove("probs--smaller");
            }
    
        } else if (direction === "left") {
            if (previousProbEl.classList.contains("probs__prob--smaller")) {
                probsContainerEl.classList.add("probs--smaller");
            }else{
                probsContainerEl.classList.remove("probs--smaller");
            }
        }
    }
}

//slider Probs
const buttonsEx = {
	prev: document.querySelector(".btnEx--left"),
	next: document.querySelector(".btnEx--right"),
};
const exContainerEl = document.querySelector(".examples");

if(buttonsEx && exContainerEl){
    buttonsEx.next.addEventListener("click", () => swapEx("right"));

    buttonsEx.prev.addEventListener("click", () => swapEx("left"));
}

function swapEx(direction) {
	const currentExEl = exContainerEl.querySelector(".current--ex");
	const previousExEl = exContainerEl.querySelector(".previous--ex");
	const nextExEl = exContainerEl.querySelector(".next--ex");

	swapExClass();

	function swapExClass() {
		currentExEl.classList.remove("current--ex");
		previousExEl.classList.remove("previous--ex");
		nextExEl.classList.remove("next--ex");

		if (direction === "right") {
			currentExEl.classList.add("previous--ex");
			previousExEl.classList.add("next--ex");
			nextExEl.classList.add("current--ex");

		} else if (direction === "left") {
			currentExEl.classList.add("next--ex");
			previousExEl.classList.add("current--ex");
			nextExEl.classList.add("previous--ex");
		}
	}
}

