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


// BUILD QUIZ FUNCTION

let myQuestionsRandom = [];
let counter = 0;

startQuiz.onclick = function () { buildQuiz() };
function randomiseQuestions() {
    // This function is used to put the myQuestions array in a random order by putting the array objects
    // into a new myQuestionsRandom array in a random order created by a randomIndex variable
    // This results in the order of the questions being randomised with every new game
    myQuestionsRandom = [];
    for (let i in myQuestions) {
        let randomIndex = Math.floor(Math.random() * myQuestions.length);
        while (myQuestionsRandom.includes(myQuestions[randomIndex])) {
            randomIndex = Math.floor(Math.random() * myQuestions.length)
        }
        myQuestionsRandom[i] = myQuestions[randomIndex];
    }
}
randomiseQuestions();

function buildQuiz() {
    // This function is used to push the question and answers from 
    // the new myQuestionsRandom array into the HTML quiz form
    callout.classList.add("d-none");
    quiz.classList.remove("d-none");

    quizQuestion.innerHTML = myQuestionsRandom[counter].question;
    answerOne.innerHTML = myQuestionsRandom[counter].answers[0].details;
    answerTwo.innerHTML = myQuestionsRandom[counter].answers[1].details;
    answerThree.innerHTML = myQuestionsRandom[counter].answers[2].details;
    answerFour.innerHTML = myQuestionsRandom[counter].answers[3].details;
    answerFive.innerHTML = myQuestionsRandom[counter].answers[4].details;
}
// SWITCH ANSWERS FUNCTION

let answerContainers = {
    "container1": answerOneContainer,
    "container2": answerTwoContainer,
    "container3": answerThreeContainer,
    "container4": answerFourContainer,
    "container5": answerFiveContainer,
};

function swapAnswersContainer(switchButton, container1, container2) {
    // This function is used to switch the position of the answers in the HTML quiz form
    // This 1 function is applied to all 4 switch buttons
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
    // This function will check if the answers are in the correct order after user input.
    // The first part of the function is to check if the last object in the array has been reached
    quizSubmit.classList.add("d-none");
    if (counter >= myQuestions.length - 1) {
        finishQuiz.classList.remove("d-none");
    } else {
        nextQuestion.classList.remove("d-none");
    }
    let score = 0;
    let correctAnswer;
    let answers = document.querySelectorAll(".answer");
    // The second part of the function is to iterate through the order of the answers after the user input and 
    // iterate through the order of the answers in myQuestionsRandom array
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < myQuestionsRandom[counter].answers.length; j++) {
            console.log(myQuestionsRandom[counter].answers[j].correct_order);
            if (myQuestionsRandom[counter].answers[j].correct_order == i) {
                correctAnswer = myQuestionsRandom[counter].answers[j];
                console.log(correctAnswer);

            }
        }
        let correctAnswers = (answers[i].innerHTML == correctAnswer.details);
        if (correctAnswers) {
            // This if statement adds a green or red border to the answers depending on whether they are correct or not
            console.log("correct");
            $(answers[i]).addClass('green-border');
            setTimeout(function () {
                $(answers[i]).removeClass('green-border');
            }, 2000);
            score++;
            overallScore++;

        } else {
            console.log("incorrect");
            answers[i].classList.add("red-border");
            setTimeout(function () {
                $(answers[i]).removeClass('red-border');
            }, 2000);
        }
        scoreContainer.classList.remove("d-none");
        scoreContainer.innerHTML = `SCORE: ${score}/5`;
    }
}

// NEXT QUESTION FUNCTION

nextQuestion.onclick = function () { nextButton() };

function nextButton() {
    // This function returns the whole loop back to the buildQuiz function, which will then display the second question
    // as the counter is incremented here by 1.
    if (counter >= myQuestions.length) {
        counter = 0;
        return;
    }
    counter++;
    buildQuiz();
    scoreContainer.classList.add("d-none");
    nextQuestion.classList.add("d-none");
    quizSubmit.classList.remove("d-none");
}

// FINISH QUIZ FUNCTION

finishQuiz.onclick = function () { finishButton() };

function finishButton() {
    // This function is for when the array of objects reaches the end. The overall score of all questions combined
    //  will be displayed here along with a comment depending on how good or bad the score is.
    $(window).scrollTop(0);
    quiz.classList.add("d-none");
    gameOver.classList.remove("d-none");
    finalScore.innerHTML = `Score: ${overallScore}/${5 * myQuestions.length}`;
    if (overallScore < 6) {
        scoreComment.innerHTML = `Oh dear, I think we need to make an easier version for you. You may also need to buy yourself an atlas!`;
    } else if (overallScore > 5 && overallScore < 10) {
        scoreComment.innerHTML = `Well, that was ok but I think you can do better. Stop binging on Netflix and try some National Geographic!`;
    } else {
        scoreComment.innerHTML = `Well done. Someone has been spying on the whole world! Don't worry, your secret is safe with me.`;
    }
}


restartQuiz.onclick = function () { tryAgain() };
function tryAgain() {
    // When the final score is revealed the option will appear to try again immediately. This was achieved by resetting
    // the counter ad averallScore and initialising the randomiseQuestions and buildQuiz functions again.
    gameOver.classList.add("d-none");
    counter = 0;
    overallScore = 0;
    randomiseQuestions();
    buildQuiz();
    scoreContainer.classList.add("d-none");
    nextQuestion.classList.add("d-none");
    quizSubmit.classList.remove("d-none");
    finishQuiz.classList.add("d-none");
}


/*jshint esversion: 6 */
