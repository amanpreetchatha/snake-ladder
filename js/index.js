
import formDiv from "./playerForm.js";

let playButtonDiv = document.querySelector(".button-div");
let mainElement = document.querySelector("main");
let withPlayer = document.querySelector("#with-player");
let withComp = document.querySelector("#with-comp");
let form = formDiv;


document.querySelector("#play-button").addEventListener("click",(e)=>{
    mainElement.removeChild(withPlayer);
    mainElement.removeChild(withComp);
    mainElement.removeChild(playButtonDiv);
    mainElement.innerHTML=form;    //adds no. of players form

    document.querySelector("#exit-game").addEventListener("click", (e) => {
        mainElement.replaceChildren(withPlayer,withComp,playButtonDiv);
    });

});
