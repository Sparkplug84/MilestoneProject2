// VARIABLES

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

// QUIZ QUESTIONS

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
    },
    {
        question: "Starting with the most put these languages in order of most spoken",
        answers: [
            { "correct_order": 2, "details": "English" },
            { "correct_order": 5, "details": "Arabic" },
            { "correct_order": 3, "details": "Hindustani" },
            { "correct_order": 4, "details": "Spanish" },
            { "correct_order": 1, "details": "Mandarin Chinese" }
        ]
    }
]

// BUILD QUIZ FUNCTION

document.getElementById("start-quiz").onclick = function () { buildQuiz() };

let counter = 0;

function buildQuiz() {
    document.getElementById("callout").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    quizQuestion.innerHTML = myQuestions[counter].question;
    answerOne.innerHTML = myQuestions[counter].answers[0].details;
    answerTwo.innerHTML = myQuestions[counter].answers[1].details;
    answerThree.innerHTML = myQuestions[counter].answers[2].details;
    answerFour.innerHTML = myQuestions[counter].answers[3].details;
    answerFive.innerHTML = myQuestions[counter].answers[4].details;    
};

// SWITCH ANSWERS FUNCTION

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

// CHECK ANSWERS FUNCTION

document.getElementById("quizSubmit").onclick = function () { checkAnswer() };

function checkAnswer() {
    document.getElementById("quizSubmit").classList.add("d-none");
    document.getElementById("nextQuestion").classList.remove("d-none");

    let score = 0;
    if (answerOneContainer.firstElementChild = myQuestions.answers.correct_order("1")) {
        document.getElementById("container1").classList.add("green-border")
    } else {
        document.getElementById("container1").classList.add("red-border")
    }
};

// NEXT QUESTION FUNCTION

document.getElementById("nextQuestion").onclick = function () { nextButton() };

function nextButton() {
    if (counter >= myQuestions.length) {
        counter = 0;
        return;
    }
    counter++;
    buildQuiz();
    document.getElementById("nextQuestion").classList.add("d-none");
    document.getElementById("quizSubmit").classList.remove("d-none");
};
