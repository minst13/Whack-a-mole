const startGame = document.getElementById("start");


const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreCount = document.querySelector(".score");
let lastHole;
let tally = 0;
let timeUp = false;


function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) {
    const molePop = Math.floor(Math.random() * holes.length);
    const hole = holes[molePop];
    if (hole == lastHole) {
        console.log("You got same hole!")
        return randHole(holes);
    }
    lastHole = hole;
    return hole;
}

function showMole() {
    const time = randTime(250, 1000);
    const hole = randHole(holes);
    console.log(time, hole)
    hole.classList.add("moleUp");
    setTimeout(() => {
        hole.classList.remove("moleUp");
        if (!timeUp) showMole();
    }, time);
}

startGame.addEventListener("click",
    function () {
        gameStart();
    }
)

function gameStart() {
    scoreCount.innerText = 0;
    timeUp = false;
    tally = 0;
    showMole();
    setTimeout(() => timeUp = true, 10000)
}

function hit(e) {
    console.log(e)
    if (!e.isTrusted) return;  //Return the score if event is created by user interaction
    tally++
    e.target.parentNode.classList.remove("moleUp");
    scoreCount.textContent = tally;
}

moles.forEach(mole => mole.addEventListener('click', hit));


function gameStart() {
    scoreCount.innerText = 0;
    timeUp = false;
    tally = 0;
    showMole();
    setTimeout(() => timeUp = true, 10000)
}
