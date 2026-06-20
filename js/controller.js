import * as elements from "./allElements.js";
import createLayout from "./gameBoard.js";
import { board1, board2, board3 } from "./map.js";
import runScript from "./playerForm2.js";
//everything starts here
document.addEventListener("DOMContentLoaded", chooseOpponent);
let bodyElement = document.querySelector("body");
let gameBoard = null;
function chooseOpponent(){
    //display the form to record the selection for opponents
    document.querySelector("main").innerHTML = elements.opponentForm;
    document.querySelector("#opponent-sel").addEventListener("submit", (e)=>{
        e.preventDefault();
        let opponentObj = Object.fromEntries(new FormData(e.target).entries());
        localStorage.setItem("opponent", opponentObj.opponent);
        getNames();
    });
    
}
function getNames(){
    //after the opponent is recorded then get the players name in a form and submit it
    
    bodyElement.innerHTML = elements.formDiv;
    runScript();
}
export function initGame(){
    //setup all the game markers and players, according to the opponent choice and number of players entered and assign each player its own marker.
    //then bounce the dice to indicate whose turn it is
    bodyElement.innerHTML = elements.boardLayout;
    createLayout();
    firstTurn();
    const boardImg = window.getComputedStyle(document.documentElement).getPropertyValue('--board').trim();
    switch (boardImg.slice(9, 15)) {
        case "board1":
            gameBoard = board1;
            break;
        case "board2":
            gameBoard = board2;
            break;
        case "board3":
            gameBoard = board3;
            break;
    }

}
function firstTurn(){
    let nowTurn = document.querySelector("#pl1");
    nowTurn.appendChild(elements.createElementFromString(elements.dice));
    document.querySelector(".dice").addEventListener("click", rollDice);
}
function nextTurn(prevPlayer){
    let nextTurn;
    let opponent = localStorage.getItem("opponent");
    let playersObj = JSON.parse(localStorage.getItem("playersObj"));
    let arrayOfPlayers = (Object.keys(playersObj).sort());
    let indexOfPrev = arrayOfPlayers.indexOf(prevPlayer);
    if(indexOfPrev === arrayOfPlayers.length - 1)
        nextTurn = arrayOfPlayers[0];
    else
        nextTurn = arrayOfPlayers[indexOfPrev+1];
    let diceBtn = document.querySelector(".dice");
    diceBtn.remove();
    let nowTurn = document.querySelector("#"+nextTurn);
    document.querySelector("#"+nextTurn).appendChild(diceBtn);
    diceBtn.classList.add("turn");
    if(nextTurn === "compPl")
    {
        document.querySelector(".dice").disabled = true;
        rollDice();
    }
}
async function rollDice(){
    //then whoever has the turn rolls the dice
    let dice = document.querySelector(".dice");
    dice.disabled = true;
    dice.classList.remove("turn");
    
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        
        dice.style.backgroundImage = `url("/img/dice${diceNumber}.png")`;
        //move the target marker here
        let whoRolledDice  = dice.parentElement.id;

        
               //calculate next position
        let presentDivId = document.getElementsByClassName(whoRolledDice)[0].parentElement.id;
        let moveTo = Number(presentDivId.substr(4)) + diceNumber;   
        if(moveTo < 100){
            
           //write a loop here which moves the marker one positon at a time until the final positon is reached 
            movePlayer(whoRolledDice,presentDivId.substr(4), moveTo);
        }
        else if(moveTo > 100){
            nextTurn(whoRolledDice);
        }
}

async function movePlayer(markerId,presentLoc, moveTo){
    // then whoever rolled the dice, the marker of that player will be moved by dice number
    const marker = document.getElementsByClassName(markerId)[0];
    
    for(let i = Number(presentLoc)+1; i <=moveTo; i++){
        
        let nextDivId = "item" + i;
        const nextDiv = document.getElementById(nextDivId);
        
        const startPos = marker.getBoundingClientRect();
        nextDiv.appendChild(marker);
        const endPos = marker.getBoundingClientRect();
        const deltaX = startPos.left - endPos.left;
        const deltaY = startPos.top - endPos.top;
        let animation = marker.animate([
            {
                transform: `translate(${deltaX}px, ${deltaY}px) scale(1)`,
                offset: 0
            },
            {
                transform: `translate(${deltaX / 2}px, ${deltaY}px) scale(1.5)`,
                offset: 0.5
            }, // Peak of the jump
            {
                transform: `translate(0px, 0px) scale(1)`,
                offset: 1
            }
        ], {
            duration: 500, // Duration in milliseconds
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Smooth landing profile
            fill: 'forwards'
        });
        await animation.finished;
    }
    
    if (moveTo === 100) {
        alert(whoRolledDice + " " + "WON! the game.");
        exitGame();
    }
    else{
        checkLadderOrSnake(marker, moveTo);
        nextTurn(markerId);
        document.querySelector(".dice").disabled = false;
    }
}
function exitGame(){
    //at any point if the exit is pressed then show a popup to confirm to exit and yes or no options. if yes, exit to index.html else continue the game.
    window.location.replace("/");
}
function pauseGame(){
    //at any point if pause is pressed, then show a large pause image as a button on the screen and the background blurred
}
function reachedHundred(){
    //if any of the player's marker is found in the 100 number div, then remove all controls to move the dice etc and end the game and display a popup screen with 
    // congratulations message for the winning player.
    //also display stats like points or coins earned after winning. while for all the loosing players. list their names by how far they were from the 100th div.
    //display a play again and exit button for next steps.
}
function checkLadderOrSnake(marker, moveTo){
    let snakeTail = gameBoard.snakes[moveTo];
    let ladderTop = gameBoard.ladders[moveTo];
    if(snakeTail !== undefined){
        console.log("snake leads to:", snakeTail);
        snakeBite(marker, moveTo, snakeTail);
    }
    if(ladderTop !== undefined){
        console.log("ladder leads to:", ladderTop);
        takeLadder(marker, moveTo, ladderTop);
    }

}
function takeLadder(marker, presentLoc, ladderTop){
    let nextDivId = "item" + ladderTop;
    const nextDiv = document.getElementById(nextDivId);
    nextDiv.appendChild(marker);


}
function snakeBite(marker, presentLoc, snakeTail){
    let nextDivId = "item" + snakeTail;
    const nextDiv = document.getElementById(nextDivId);
    nextDiv.appendChild(marker);    
}