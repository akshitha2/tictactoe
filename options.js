// SELECT START ELEMENT
const options = document.querySelector(".options");

// SELECT BUTTONS
const computerBtn = document.querySelector(".computer");
const humanBtn = document.querySelector(".human");
const xBtn = document.querySelector(".x");
const oBtn = document.querySelector(".o");
const playBtn = document.querySelector(".play");

// GAME OVER ELEMENT
const gameOverElement = document.querySelector(".gameover");

const player = new Object;
let OPPONENT;

oBtn.addEventListener("click", function(){
    player.man = "O";
    player.computer = "X";
    player.human = "X";

    switchActive(xBtn, oBtn);
});

xBtn.addEventListener("click", function(){
    player.man = "X";
    player.computer = "O";
    player.human = "O";

    switchActive(oBtn, xBtn);
});
 
computerBtn.addEventListener("click", function(){
    OPPONENT = "computer";
    switchActive(humanBtn, computerBtn);
});

humanBtn.addEventListener("click", function(){
    OPPONENT = "human";
    switchActive(computerBtn, humanBtn);
});

playBtn.addEventListener("click", function(){
    if( !OPPONENT){
        computerBtn.style.backgroundColor = "#f0e3df";
        humanBtn.style.backgroundColor = "#f0e3df";
        return;
    }

    if( !player.man ){
        oBtn.style.backgroundColor = "#f0e3df";
        xBtn.style.backgroundColor = "#f0e3df";
        return;
    }
    
    init(player, OPPONENT);
    options.classList.add("hide");
});

function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");
}