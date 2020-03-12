/* Variables */

const quizQuestion = document.getElementsByClassName('quiz-question');
const answerOne = document.getElementsByClassName('ans1');
const answerTwo = document.getElementsByClassName('ans2');
const answerThree = document.getElementsByClassName('ans3');
const answerFour = document.getElementsByClassName('ans4');
const answerFive = document.getElementsByClassName('ans5');

const myQuestions = [
    {
        question: "Starting with the most put these countries in order of total population",
        answers: [
            {"correct_order": 5, "details": "Ireland"},
            {"correct_order": 2, "details": "United States"},
            {"correct_order": 3, "details": "Russia"},
            {"correct_order": 1, "details": "China"},
            {"correct_order": 4, "details": "United Kingdom"}     
        ]
    },
    {
        question: "Starting with the most put these countries in order of size",
        answers: [
            {"correct_order": 2, "details": "Canada"},
            {"correct_order": 5, "details": "Ireland"},
            {"correct_order": 3, "details": "Australia"},
            {"correct_order": 4, "details": "Mexico"},
            {"correct_order": 1, "details": "Russia"}
        ]
    }
    
]

document.getElementById("start-quiz").onclick = function() {buildQuiz()};

function buildQuiz() {
    document.getElementById("callout").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    document.getElementById("question").innerHTML = myQuestions[0].question;
    document.getElementById("ans1").innerHTML = myQuestions[0].answers[0].details;
    document.getElementById("ans2").innerHTML = myQuestions[0].answers[1].details;
    document.getElementById("ans3").innerHTML = myQuestions[0].answers[2].details;
    document.getElementById("ans4").innerHTML = myQuestions[0].answers[3].details;
    document.getElementById("ans5").innerHTML = myQuestions[0].answers[4].details;
}
