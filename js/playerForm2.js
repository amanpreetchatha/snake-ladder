import { mainElement } from "./index.js";
import { thirdPlayer, fourthPlayer } from "./playerForm.js";
import { boardLayout } from "./gameBoard.js";

let playerCountFieldset = document.querySelector(".radio");

if (localStorage.getItem("opponent") === "with-comp") {
    document.querySelector(".ic2").remove();
    playerCountFieldset.remove();
    
}


// goes back to previous screen when exit button is pressed
document.querySelector("#exit-game").addEventListener("click", (e) => {
    e.preventDefault();
    
    // bodyElement.innerHTML = mainElement;
    window.location.replace("/")
});

//adds more input fields for required number of players
playerCountFieldset.addEventListener("change", (event) => {
    
    if ((event.target && event.target.name === "player-count") && (localStorage.getItem("opponent")==="with-player")) {
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


document.querySelector("#player-data").addEventListener("submit", (event) => {
    event.preventDefault();

    //start game here
    let playerDetail = Object.fromEntries(new FormData(event.target).entries());
    console.log(playerDetail);
    document.querySelector("body").innerHTML = boardLayout;
});

