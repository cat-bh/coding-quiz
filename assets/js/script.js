var countdown = 100;
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var welcomeContent = document.getElementById("welcome-content");
var questionsContentEl = document.getElementById("questions");

var questionIndex = 0;

var questionarray = [
    {
        question: "question1",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option",
        correctAns: "2"
    },
    {
        question: "question2",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option",
        correctAns: "1"
    },
    {
        question: "question3",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option",
        correctAns: "4"
    },
    {
        question: "question4",
        answer1: "first option",
        answer2: "second option",
        answer3: "third option",
        answer4: "fourth option",
        correctAns: "3"
    }
];

// Creates the elements to display on the page
var displayQuestion = function(index) {

    questionsContentEl.innerHTML = "";

    // Create outer div to hold the question and answers
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "q-a-div";

    // Create question header
    var questionEl = document.createElement("h3");
    questionEl.textContent = questionarray[index].question;
    

    // Create the answer buttons
    var answer1El = document.createElement("button");
    answer1El.textContent = "1. " + questionarray[index].answer1;
    answer1El.className = "btn ans-btn";
    answer1El.setAttribute("data-answer-id", 1);

    var answer2El = document.createElement("button");
    answer2El.textContent = "2. " + questionarray[index].answer2;
    answer2El.className = "btn ans-btn";
    answer2El.setAttribute("data-answer-id", 2);

    var answer3El = document.createElement("button");
    answer3El.textContent = "3. " + questionarray[index].answer3;
    answer3El.className = "btn ans-btn";
    answer3El.setAttribute("data-answer-id", 3);

    var answer4El = document.createElement("button");
    answer4El.textContent = "4. " + questionarray[index].answer4;
    answer4El.className = "btn ans-btn";
    answer4El.setAttribute("data-answer-id", 4);


    // Add the question and answers to the container
    questionContainerEl.appendChild(questionEl);
    questionContainerEl.appendChild(answer1El);
    questionContainerEl.appendChild(answer2El);
    questionContainerEl.appendChild(answer3El);
    questionContainerEl.appendChild(answer4El);

    // Add it all to the screen
    questionsContentEl.appendChild(questionContainerEl);
};

// When an answer button is clicked
var buttonClickHandler =  function(event) {
    var targetElement = event.target;

    if (targetElement.matches(".ans-btn")) {
        var ansNum = targetElement.getAttribute("data-answer-id");
        var currentIndex = questionIndex;
        checkAns(ansNum, currentIndex);
        //display next question
        questionIndex++;
        console.log("index" + questionIndex);

        // Check if all questions have been asked
        if (questionIndex < questionarray.length) {
            displayQuestion(questionIndex);
        } else {
            quizOver();
        }
    
    } else {
        console.log("ooh we got a click, but not a button");
    }
};

var checkAns = function(ansNum, currentIndex) {
    console.log("in check answer function");
};

var quizOver = function() {
    //display score and ask for initials
};



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

questionsContentEl.addEventListener("click", buttonClickHandler);