// The game: get random images from the imgs folder and let the user select which one is good and try not to click the bad one (based on the effect it has)
const items = document.querySelectorAll('.item');
const scoreBoard = document.querySelector('.score');
let option_1_img = "/imgs/paper.png";
let option_2_img = "/img/car.png";
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let lastitem;
let timeUp = false;
let score = 0;
function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min);
}

console.log(option1)


function startGame() {
scoreBoard.textContent = 0;
timeUp = false;
score = 0;

setTimeout(() => timeUp = true, 10000)
}

