
import {formDiv, thirdPlayer, fourthPlayer} from "./playerForm.js";

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
    let fieldset = document.querySelector(".radio");
    fieldset.addEventListener("change",(event)=>{
        if(event.target && event.target.name === "player-count"){
            if(event.target.value ==="two"){
                document.querySelector(".ic3").innerHTML = "";
                document.querySelector(".ic4").innerHTML = "";
            }
            if (event.target.value === "three") {
                document.querySelector(".ic4").innerHTML = "";
                document.querySelector(".ic3").innerHTML = thirdPlayer;
            }
            if (event.target.value === "four") {
                document.querySelector(".ic3").innerHTML = thirdPlayer;
                document.querySelector(".ic4").innerHTML = fourthPlayer;
            }
        }
    })
});
