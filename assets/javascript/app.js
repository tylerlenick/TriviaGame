//globat variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var answers = [];
var timer = 30; 
var timerRunning = false;


//Declare questions object




//Declare functions

function calAnswers() {

    console.log("it works");
    answers.push($("input:radio[name='q1']:checked").val());
    answers.push($("input:radio[name='q2']:checked").val());
    answers.push($("input:radio[name='q3']:checked").val());
    answers.push($("input:radio[name='q4']:checked").val());
    answers.push($("input:radio[name='q5']:checked").val());
    answers.push($("input:radio[name='q6']:checked").val());
    answers.push($("input:radio[name='q7']:checked").val());
    answers.push($("input:radio[name='q8']:checked").val());
    answers.push($("input:radio[name='q9']:checked").val());
    answers.push($("input:radio[name='q10']:checked").val());

    for (var i=0; i < answers.length; i++) {

        if (answers[i] === "1") {
            correct++;

        } else if (answers[i] === "0") {
            incorrect++;

        } else {
            unanswered++;
        }

    };

    $('#txt-area').hide();
    $("#score-area").show();

    $('#correct-txt').text("Correct: " + correct);
    $('#incorrect-txt').text("Incorrect: " + incorrect);
    $('#unanswered-txt').text("Unanswered: " + unanswered);

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

        alert("Times Up!");
        timerStop();
        calAnswers();
     

    }
}

function newGame() {

    $(".q").prop('checked', false);
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    timer = 30;
    $("#score-area").hide();
    $('#txt-area').show();
    answers = [];
    timerStart();
    
    
}



//Declare on click events

