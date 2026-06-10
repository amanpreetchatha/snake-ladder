import { mainElement } from "./index.js";
import { thirdPlayer, fourthPlayer } from "./playerForm.js";


// let mainElement = document.querySelector("main");
// goes back to previous screen when exit button is pressed
document.querySelector("#exit-game").addEventListener("click", (e) => {
    e.preventDefault();
    // let bodyElement = document.querySelector("body");
    // bodyElement.innerHTML = mainElement;
    window.location.replace("/")
});
document.querySelector("#player-data").addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("user data submitted")
});

let playerCountFieldset = document.querySelector(".radio");
//adds more input fields for required number of players
playerCountFieldset.addEventListener("change", (event) => {
    if (event.target && event.target.name === "player-count") {
        if (event.target.value === "two") {
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


;