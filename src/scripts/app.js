"use strict";

//import GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




let body = document.querySelector(".body");

let screenWidth = screen.width;
let widthDesktop = 1000;


let burgerMenu = document.querySelector(".menu__btn");
let menu = document.querySelector(".menu");
let menuContent = document.querySelector(".menu__content");
    
//BURGERMENU
if (screenWidth < widthDesktop) {

    //quand clique sur le bouton menu
    if (burgerMenu && menu) {
        burgerMenu.addEventListener("click", () => {
            menuContent.classList.remove("menu__content--anchorClicked");
            burgerStatus();
        });
    }

    //quand clique sur une ancre
    let anchor = document.querySelectorAll(".anchor");
    if (anchor) {
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].addEventListener("click", () => {
                menuContent.classList.add("menu__content--anchorClicked");
                burgerStatus();
            });
        }
    }

    //changeur de status du burgermenu
    function burgerStatus(){
        menu.classList.toggle("open");
        stopScroll();
    }
}




//déploiement des zones de détails

let zonesDetails = document.querySelectorAll(".details");
let btnArrow = document.querySelectorAll(".btn--detailsArrow");
let zonesContainers = document.querySelectorAll(".detailsContainer");
let btnsDetails = document.querySelectorAll(".btn--detailsOpen");
let btnsFerme = document.querySelectorAll(".btn--detailsClose");
let anchorDetails = document.querySelectorAll(".anchorDetails");

if (zonesDetails && btnsDetails && btnsFerme) {
    for (let i = 0; i < btnsDetails.length; i++) {
        //pour ouvrir
        btnsDetails[i].addEventListener("click", () => {
            zoneDetailOpen(i);
            if (screenWidth < widthDesktop) {
                stopScroll();
            }else{
                zoneContainerOpen(i);
                anchorDetails[i].classList.toggle("anchorDetails--active");
            }
        });
        //pour fermer
        btnsFerme[i].addEventListener("click", () => {
            zoneDetailOpen(i);
            if (screenWidth < widthDesktop) {
                stopScroll();
            }
        }); 
    }
}

function zoneDetailOpen(el){
    zonesDetails[el].classList.toggle("open");
}

if (btnArrow && zonesContainers) {
    for (let i = 0; i < btnArrow.length; i++) {
        //pour fermer avec l'arrow
        btnArrow[i].addEventListener("click", () => {
            zoneDetailOpen(i);
            zoneContainerOpen(i);
            anchorDetails[i].classList.remove("anchorDetails--active");
        }); 
    }
}

function zoneContainerOpen(el){
    zonesContainers[el].classList.toggle("open");
}

if (anchorDetails && zonesContainers) {
    for (let i = 0; i < anchorDetails.length; i++) {
        anchorDetails[i].addEventListener("click", () => {
            zonesDetails[i].classList.add("open");
            zonesContainers[i].classList.add("open");
            anchorDetails[i].classList.add("anchorDetails--active");
        }); 
    }
}




//bloque le scroll du body quand on est dans un menu secondaire sur tell
function stopScroll(){
        body.classList.toggle("blockScroll");
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
        const arrowContainer = document.querySelector(".btnContainer--onEnd");

        if (direction === "right") {
            if (nextProbEl.classList.contains("probs__prob--smaller")) {
                probsContainerEl.classList.add("probs--smaller");
                
                if (screenWidth >= widthDesktop) {
                    arrowContainer.classList.add("btnContainer--smaller")
                }
            }else{
                probsContainerEl.classList.remove("probs--smaller");

                if (screenWidth >= widthDesktop) {
                    arrowContainer.classList.remove("btnContainer--smaller")
                }
            }
    
        } else if (direction === "left") {
            if (previousProbEl.classList.contains("probs__prob--smaller")) {
                probsContainerEl.classList.add("probs--smaller");

                if (screenWidth >= widthDesktop) {
                    arrowContainer.classList.add("btnContainer--smaller")
                }
            }else{
                probsContainerEl.classList.remove("probs--smaller");

                if (screenWidth >= widthDesktop) {
                    arrowContainer.classList.remove("btnContainer--smaller")
                }
            }
        }
    }
}





//slider Examples
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








//animation du menu, de la nav et du pion
const navEls = gsap.utils.toArray(".nav__el");
const listID = ["#introduction", "#rencontres", "#problemes", "#hypotheses", "#solutions", "#recherches", "#presentation", "#conclusion"];
const imgsPrincipales = document.querySelectorAll(".imgSection");
const imgsDeco = document.querySelectorAll(".imgDeco");


pionAnim();

for (let i = 0; i < navEls.length; i++) {
    navAnim(navEls[i], i);
}

if (screenWidth < widthDesktop) {
    appartionMenu();
}else{
    appartionNav();
}

for (let i = 0; i < listID.length; i++) {
    apparitionContent(listID[i], i);
}



function navAnim(item, index){
    const selector = gsap.utils.selector(item);
    const ancre = selector(".anchor");

    ScrollTrigger.create({
        trigger: listID[index],
        start: "top 20%",
        end: "bottom 20%",
        toggleClass: {targets: ancre, className: "anchor--active"}
    })
}


function pionAnim(){

    let pion = document.querySelector(".pion");

    for (let i = 0; i < listID.length; i++) {
        ScrollTrigger.create({
            trigger: listID[i],
            start: "top 20%",
            end: "bottom 20%",
            toggleClass: {targets: pion, className: "pion--pos" + (i + 1)}
        })
    }
}

function appartionMenu() {
    gsap.from(burgerMenu, {
        duration: 0.3,
        opacity: 0,
        ease: "power1.out",
        pointerEvents: "none",
        scrollTrigger:{
            trigger: listID[0],
            toggleActions: "play none none reverse",
            start: "top 20%",
            end: "bottom 20%"
        }
    })
}

function appartionNav() {
    gsap.from(menuContent, {
        duration: 0.3,
        opacity: 0,
        ease: "power1.out",
        pointerEvents: "none",
        scrollTrigger:{
            trigger: listID[0],
            toggleActions: "play none none reverse",
            start: "top 20%",
            end: "bottom 20%"
        }
    })
}

function apparitionContent(el, index){
    gsap.from(el, {
        duration: 1,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger:{
            trigger: el,
            toggleActions: "play none none none",
            start: "top 80%"
        }
    })

    if (index < imgsDeco.length) {
        gsap.from(imgsDeco[index], {
            duration: 0.7,
            opacity: 0,
            ease: "power1.out",
            scrollTrigger:{
                trigger: imgsDeco[index],
                toggleActions: "play none none none",
                start: "top 80%"
            }
        })
    }

    if (screenWidth >= widthDesktop) {
        if (index == 4) {
            gsap.from(imgsPrincipales[index], {
                duration: 0.8,
                delay: 0.1,
                rotateZ: -2,
                ease: "power1.out",
                scrollTrigger:{
                    trigger: el,
                    toggleActions: "play none none none",
                    start: "top 80%"
                }
            })
            
        }else if(index == 6 || index == 1){
            gsap.from(imgsPrincipales[index], {
                duration: 0.8,
                rotateZ: 178,
                delay: 0.1,
                ease: "power1.out",
                scrollTrigger:{
                    trigger: el,
                    toggleActions: "play none none none",
                    start: "top 80%"
                }
            })
        }else {
            gsap.from(imgsPrincipales[index], {
                duration: 0.8,
                rotateZ: 2,
                delay: 0.1,
                ease: "power1.out",
                scrollTrigger:{
                    trigger: el,
                    toggleActions: "play none none none",
                    start: "top 80%"
                }
            })
        }
    }
}

