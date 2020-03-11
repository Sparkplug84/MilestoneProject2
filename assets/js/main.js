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
        answers: {
            5: "Ireland",
            2: "United States",
            3: "Russia",
            1: "China",
            4: "United Kingdom"            
        },
        correctOrder: "1, 2, 3, 4, 5"
    },
    {
        question: "Starting with the most put these countries in order of size",
        answers: {
            2: "Canada",
            5: "Ireland",
            3: "Australia",
            4: "Mexico",
            1: "Russia"
        },
        correctOrder: "1, 2, 3, 4, 5"
    }
]

$(".game-start").click(function buildQuiz() {

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            for(number in currentQuestion.answers){
                answers.push(
                    quizQuestion.innerHTML = question,
                    answerOne.innerHTML = answers('1'),
                    answerTwo.innerHTML = answers('2'),
                    answerThree.innerHTML = answers('3'),
                    answerFour.innerHTML = answers('4'),
                    answerFive.innerHTML = answers('5')
                )
            }
        }
    )
})