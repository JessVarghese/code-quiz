var startButton = document.getElementById("start-btn");
var countDown = document.getElementById("timer");
var qTwo = document.getElementById("answer-1");
var qThree = document.getElementById("answer-2");
var qFour = document.getElementById("answer-3");
var qFive = document.getElementById("answer-4");

var wrong = document.getElementsByClassName("wrong");
var correct = document.getElementsByClassName("correct");




startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", questionOne);
qTwo.addEventListener("click", questionTwo);
qThree.addEventListener("click", questionThree);
qFour.addEventListener("click", questionFour);
qFive.addEventListener("click", questionFive);





//Function for when the user clicks the button to start the quiz
let time =90;
let timerMinutes = time * 60;
let timer = timerMinutes /60;

function startTimer() {
  startButton
  let timer = setInterval(() => {
    countDown.innerHTML = "Timer: " + time;
    // time--;
    if (time<= -1) {
      clearInterval(timer);
  }
    
  }, 90)

  
};

function questionOne() {
  document.querySelector(".question-1").style.display="block"
  // console.log("This is the DOM query selector value " + JSON.stringify(questionOne))
  
  document.querySelector(".intro-container").style.display="none"

  if (wrong) {
    return (timer - 10);
  }

  if (qTwo===correct) {
    return (timer + 5);
  }

};
    


function questionTwo() {
  
  document.querySelector(".question-2").style.display="block"
  document.querySelector(".question-1").style.display="none"
};



function questionThree() {
  
  document.querySelector(".question-3").style.display="block"
  document.querySelector(".question-2").style.display="none"
};



function questionFour() {
  
  document.querySelector(".question-4").style.display="block"
  document.querySelector(".question-3").style.display="none"
};



function questionFive() {
  
  document.querySelector(".question-5").style.display="block"
  document.querySelector(".question-4").style.display="none"

};

// function endGame() {

// }




// 1. I want to setup a page that allows the user to start the quiz and prompt the first of 5 quiz questions that starts the timer.
// 1.	When a user answers each question they will be alerted if the answer is correct or not. Correct points will add points while incorrect answers will reduce the timer by 10 secs.
// 2.	When the player completes the quiz they are prompted with adding their name to the scoreboard and seeing a list of high scores.
// 3.	The player can click on “view high scores“to see how they compare to other players


