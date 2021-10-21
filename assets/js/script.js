
var startButton = document.getElementById("start-btn");
var countDown = document.getElementById("timer");
var answerButton = document.getElementById("answer");



startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", questionOne);


//Function for when the user clicks the button to start the quiz
let time =90;
let timerMinutes = time * 60 * 60;
let timer = timerMinutes /60;

function startTimer() {
  startButton
  let timer = setInterval(() => {
    countDown.innerHTML = "Timer: " + time;
    time--;
    if (time<= 0) {
      clearInterval(timer);
  }
    
  }, 90)

  
};

function questionOne() {
  document.querySelector(".question-1").style.display="block"
  // console.log("This is the DOM query selector value " + JSON.stringify(questionOne))
  
  document.querySelector(".intro-container").style.display="none"

}



// 1. I want to setup a page that allows the user to start the quiz and prompt the first of 5 quiz questions that starts the timer.
// 1.	When a user answers each question they will be alerted if the answer is correct or not. Correct points will add points while incorrect answers will reduce the timer by 10 secs.
// 2.	When the player completes the quiz they are prompted with adding their name to the scoreboard and seeing a list of high scores.
// 3.	The player can click on “view high scores“to see how they compare to other players