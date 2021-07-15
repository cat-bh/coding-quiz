var countdown = 100;
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var welcomeContent = document.getElementById("welcome-content");

var questionarray = [
    {
        question: "question1",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option"
    },
    {
        question: "question1",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option"
    },
    {
        question: "question1",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option"
    },
    {
        question: "question1",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option"
    }
];

var displayQuestion = function(index) {

};

var quizOver = function() {
    //display score and ask for initials
}


startButton.addEventListener("click", function() {
    welcomeContent.remove();
    var timeLeft = setInterval(function() {
        countdown--;
        console.log(countdown);
        timer.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timeLeft);
            quizOver();
        }
    }, 1000);
    displayQuestion(0);
})

