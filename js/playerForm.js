
let formDiv = `
<div class="form">
    <div class="title">Choose Color and Name</div>
    <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Player 1</label>
    </div>
    <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Player 2</label>
    </div>
    <fieldset>
        <legend>Number of Players:</legend>

        <div>
            <input type="radio" id="two" name="player-count" value="two" checked />
            <label for="two">Two</label>
        </div>

        <div>
            <input type="radio" id="three" name="player-count" value="three" />
            <label for="three">Three</label>
        </div>

        <div>
            <input type="radio" id="four" name="player-count" value="four" />
            <label for="four">Four</label>
        </div>
    </fieldset>

    <button type="text" class="btn play" id="start-game">Start</button>
    <button type="text" class="btn exit" id="exit-game">Exit</button>
</div>
`;
export default formDiv;
