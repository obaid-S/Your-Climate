// The game: get random images from the imgs folder and let the user select which one is good and try not to click the bad one (based on the effect it has)
// const items = document.querySelectorAll('.item');
const scoreBoard = document.querySelector('.score');
const startButton = document.getElementById("button");
const game_response = document.getElementById("game_response")
// all images to display in the game

//bad images
let option_1_img = "/bad_imgs/paper.png";
let option_2_img = "/bad_imgs/burning_coal.png";
let option_3_img = "/bad_imgs/car.png";
let option_4_img = "/bad_imgs/cigarette.png";
let bad_imgs = [option_1_img, option_2_img, option_3_img, option_4_img];

//good images
let option_5_img = "/good_imgs/bicycle.png";
let option_6_img = "/good_imgs/electric_car.png";
let option_7_img = "/good_imgs/tree.png";
let option_8_img = "/good_imgs/wind_turbine.png";
let good_imgs = [option_5_img, option_6_img, option_7_img, option_8_img];

// where the images go (into the tags)
let option1 = document.getElementById("option_1");
let option2 = document.getElementById("option_2");

let rounds = 0;
let goodUsedImgs = [];
let timeUp = false;
let score = 0;

function random(e) {
  return Math.floor(Math.random() * e.length)
}



function startGame() {
  startButton.disabled = true
  startButton.style.visibility = "hidden"

  scoreBoard.textContent = `Score: ${score}`;
  timeUp = false;
  score = 0;
  let randomNum = random(good_imgs);
  let randomNum2 = random(bad_imgs);
  option1.src = good_imgs[randomNum]
  option2.src = bad_imgs[randomNum]

  option1.addEventListener("click", function() {
      score++;
      goodImgs();
      badImgs();

  });

  option2.addEventListener("click", function() {
      score--;
      badImgs();
      goodImgs();
    
  });



  function badImgs() {
    rounds++;
    bad_imgs.splice(randomNum2, 1);
    randomNum2 = random(bad_imgs)
    console.log(bad_imgs.length)
    console.log(score);
    if(bad_imgs.length == 0){
      if(score >= 2){
        console.log("GOOD")
        game_response.innerHTML = "You performed admirably. You seem to be knowledgeable about climate change."
      }
      else if(score < 0){
        game_response.innerHTML = "You did not do so good, looks like you dont what climate change is but you can learn at <a href='https://climate.nasa.gov/' target='_blank' style='color: #b5c8ff;''>here</a>."
      }
      else{
        game_response.innerHTML = "Although you did well, you could have done much better. You don't seem to know a lot about climate change, learn more <a href='https://climate.nasa.gov/' target='_blank' style='color: #b5c8ff;''>here</a>."
      }
    }
    if (bad_imgs.length !== 0) {
      option2.src = bad_imgs[randomNum2];
    }
    else {
      option2.style.visibility = "hidden";
      option2.src = ''
    }
  }
  function goodImgs() {
    
    rounds++;
    good_imgs.splice(randomNum, 1);
    randomNum = random(good_imgs)
    console.log(good_imgs);
    scoreBoard.textContent = `Score: ${score}`;
    if (good_imgs.length !== 0) {
      option1.src = good_imgs[randomNum];
    }
    else {
      option1.style.visibility = "hidden";
      option1.src = ''
    }
  }

}

