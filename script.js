// VARIABLES 

var question = document.querySelector(".question");
var option = document.querySelector(".answer");
var multipleChoice = document.querySelector(".answer-list");
var index = 0;
var currentQuestion;


var quiz = [

{
    question: "Which of the following is not a programming language?",
    choices: ["Boolean", "Python", "JavaScript", "Java"],
},
{
    question: "What does SQL stand for?",
    choices: ["Structured Query Language", "Straight Query Language", "Separated Query Language"],
},
{
    question: "Which of the following are Javascript data types?",
    choices: ["Objects", "Strings", "Booleans", "All of the Above"],
},
{

    question: "Which of the following is correct about JavaScript?",
    choices: ["JavaScript is an Object-Based Language", "JavaScript is Assembly-Language", "JavaScript is an Object-Oriented Language", "JavaScript is a High-Level Language"],
},

{
    question: "Which of the following is not javascript data types?",
    choices: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
},

];

var questionPrompts = ["Which of the following is not a programming language?","What does SQL stand for?","Which of the following are Javascript data types?","Which of the following is correct about JavaScript?","Which of the following is not javascript data types?",];
var choices1 = ["Boolean", "Python", "JavaScript", "Java"];
var choices2 = ["Structured Query Language", "Straight Query Language", "Separated Query Language"];
var choices3 = ["Objects", "Strings", "Booleans", "All of the Above"];
var choices4 = ["JavaScript is an Object-Based Language", "JavaScript is Assembly-Language", "JavaScript is an Object-Oriented Language", "JavaScript is a High-Level Language"];
var choices5 = ["Null type", "Undefined type", "Number type", "All of the mentioned"];

// timer function

function timer() {
    var sec = 60;
    var timer = setInterval(function() {
        document.querySelector(".time-left").textContent ="Time Left" + sec;
        sec--;
        if (sec <0){
            clearInterval(timer);
            window.alert("Your Game Is Over");
        }
    }, 1000)
}

// timer function 60seconds  
function setQuizText() {
    question.textContent = questionPrompts;
    questionPrompts++;
}
option.addEventListener("click", function () {
    option.textContent = choices2;
    choices2++;
    setQuizText();
})

timer();