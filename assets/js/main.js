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
    quizQuestion.innerHTML = myQuestions[0].question;
    answerOne.innerHTML = myQuestions[0].answers[0].details;
    answerTwo.innerHTML = myQuestions[0].answers[1].details;
    answerThree.innerHTML = myQuestions[0].answers[2].details;
    answerFour.innerHTML = myQuestions[0].answers[3].details;
    answerFive.innerHTML = myQuestions[0].answers[4].details;
}

document.getElementById("switch1").addEventListener('click', () => {
  answerTwoContainer.appendChild(answerOneContainer.firstElementChild);
  answerOneContainer.appendChild(answerTwoContainer.firstElementChild);
});

document.getElementById("switch2").addEventListener('click', () => {
  answerThreeContainer.appendChild(answerTwoContainer.firstElementChild);
  answerTwoContainer.appendChild(answerThreeContainer.firstElementChild);
});

document.getElementById("switch3").addEventListener('click', () => {
  answerFourContainer.appendChild(answerThreeContainer.firstElementChild);
  answerThreeContainer.appendChild(answerFourContainer.firstElementChild);
});

document.getElementById("switch4").addEventListener('click', () => {
  answerFiveContainer.appendChild(answerFourContainer.firstElementChild);
  answerFourContainer.appendChild(answerFiveContainer.firstElementChild);
});

/* document.getElementById("down1").onclick = function() {switchElements()};

function switchElements() {
    answerTwoContainer.firstChild.append(answerOneContainer);
    /* answerOneContainer.firstChild.append(answerTwoContainer.firstChild); 
    $('#container1:first').appendTo( $('#container2') );
}*/

console.log("hello!");