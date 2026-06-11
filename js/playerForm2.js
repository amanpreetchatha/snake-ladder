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
        
        switch(Number(event.target.value)) {
            case 2:
                document.querySelector(".ic3").innerHTML = "";
                document.querySelector(".ic4").innerHTML = "";
            break;
            case 3:
                document.querySelector(".ic4").innerHTML = "";
                document.querySelector(".ic3").innerHTML = thirdPlayer;
            break;
            case 4:
                document.querySelector(".ic3").innerHTML = thirdPlayer;
                document.querySelector(".ic4").innerHTML = fourthPlayer;
            break;
        }
    }
});


document.querySelector("#player-data").addEventListener("submit", (event) => {
    event.preventDefault();

    //start game here
    let playerDetail = Object.fromEntries(new FormData(event.target).entries());
    localStorage.setItem("playersObj",JSON.stringify(playerDetail));
    //injects the game board layout to body element
    let docBody = document.querySelector("body");
    docBody.innerHTML = boardLayout;
    let scriptTag = document.createElement("script");
    scriptTag.src = "js/gameBoard2.js";
    scriptTag.type = "module";
    docBody.appendChild(scriptTag);

});

