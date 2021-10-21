
var startButton = document.getElementById("start-btn");
var countDown = document.getElementById("timer");
var questionContainerElement = document.getElementsByClassName("intro-container");


startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", questionOne);


//Function for when the user clicks the button to start the quiz

function startTimer() {
  startButton
  var sec = 90;
  timer = setInterval(() => {
    countDown.innerHTML = '00:'+sec;
    sec--;
    if (sec == -1) {
      clearInterval(timer);
  }
    
  }, 90)

  
};

function questionOne() {
  
  

}




// //I want to setup a page that allows the user to start the quiz and prompt the first of 5 quiz questions that starts the timer.
// 1.	When a user answers each question they will be alerted if the answer is correct or not. Correct points will add points while incorrect answers will reduce the timer by 10 secs.
// 2.	When the player completes the quiz they are prompted with adding their name to the scoreboard and seeing a list of high scores.
// 3.	The player can click on “view high scores“to see how they compare to other players