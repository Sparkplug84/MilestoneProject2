/* Variables */

const quizQuestion = document.getElementById('question');
const answerOne = document.getElementById('ans1');
const answerTwo = document.getElementById('ans2');
const answerThree = document.getElementById('ans3');
const answerFour = document.getElementById('ans4');
const answerFive = document.getElementById('ans5');
const answerOneContainer = document.getElementById('container1');
const answerTwoContainer = document.getElementById('container2');
const answerThreeContainer = document.getElementById('container3');
const answerFourContainer = document.getElementById('container4');
const answerFiveContainer = document.getElementById('container5');

const myQuestions = [
    {
        question: "Starting with the most put these countries in order of total population",
        answers: [
            { "correct_order": 5, "details": "Ireland" },
            { "correct_order": 2, "details": "United States" },
            { "correct_order": 3, "details": "Russia" },
            { "correct_order": 1, "details": "China" },
            { "correct_order": 4, "details": "United Kingdom" }
        ]
    },
    {
        question: "Starting with the most put these countries in order of size",
        answers: [
            { "correct_order": 2, "details": "Canada" },
            { "correct_order": 5, "details": "Ireland" },
            { "correct_order": 3, "details": "Australia" },
            { "correct_order": 4, "details": "Mexico" },
            { "correct_order": 1, "details": "Russia" }
        ]
    }

]

document.getElementById("start-quiz").onclick = function () { buildQuiz() };

function buildQuiz() {
    document.getElementById("callout").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    quizQuestion.innerHTML = myQuestions[0].question;
    answerOne.innerHTML = myQuestions[0].answers[0].details;
    answerTwo.innerHTML = myQuestions[0].answers[1].details;
    answerThree.innerHTML = myQuestions[0].answers[2].details;
    answerFour.innerHTML = myQuestions[0].answers[3].details;
    answerFive.innerHTML = myQuestions[0].answers[4].details;    
};

let answerContainers = {
 "container1": answerOneContainer,
"container2": answerTwoContainer,
"container3": answerThreeContainer,
"container4": answerFourContainer,
"container5": answerFiveContainer,
}

function swapAnswersContainer(switchButton, container1, container2) {
    document.getElementById(switchButton).addEventListener('click', () => {
    $("#" + container1).children(":first").slideToggle('fast');
    $("#" + container2).children(":first").slideToggle('fast', function () {
        answerContainers[container2].appendChild(answerContainers[container1].firstElementChild);
        answerContainers[container1].appendChild(answerContainers[container2].firstElementChild);
    });
    $("#" + container1).children(":first").slideToggle('fast');
    $("#" + container2).children(":first").slideToggle('fast');
});
}

swapAnswersContainer("switch1", "container1", "container2");
swapAnswersContainer("switch2", "container2", "container3");
swapAnswersContainer("switch3", "container3", "container4");
swapAnswersContainer("switch4", "container4", "container5");




console.log("hello!");