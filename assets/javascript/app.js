//globat variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer; 
var timerRunning = false;


//Declare questions object

var questions = [

    {
        question: "Who said 'Nine companions. So be it. You shall be the fellowship of the ring.'?",
        choice: ["Elrond", "Gandolf", "Aragorn", "Celeborn"],
        answer: 0
    },

    {
        question: "How many Rings of Power were forged in the second age?",
        choice: ["1", "19", "20", "13"],
        answer: 2
    },

    {
        question: "What was Gollums hobbit nam?",
        choice: ["Deagol", "Bandobras", "Smeagol", "Tobold"],
        answer: 2
    },

    {
        question: "Who said 'I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve.'?",
        choice: ["Gandalf", "Merry", "Pippin", "Bilbo Baggins"],
        answer: 3
    },

    {
        question: "Who is Shelob?",
        choice: ["An ent that befriends Merry and Pippin", "A giant spider that tries to eat Frodo and Sam", "An elf queen", "Uruk hai leader"],
        answer: 1
    },

    {
        question: "Which hobbit stabs the Witch King?",
        choice: ["Frodo", "Merry", "Pippin", "Sam"],
        answer: 1
    },

    {
        question: "Who does Saruman nickname the Bird-whisperer",
        choice: ["Radagast", "Gandalf", "Legolas", "Sam"],
        answer: 0
    },

    {
        question: "Who stabs Saruman in the beginning the The Return of the King?",
        choice: ["Theoden", "Aragon", "Gandalf", "Wormtongue"],
        answer: 3
    },

    {
        question: "What is the name of the Balrog that ttack the fellowship in the Mines of Moria?",
        choice: ["Gothmog", "Bungo", "Lungorthin", "Durin's Bane"],
        answer: 3
    },

    {
        question: "What meal comes after elevensies for hobbits?",
        choice: ["Afternoon tea", "Dinner", "Luncheon", "Supper"],
        answer: 2
    },




];


//Declare functions

function timerStart() {

    if (!timerRunning) {
        
        intervalID = setInterval(countDown, 1000);
        timerRunning = true;

    }

}

function timerStop() {
    timerRunning = false;
    clearInterval(intervalID);
}


function countDown() {
    $("#timer").text(timer);
    timer--;


    if (timer === 0) {

        unanswered++;
        stop();

    }
}

function questionSelect() {
    randomNum = Math.floor(Math.random() * questions.length);
    randomQuestion = questions[randomNum];
    $("#answer-area").empty();

    $("#question-txt").text(randomQuestion.question)

    for (var i=o; i < randomQuestion.choice.length; i++){

        
    }


}


//Declare on click events

$(".answer-btn").on("click", function() {

    var answerValue = $(this).attr("data-num");

    if (answerValue = questions[x].answer) {
        
        correct++;
        $("#answer-area").text("Correct!");
        //Load next question.

    } else {

        incorrect++;
        $("#answer-area").text("Incorrect, the answer was " + questions[x].answer);
        //Load next question.
    }










});