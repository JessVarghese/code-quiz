var wrongAnswer = -10

var startButton = document.getElementById("start-btn");
var countDown = document.getElementById("timer");

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", nextQuestion);

//Function for when the user clicks the button to start the quiz

function startQuiz() {
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


function nextQuestion() {
   var question = document.createElement("button")
   buttonEl.className = "answer"
   buttonEl.textContent = "Answer 1"
   question.appendChild(buttonEl);

  };



//function for Question One

//Function for Question Two

//Function for Question Three

//Function for Question Four

//Function for Question Five

//Function to end Game

// //I want to setup a page that allows the user to start the quiz and prompt the first of 5 quiz questions that starts the timer.
// 1.	When a user answers each question they will be alerted if the answer is correct or not. Correct points will add points while incorrect answers will reduce the timer by 10 secs.
// 2.	When the player completes the quiz they are prompted with adding their name to the scoreboard and seeing a list of high scores.
// 3.	The player can click on “view high scores“to see how they compare to other players