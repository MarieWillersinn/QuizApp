let questions = [{
    "question": "Frage_1",
    "answer_1": "Antwort_1",
    "answer_2": "Antwort_2",
    "answer_3": "Richtige Antwort",
    "answer_4": "Antwort_4",
    "right_answer": 3
}, {
    "question": "Frage_2",
    "answer_1": "Antwort_1",
    "answer_2": "Richtige Antwort",
    "answer_3": "Antwort_3",
    "answer_4": "Antwort_4",
    "right_answer": 2
}, {
    "question": "Frage_3",
    "answer_1": "Antwort_1",
    "answer_2": "Antwort_2",
    "answer_3": "Antwort_3",
    "answer_4": "Richtige Antwort",
    "right_answer": 4
}, {
    "question": "Frage_4",
    "answer_1": "Antwort_1",
    "answer_2": "Richtige Antwort",
    "answer_3": "Antwort_3",
    "answer_4": "Antwort_4",
    "right_answer": 2
}, {
    "question": "Frage_5",
    "answer_1": "Richtige Antwort",
    "answer_2": "Antwort_2",
    "answer_3": "Antwort_3",
    "answer_4": "Antwort_4",
    "right_answer": 1
}];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';

        document.getElementById('amount-Of-Questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;

        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
    } else {


        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;


        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');

        AUDIO_SUCCESS.play();
        rightQuestions++;


    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();

}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_1').parentNode.classList.remove('bg-success')

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success')

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success')

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success')
}

function restartGame() {

    document.getElementById('cup-picture').style = 'display:none';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display:none';

    rightQuestions = 0;
    currentQuestion = 0;

    init();
}