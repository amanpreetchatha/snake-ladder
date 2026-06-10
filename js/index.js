
import {formDiv} from "./playerForm.js";


let bodyElement = document.querySelector("body");
let mainElement = `
    <main>
    <form id="opponent-sel" method="post">
        <fieldset class="opponent-radio">
            <input class="player-sel" type="radio" id="with-player" name="opponent" value="with-player" checked/>
            <input class="comp-sel" type="radio" id="with-comp" name="opponent" value="with-comp"/>
        </fieldset>
        <div class="button-div">
            <button class="play btn" id="play-button" type="submit">Play</button>
        </div>
    </form>
    </main>
    <script src="js/index.js" type="module"></script>
`;



document.querySelector("#opponent-sel").addEventListener("submit",playGame);
function playGame(e){
        e.preventDefault();
        
        let opponentObj = Object.fromEntries(new FormData(e.target).entries());
        localStorage.setItem("opponent",opponentObj.opponent);
        
        bodyElement.innerHTML = formDiv;
        let scriptTag = document.createElement("script");
        scriptTag.src = "js/playerForm2.js";
        scriptTag.type = "module";
        bodyElement.appendChild(scriptTag);
        
}
export {mainElement};