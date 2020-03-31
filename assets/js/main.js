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
const callout = document.getElementById('callout');
const quiz = document.getElementById('quiz');
const startQuiz = document.getElementById('start-quiz');
const quizSubmit = document.getElementById('quizSubmit');
const finishQuiz = document.getElementById('finishQuiz');
const nextQuestion = document.getElementById('nextQuestion');
const scoreContainer = document.getElementById('score-container');
const gameOver = document.getElementById('gameOver');
const finalScore = document.getElementById('finalScore');
const scoreComment = document.getElementById('scoreComment');
const restartQuiz = document.getElementById('restartQuiz');

// QUIZ QUESTIONS

const myQuestions = [
    {
        question: "Starting with the most put these countries in order of total population",
        answers: [
            { "correct_order": 4, "details": "Ireland" },
            { "correct_order": 1, "details": "United States" },
            { "correct_order": 2, "details": "Russia" },
            { "correct_order": 0, "details": "China" },
            { "correct_order": 3, "details": "United Kingdom" }
        ]
    },
    {
        question: "Starting with the most put these countries in order of size",
        answers: [
            { "correct_order": 2, "details": "Australia" },
            { "correct_order": 4, "details": "Ireland" },
            { "correct_order": 3, "details": "Mexico" },
            { "correct_order": 1, "details": "Canada" },
            { "correct_order": 0, "details": "Russia" }
        ]
    },
    {
        question: "Starting with the most put these languages in order of most spoken",
        answers: [
            { "correct_order": 1, "details": "English" },
            { "correct_order": 2, "details": "Hindustani" },
            { "correct_order": 4, "details": "Arabic" },
            { "correct_order": 0, "details": "Mandarin Chinese" },
            { "correct_order": 3, "details": "Spanish" }

        ]
    }
]
// let myQuestionsRandom = [];

// BUILD QUIZ FUNCTION

startQuiz.onclick = function () { buildQuiz() };

let counter = 0;

function buildQuiz() {
    callout.classList.add("d-none");
    quiz.classList.remove("d-none");
    // for(let i in myQuestions) {
    //     let randomIndex = Math.floor(Math.random() * myQuestions.length);
    //     while(myQuestionsRandom.includes(myQuestions[randomIndex])) {
    //         randomIndex = Math.floor(Math.random() * myQuestions.length)
    //     }
    //     myQuestionsRandom[i] = myQuestions[randomIndex];
    // }
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

let overallScore = 0;

quizSubmit.onclick = function () { checkAnswer() };

function checkAnswer() {
    quizSubmit.classList.add("d-none");
    if (counter >= myQuestions.length - 1) {
        finishQuiz.classList.remove("d-none");
    } else {
        nextQuestion.classList.remove("d-none");
    }
    let score = 0;
    let correctAnswer;
    let answers = document.querySelectorAll(".answer")
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < myQuestions[counter].answers.length; j++) {
            console.log(myQuestions[counter].answers[j].correct_order);
            if (myQuestions[counter].answers[j].correct_order == i) {
                correctAnswer = myQuestions[counter].answers[j]
                console.log(correctAnswer)

            }
        }
        let correctAnswers = (answers[i].innerHTML == correctAnswer.details)
        if (correctAnswers) {
            console.log("correct")
            $(answers[i]).addClass('green-border');
            setTimeout(function () {
                $(answers[i]).removeClass('green-border');
            }, 2000);
            score++;
            overallScore++;

        } else {
            console.log("incorrect")
            answers[i].classList.add("red-border");
            setTimeout(function () {
                $(answers[i]).removeClass('red-border');
            }, 2000);
        }
        scoreContainer.classList.remove("d-none")
        scoreContainer.innerHTML = `SCORE: ${score}/5`;
    }
};

// NEXT QUESTION FUNCTION

nextQuestion.onclick = function () { nextButton() };

function nextButton() {
    if (counter >= myQuestions.length) {
        counter = 0;
        return;
    }
    counter++;
    buildQuiz();
    scoreContainer.classList.add("d-none")
    nextQuestion.classList.add("d-none");
    quizSubmit.classList.remove("d-none");
};

// FINISH QUIZ FUNCTION

finishQuiz.onclick = function () { finishButton() };

function finishButton() {
    quiz.classList.add("d-none");
    gameOver.classList.remove("d-none");
    finalScore.innerHTML = `Score: ${overallScore}/${5*myQuestions.length}`;
    if(overallScore < 6) {
        scoreComment.innerHTML = `Oh dear, I think we need to make an easier version for you. You may also need to buy yourself an atlas!`
    } else if (overallScore > 5 && overallScore < 10) {
        scoreComment.innerHTML = `Well, that was ok but I think you can do better. Stop binging on Netflix and try some National Geographic!`
    } else {
        scoreComment.innerHTML = `Well done. Someone has been spying on the whole world! Don't worry, your secret is safe with me.`
    }
} 


// restartQuiz.onclick = function () { tryAgain() };
// function tryAgain() {
//     gameOver.classList.add("d-none");
//     counter = ++counter % myQuestions.length;
//     buildQuiz();
// }




console.log(overallScore);
console.log("Question length = " + myQuestions.length);
console.log("Hello2222!");