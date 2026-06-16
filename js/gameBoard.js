import { playerRow1, playerRow2, playerRow3, playerRow4, markerComputer, markerPlayer1, markerPlayer2, markerPlayer3, markerPlayer4 } from "./allElements.js";

export default function createLayout(){

    let playerDetail = JSON.parse(localStorage.getItem("playersObj"));
let playerCount = Number(playerDetail.noOfPlayers);
let col1 = document.querySelector(".players-column1");
let col2 = document.querySelector(".players-column2");
let gridContainer = document.querySelector(".grid-container");
document.getElementById("exit").addEventListener("click",()=>window.location.replace("/"));

//add elements to empty grid cells.
for (let i = 100; i >= 91; i--) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 81; i <= 90; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 80; i >= 71; i--) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 61; i <= 70; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 60; i >= 51; i--) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 41; i <= 50; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 40; i >= 31; i--) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 21; i <= 30; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 20; i >= 11; i--) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
for (let i = 1; i <= 10; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.id = ("item" + i.toString());
    gridContainer.appendChild(item);
}
if (localStorage.getItem("opponent") === "with-player") {

    //logic for game against other players

    if (playerCount === 2) {
        col1.innerHTML = playerRow1;
        col2.innerHTML = playerRow2;
        document.querySelector(".player1").innerHTML = playerDetail?.pl1;
        document.querySelector(".player2").innerHTML = playerDetail?.pl2;
        document.querySelector("#item1").innerHTML = markerPlayer1 + markerPlayer2;
    }
    if (playerCount === 3) {
        col1.innerHTML = playerRow1 + playerRow3;
        col2.innerHTML = playerRow2;
        document.querySelector(".player1").innerHTML = playerDetail?.pl1;
        document.querySelector(".player2").innerHTML = playerDetail?.pl2;
        document.querySelector(".player3").innerHTML = playerDetail?.pl3;
        document.querySelector("#item1").innerHTML = markerPlayer1 + markerPlayer2 + markerPlayer3;
    }
    if (playerCount === 4) {
        col1.innerHTML = playerRow1 + playerRow3;
        col2.innerHTML = playerRow2 + playerRow4;
        document.querySelector(".player1").innerHTML = playerDetail?.pl1;
        document.querySelector(".player2").innerHTML = playerDetail?.pl2;
        document.querySelector(".player3").innerHTML = playerDetail?.pl3;
        document.querySelector(".player4").innerHTML = playerDetail?.pl4;
        document.querySelector("#item1").innerHTML = markerPlayer1 + markerPlayer2 + markerPlayer3 + markerPlayer4;
    }

} else {
    //logic for game against computer
    col1.innerHTML = playerRow1;
    document.querySelector(".player1").innerHTML = playerDetail?.pl1;


    //add computer player row here;
    col2.innerHTML = playerRow2;
    document.querySelector(".player2").textContent = "Computer";
    document.querySelector("#item1").innerHTML = markerPlayer1 + markerComputer;

}
}