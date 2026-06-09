
let formDiv = `
<div class="form">
    <div class="title">Choose Color and Name</div>
    <div class="input-container ic1">
        <input id="player1" class="input" type="text" placeholder=" " /><img class="player-icon" src="./img/icon-red.webp"/>
        <div class="cut"></div>
        <label for="player1" class="placeholder">Player 1</label>
        
    </div>
    <div class="input-container ic2">
        <input id="player2" class="input" type="text" placeholder=" " /><img class="player-icon" src="./img/icon-red.webp"/>
        <div class="cut"></div>
        <label for="player2" class="placeholder">Player 2</label>
    </div>
    <div class="ic3"></div>
    <div class="ic4"></div>
    <fieldset class="radio">
        <legend>Number of Players:</legend>
            <input type="radio" id="two" name="player-count" value="two" checked />
            <label for="two">Two</label>
            <input type="radio" id="three" name="player-count" value="three" />
            <label for="three">Three</label>
            <input type="radio" id="four" name="player-count" value="four" />
            <label for="four">Four</label>
    </fieldset>

    <button type="text" class="btn play" id="start-game">Start</button>
    <button type="text" class="btn exit" id="exit-game">Exit</button>
</div>
`;

let thirdPlayer = `
    <div class="input-container">
        <input id="player3" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="player3" class="placeholder">Player 3</label>
    </div>
`;

let fourthPlayer = `
    <div class="input-container">
        <input id="player4" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="player4" class="placeholder">Player 4</label>
    </div>
`;
export {formDiv, thirdPlayer, fourthPlayer};
