let opponentForm = `
    <form id="opponent-sel" method="post">
        <fieldset class="opponent-radio">
            <input class="player-sel" type="radio" id="with-player" name="opponent" value="with-player" checked/>
            <input class="comp-sel" type="radio" id="with-comp" name="opponent" value="with-comp"/>
        </fieldset>
        <div class="button-div">
            <button class="play btn" id="play-button" type="submit">Play</button>
        </div>
    </form>
`;
let formDiv = `
<main>
<form class="form" id="player-data" method="post">
    <div class="title">Choose Color and Name</div>
    <div class="input-container ic1">
        <input id="player1" name="pl1" class="input" type="text" placeholder=" " required maxlength="20" /><img class="player-icon" src="./img/icon-red.webp"/>
        <div class="cut"></div>
        <label for="pl1" class="placeholder">Player 1</label>
    </div>
    <div class="input-container ic2">
        <input id="player2" name="pl2" class="input" type="text" placeholder=" " required maxlength="20"/><img class="player-icon" src="./img/icon-blue.webp"/>
        <div class="cut"></div>
        <label for="pl2" class="placeholder">Player 2</label>
    </div>
    <div class="ic3"></div>
    <div class="ic4"></div>
    <fieldset class="radio">
        <legend>Number of Players:</legend>
            <input type="radio" id="two" name="noOfPlayers" value="2" checked />
            <label for="two">Two</label>
            <input type="radio" id="three" name="noOfPlayers" value="3" />
            <label for="three">Three</label>
            <input type="radio" id="four" name="noOfPlayers" value="4" />
            <label for="four">Four</label>
    </fieldset>

    <button type="submit" class="btn play" id="start-game">Start</button>
    <button type="cancel" class="btn exit" id="exit-game">Exit</button>
</form>
</main>
`;

let thirdPlayer = `
    <div class="input-container">
        <input id="player3" name="pl3" class="input" type="text" placeholder=" " required maxlength="20"/><img class="player-icon" src="./img/icon-yellow.webp"/>
        <div class="cut"></div>
        <label for="pl3" class="placeholder">Player 3</label>
    </div>
`;

let fourthPlayer = `
    <div class="input-container">
        <input id="player4" name="pl4" class="input" type="text" placeholder=" " required maxlength="20" /><img class="player-icon" src="./img/icon-green.webp"/>
        <div class="cut"></div>
        <label for="pl4" class="placeholder">Player 4</label>
    </div>
`;

let boardLayout = `
    <div class="game-div">
    <nav class="game-nav">
        <ul>
            <li>Pause</li>
            <li>Restart</li>
            <li id="exit">Exit</li>
        </ul>
    </nav>
    <div class="players-column1 pl-col">
        
        
    </div>
    <main class="game-board">
        <div class="grid-container">
                       
        </div>
    </main>
    <div class="players-column2 pl-col">
        
    </div>
    </div>
`;
let playerRow1 = `
<div class="pl-row" id="pl1">
    <h2 class="player1 name"></h2>
    <img class="pl" src="./img/icon-red.webp"/>
</div>
`;
let playerRow2 = `
<div class="pl-row" id="pl2">
    <h2 class="player2 name"></h2>
    <img class="pl" src="./img/icon-blue.webp"/>
    
</div>
`;
let playerRow3 = `
<div class="pl-row" id="pl3">
    <h2 class="player3 name"></h2>
    <img class="pl" src="./img/icon-yellow.webp"/>
    
</div>

`;
let playerRow4 = `
<div class="pl-row" id="pl4">
    <h2 class="player4 name"></h2>
    <img class="pl" src="./img/icon-green.webp"/>
    
</div>
`;
let markerPlayer1 = `<img class="marker pl1" src="img/icon-red.webp"/>`;
let markerPlayer2 = `<img class="marker pl2" src="img/icon-blue.webp"/>`;
let markerPlayer3 = `<img class="marker pl3" src="img/icon-yellow.webp"/>`;
let markerPlayer4 = `<img class="marker pl4" src="img/icon-green.webp"/>`;
let markerComputer = `<img class="marker comp-marker" src="img/icon-blue.webp"/>`;

let dice = `<button class="dice turn"></button>`;


export function createElementFromString(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim(); // .trim() removes unnecessary whitespace
    return template.content.firstElementChild; // Returns the single HTML element
}

export {dice, boardLayout, playerRow1, playerRow2, playerRow3, playerRow4, markerPlayer1, markerPlayer2, markerPlayer3, markerPlayer4, markerComputer };


export {opponentForm, formDiv, thirdPlayer, fourthPlayer};
