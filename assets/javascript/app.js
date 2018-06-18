//globat variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var rightAnswers = []
var timer = 10; 
var timerRunning = false;


//Declare questions object




//Declare functions

function onSubmit() {
    alert("its working");
}

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
    console.log(timer);
    timer--;


    if (timer === -1) {

       
        timerStop();

    }
}

function newGame() {
    $('#txt-area').show();
    timerStart();
}



//Declare on click events

