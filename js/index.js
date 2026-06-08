let playButtonDiv = document.querySelector(".button-div");
let mainElement = document.querySelector("main");
let withPlayer = document.querySelector("#with-player");
let withComp = document.querySelector("#with-comp");
let playerNames = document.createElement("form");
document.querySelector("#play-button").addEventListener("click",(e)=>{
    mainElement.removeChild(withPlayer);
    mainElement.removeChild(withComp);
    mainElement.removeChild(playButtonDiv);
    mainElement.appendChild(playerNames);
})