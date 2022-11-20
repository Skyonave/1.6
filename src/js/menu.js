const menu = document.querySelector(".aside-menu");
const buttonMenu = document.querySelector(".button__burger");
const buttonCloseMenu = document.querySelector(".button__x");
const ablur = document.querySelector(".blur");

buttonMenu.onclick = function () {
    menu.classList.remove("mobile-hides")
    menu.classList.remove("tablet-hides")
    menu.style.position = "fixed";
    menu.style.height = "100vh";
    ablur.style.zIndex = "10";
}

buttonCloseMenu.onclick = function () {
    menu.classList.add("mobile-hides")
    menu.classList.add("tablet-hides")
    menu.style.position = "inherit";
    menu.style.height = "";
    ablur.style.zIndex = "-10";
}

// call back
const buttonOrderCall = document.querySelector(".aside-menu__button__call")
const orderCall = document.querySelector(".order-call")
const buttonOrderCallClose = document.querySelector(".order-call__button")

buttonOrderCall.onclick = function () {
    orderCall.style.zIndex = "15";
    orderCall.style.display = "block"
    ablur.style.zIndex = "12";
}

buttonOrderCallClose.onclick = function () {
    orderCall.style.zIndex = "-15";
    orderCall.style.display = "none"
    
    if(window.innerWidth >= 999){
        ablur.style.zIndex = "-10";
    } else {
        ablur.style.zIndex = "10";
    }
}

// feedback 

const buttonFeedBack = document.querySelector(".aside-menu__button__chat")
const feedback = document.querySelector(".feedback")
const buttonFeedBackClose = document.querySelector(".feedback__button")

buttonFeedBack.onclick = function () {
    feedback.style.zIndex = "15";
    feedback.style.display = "block"
    ablur.style.zIndex = "12";
}

buttonFeedBackClose.onclick = function () {
    feedback.style.zIndex = "-15";
    feedback.style.display = "none"
    if(window.innerWidth >= 999){
        ablur.style.zIndex = "-10";
    } else {
        ablur.style.zIndex = "10";
    }
    
}


ablur.onclick = function () {
    ablur.style.zIndex = "-10";
    feedback.style.zIndex = "-15";
    feedback.style.display = "none"
    orderCall.style.zIndex = "-15";
    orderCall.style.display = "none"
    menu.classList.add("mobile-hides")
    menu.classList.add("tablet-hides")
    menu.style.position = "inherit";
    menu.style.height = "";
}