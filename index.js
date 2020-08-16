/*
const title = document.getElementById("title");

console.dir(title);
title.style.color="black";
title.innerHTML="hkldhljakldjflkdajf!!!!";
document.title="hey i own you is it " 
*/

/*
function handleResize(){
    console.log("i have resize");
}

window.addEventListener("resize",handleResize);
*/

/*
function handleResize(event){
    console.log(event);
}

window.addEventListener("resize",handleResize);
*/

/*
function handleClick(){
    title.style.color="black";
}

window.addEventListener("click",handleClick);
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR="rgb(223, 1, 58)";
const OTHER_COLOR="#00FF80";

function handleClick(){
    const correntColor=title.style.color;
    if(correntColor === BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else{
        title.style.color=BASE_COLOR;
    }

}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click",handleClick);
}
init();
*/

/*
function handleOffline(){
    console.log("jdkjfaljdf");
}

function handleOnline(){
    console.log("i'm back~~~~");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass=title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
   */
}

function init(){
  
    title.addEventListener("click",handleClick);
}
init();