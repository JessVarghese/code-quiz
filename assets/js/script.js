let intro = document.querySelectorAll("intro-container");

let quizContainerEl = document.querySelectorAll("quiz-container");

//Countdown
var timerEl = document.getElementById("countdown");

//Start Button
let btn = document.getElementById("start-btn");

//trigger the start button to start the timer
btn.addEventListener("click", countdown);

//trigger start of qame/questions
btn.addEventListener("click", startGame);



//Quiz questions array
let quiz = [
  {
    question: "How can you get the type of arguments passed to a function?",
    choices: [
      "Using typeof operator",
      "Using getType function",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is correct about callbacks?",
    choices: [
      "A callback is a plain JavaScript function passed to some method as an argument or option.",
      "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which built-in method returns the calling string value converted to lower case?",
    choices: [
      'toLowerCase()',
      'toLower()',
      'changeCase(case)',
      'None of the above'
    ],
    correctAnswer: 0,
  },
];

// Timer that counts down from 60sec
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "Game Over";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}



//START GAME

function startGame() {
  //hides the intro container
  document.querySelector(".intro-container").style.display = "none";

  //displays the first question
  document.querySelector(".quiz-container").style.display = "block";

  showQuestions();
}



//Function to trigger question array
function showQuestions(quiz) {
  //iterate through each question

  for (var i = 0; i < quiz.length; i++) {
    //Questions
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = quiz[i].question;
 let choices = document.querySelectorAll(".choices");
    // choices.textContent = quiz[i].choices;
   

    choices.forEach(function (element, index) {
      element.textContent = choices[i];

       // Answers
   

    // let answBtn = document.querySelectorAll('#answBtn')
    let answerAlert = document.getElementById("answAlert");

      element.addEventListener("click", function () {
        if (quiz.correctAnswer === index) {
          answerAlert.textContent = "Correct Answer!";
          console.log("correct!!!");
        } else {
          answerAlert.textContent = "Wrong Answer!";
          console.log("wrong!!!");
        }
      });
    });
  }
}
showQuestions(quiz);





//Score function

// function highScore() {

 let submitBtn= document.getElementById('submitBtn')

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();


    let userName = document.getElementById('#first-name')
  
    var user = firstNameInput.value.trim()
      
  // let score = document.getElementById("high_score");
  // score.textContent = "Score" + timeLeft;

  
// set new submission to local storage 
localStorage.setItem("user", JSON.stringify(user));


// added this in

userName.innerHTML = '<h4>'+ localStorage.getItem("user", JSON.stringify(user)) + '</h4>'
  


  })
  

  
// }
