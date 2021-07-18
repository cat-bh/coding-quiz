// update score array
// download current high score list and most recent score
// iterate through array until the score isn't as high
// push all scores onto a new array and upload to local storage

// load scores on page

var listContainerEl = document.querySelector(".highscore-container")

var loadHighscore = function() {
    var highscores = localStorage.getItem("highscores");

    if (!highscores){
        return false;
    };
    highscores = JSON.parse(highscores);

    var listEl = document.createElement("ul");
    

    for (var i = 0; i < highscores.length; i++) {
        var name = highscores[i].name;
        var score = highscores[i].score;

        var listItem = document.createElement("li");
        listItem.textContent = (i + 1) + ". " + name + " - " + score;
        listEl.appendChild(listItem);
    };

    listContainerEl.appendChild(listEl);
};

loadHighscore();

document.getElementById("clear-scores").addEventListener("click", function() {
    localStorage.setItem("highscores", "");
    document.querySelector(".highscore-container ul").remove();
});