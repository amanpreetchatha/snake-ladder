let boardLayout = `
    <div class="game-div">
    <nav class="game-nav">
        <ul>
            <li>Pause</li>
            <li>Restart</li>
            <li>Exit</li>
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
<div class="player-row1 pl-row">
    <h2 class="player1 name"></h2>
    <img class="pl" src="./img/icon-red.webp"/>
    <button class="dice turn"></button>
</div>
`;
let playerRow2 = `
<div class="player-row2 pl-row">
    <h2 class="player2 name"></h2>
    <img class="pl" src="./img/icon-blue.webp"/>
    <button class="dice"></button>
</div>
`;
let playerRow3 = `
<div class="player-row3 pl-row">
    <h2 class="player3 name"></h2>
    <img class="pl" src="./img/icon-yellow.webp"/>
    <button class="dice"></button>
</div>

`;
let playerRow4 = `
<div class="player-row4 pl-row">
    <h2 class="player4 name"></h2>
    <img class="pl" src="./img/icon-green.webp"/>
    <button class="dice"></button>
</div>
`;
export {boardLayout, playerRow1, playerRow2, playerRow3, playerRow4};
