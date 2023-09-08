var factor;
var operation;
function startGame() {
    var name = document.getElementById("name").value;
    factor = parseInt(document.getElementById("factor").value);
    var numberOfProblems = parseInt(document.getElementById("numberOfProblems").value);
    operation = document.getElementById("operation").value;
    var questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = "";
    for (var i = 1; i <= numberOfProblems; i++) {
        var question = document.createElement("div");
        var correctAnswer = operation === "Addition" ? factor + i : factor * i;
        question.textContent = factor + (operation === "Addition" ? " + " : " × ") + i + " = ";
        var answerInput = document.createElement("input");
        answerInput.type = "number";
        answerInput.id = "answer" + i;
        question.appendChild(answerInput);
        var lineBreak = document.createElement("br");
        var lineBreak2 = document.createElement("br");
        question.appendChild(lineBreak);
        question.appendChild(lineBreak2);
        questionsDiv.appendChild(question);
    }
}
function startResult() {
    var numberOfProblems = parseInt(document.getElementById("numberOfProblems").value);
    var correctAnswers = 0;
    for (var i = 1; i <= numberOfProblems; i++) {
        var userAnswer = parseInt(document.getElementById("answer" + i).value);
        var correctAnswer = operation === "Addition" ? factor + i : factor * i;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    }
    var scoreText = "Secor : " + correctAnswers + "/" + numberOfProblems;
    document.getElementById("secor").textContent = scoreText;
}
