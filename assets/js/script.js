var countdown = 100;
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var welcomeContent = document.getElementById("welcome-content");
var questionsContentEl = document.getElementById("questions");

var score = 0;

var questionIndex = 0;

var questionarray = [
    {
        question: "question1",
        answer1: "first option",
        answer2: "Im right",
        answer3: "third option",
        answer4: "fourth option",
        correctAns: "2"
    },
    {
        question: "question2",
        answer1: "im right",
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
        answer4: "im right",
        correctAns: "4"
    },
    {
        question: "question4",
        answer1: "first option",
        answer2: "second option",
        answer3: "im right",
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

        var rightOrWrong = checkAns(ansNum, currentIndex);

        // Alert user whether their answer was right or wrong
        var response = document.createElement("div");
        response.textContent = rightOrWrong;
        response.className = "alert";
        document.querySelector("body").appendChild(response);
        setTimeout(function() {
            response.remove();
        }, 1500)

        //display next question
        questionIndex++;

        // Check if all questions have been asked
        if (questionIndex < questionarray.length) {
            displayQuestion(questionIndex);
        } else {
            // end quiz
            countdown = 1;
        }

    } else if (targetElement.matches("#save-score")) {
        event.preventDefault();
        var userInitial = document.getElementById("player-initials").value;
        
        localStorage.setItem("recentInitial", userInitial);
        localStorage.setItem("recentScore", score);

        location.href = "./highscore.html";
    }
};

// Check if user selected the correct answer
var checkAns = function(ansNum, currentIndex) {
    var correctAns = questionarray[currentIndex].correctAns;
    if (ansNum === correctAns) {
        console.log("Correct")
        score++;
        return "Correct!";
    } else {
        console.log("wrong");
        countdown = countdown - 9;
        return "Incorrect";
    }
};

var quizOver = function() {
    //display score and ask for initials
    questionsContentEl.innerHTML = "";
    console.log("game over" + score);

    var info = document.createElement("div");
    info.innerHTML = "<h3>Quiz Over! </h3> <span>Your final score is: " + score +"</span>";

    var saveScoreForm = document.createElement("form");
    saveScoreForm.className = "score-form";

    saveScoreForm.innerHTML = "<span>Enter initials:</span> <input type='text' name='player-initials' id='player-initials'/>" + 
    "<button id='save-score' class='btn'>Save Score</button>";

    questionsContentEl.appendChild(info);
    questionsContentEl.appendChild(saveScoreForm);
};



// event listeners
startButton.addEventListener("click", function() {
    welcomeContent.remove();
    var timeLeft = setInterval(function() {
        countdown--;
        
        timer.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timeLeft);
            quizOver();
        }
    }, 1000);
    displayQuestion(0);
})

questionsContentEl.addEventListener("click", buttonClickHandler);

