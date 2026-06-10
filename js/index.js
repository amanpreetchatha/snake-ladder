
import {formDiv, thirdPlayer, fourthPlayer} from "./playerForm.js";


let mainElement = document.querySelector("main");
let opponentSelForm = document.querySelector("#opponent-sel");




document.querySelector("#opponent-sel").addEventListener("submit",(e)=>{
    e.preventDefault();
    let opponentObj = Object.fromEntries(new FormData(e.target).entries());
    //console.log(opponentObj.opponent)


    //removes the previous screen and injects new form in the main element.
    //try to seprate this from this eventlistner body.
    mainElement.removeChild(opponentSelForm);
    mainElement.innerHTML=formDiv;

    //goes back to previous screen when exit button is pressed
    document.querySelector("#exit-game").addEventListener("click", (e) => {
        mainElement.replaceChildren(opponentSelForm);
    });

    let playerCountFieldset = document.querySelector(".radio");
    //adds more input fields for required number of players
    playerCountFieldset.addEventListener("change",(event)=>{                        
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
    });


});
