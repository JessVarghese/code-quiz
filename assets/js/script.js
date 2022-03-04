
//Countdown
var timerEl = document.getElementById("countdown");

//Start Button
let btn = document.getElementById("start-btn");

//trigger the start button to start the timer
btn.addEventListener("click", countdown);


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



// function startGame() {

// //Quiz Container
// document.getElementsByClassName("quiz-container").style.display="block"


// //intro container
// document.getElementsByClassName('intro-container').style.display="none"


// }


// function showQuestions(q) {
 
// //Questions
// let titleDiv = document.getElementById("title");

// titleDiv.textContent = q.question;

// //Answers
// let choices = document.querySelectorAll(".choices");
// console.log(choices);

// choices.forEach(function(element, index){
//   element.textContent= q.choices[index];


//   element.addEventListener('click', function(){
//     if (q.correctAnswer == index){
//       console.log('Correct!')
//     }
// else {
//   console.log('Wrong Answer!')
// }
//   })

// })

// }
// showQuestions(quiz)



