// SELECT START ELEMENT
const options = document.querySelector(".options");

// SELECT BUTTONS
const computerBtn = document.querySelector(".computer");
const humanBtn = document.querySelector(".human");
const xBtn = document.querySelector(".x");
const oBtn = document.querySelector(".o");
const playBtn = document.querySelector(".play");


const l1 = document.querySelector(".lev1");
const l2 = document.querySelector(".lev2");
const l3 = document.querySelector(".lev3");
const l4 = document.querySelector(".lev4");

// GAME OVER ELEMENT
const gameOverElement = document.querySelector(".gameover");

const player = new Object;
let OPPONENT;

player.man = "X";
player.computer = "O";
player.human = "O";

switchActive(oBtn, xBtn);
//
OPPONENT = "computer";
switchActive(humanBtn, computerBtn);

let diff;
diff=0.25;

// changeit(l2,l3,l4,l1);
l1.classList.add("active");
l1.addEventListener("click",function () {
    diff=0.25;
    changeit(l2,l3,l4,l1);
});
l2.addEventListener("click",function () {
    diff=0.50;
    changeit(l1,l3,l4,l2);
});
l3.addEventListener("click",function () {
    diff=0.75;
    changeit(l2,l1,l4,l3);
});
l4.addEventListener("click",function () {
    diff=1;
    changeit(l2,l3,l1,l4);
});

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
    
    init(player, OPPONENT,diff);
    options.classList.add("hide");
});

function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");
}


function changeit(a,b,c,d){
    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.add("active");
}
