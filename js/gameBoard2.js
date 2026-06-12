import { playerRow1, playerRow2, playerRow3, playerRow4 } from "./gameBoard.js";
let playerDetail = JSON.parse(localStorage.getItem("playersObj"));
console.log("players data: ", playerDetail);
let playerCount = Number(playerDetail.noOfPlayers);
let col1 = document.querySelector(".players-column1");
let col2 = document.querySelector(".players-column2");
if(localStorage.getItem("opponent") === "with-player"){
    //logic for game against other players
    console.log(playerCount);
    console.log(typeof playerCount);
    if(playerCount===2){
        col1.innerHTML = playerRow1;
        col2.innerHTML = playerRow2;
        document.querySelector(".player1").innerHTML = playerDetail?.player1;
        document.querySelector(".player2").innerHTML = playerDetail?.player2;
    }
    if(playerCount ===3 ){
        col1.innerHTML = playerRow1 + playerRow3;
        col2.innerHTML = playerRow2;
        document.querySelector(".player1").innerHTML = playerDetail?.player1;
        document.querySelector(".player2").innerHTML = playerDetail?.player2;
        document.querySelector(".player3").innerHTML = playerDetail?.player3;
    }
    if(playerCount === 4){
        col1.innerHTML = playerRow1 + playerRow3;
        col2.innerHTML = playerRow2 + playerRow4;
        document.querySelector(".player1").innerHTML = playerDetail?.player1;
        document.querySelector(".player2").innerHTML = playerDetail?.player2;
        document.querySelector(".player3").innerHTML = playerDetail?.player3;
        document.querySelector(".player4").innerHTML = playerDetail?.player4;
    }

}else
{
    //logic for game against player
    col1.innerHTML = playerRow1;
    document.querySelector(".player1").innerHTML = playerDetail?.player1;
    console.log(playerCount);
    console.log(typeof playerCount);

    //add computer player row here;
    col2.innerHTML = playerRow2;
    document.querySelector(".player2").textContent = "Computer";
}

let bodyElement = document.querySelector("body");
let mainElement = document.querySelector("main");





