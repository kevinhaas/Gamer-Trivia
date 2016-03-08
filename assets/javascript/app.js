// Video Game Trivia
// Kevin Haas 2016

// id for each questions boxes div. link them to click functions that either take you to a correct or incorrect guess page and update the questionsCount,
// correct and incorrect counts.

//correct and incorrect guess functions that display image or point you to appropriate page with jQuery

var questionCount = 0;
var correct = 0;
var incorrect = 0;

var timer = 0;

var gameOver = false;

// var questionArray = [];

var questions = {
    question1 : new QuestionAnswer("Who is Mario's brother?","Tony","Frankie","Luigi","Vincenzo"),
    question2 : new QuestionAnswer("What console did 'Donkey Kong' originally release on?","N64","SNES","NES","GameBoy"),
    question3 : new QuestionAnswer("Question 3","Answer A","Answer B","Answer C","Answer D"),
    question4 : new QuestionAnswer("Question 4","Answer A","Answer B","Answer C","Answer D"),
    question5 : new QuestionAnswer("Question 5","Answer A","Answer B","Answer C","Answer D"),
    question6 : new QuestionAnswer("Question 6","Answer A","Answer B","Answer C","Answer D"),
    question7 : new QuestionAnswer("Question 7","Answer A","Answer B","Answer C","Answer D"),
    question8 : new QuestionAnswer("Question 8","Answer A","Answer B","Answer C","Answer D"),
    question9 : new QuestionAnswer("Question 9","Answer A","Answer B","Answer C","Answer D"),
    question10 : new QuestionAnswer("Question 10","Answer A","Answer B","Answer C","Answer D"),
}

$(document).ready(function introScreen() {
    $("#startBtn").html("Click Here To Start");
    $("#answerBoxA").append("A:) "); 
    $("#answerBoxB").append("B:) ");
    $("#answerBoxC").append("C:) ");
    $("#answerBoxD").append("D:) ");
        
});

// make a function to randomize the question order
function QuestionAnswer(question, answerA, answerB, answerC, answerD) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
    
// have game starts in and time remaining messages fade in
    $("body").off('click').one("click", "#startBtn", function startGame() {
    $("#startBtn").fadeOut(1000);
    $("#topMsg").fadeIn(4000).html("Game Starts In ");
    setInterval(countDownClock, 1000);
    timer = 5;
    setTimeout(gameLoop, 6000);
    });

function gameLoop() {
    timer = 6;
    questions.question1.renderQuestion();
    $("#topMsg").fadeIn(4000).html("Time Remaining ");
}
        
this.renderQuestion = function() {
    $("#questionBox").append(this.question);
    $("#answerBoxA").append(this.answerA); 
    $("#answerBoxB").append(this.answerB);
    $("#answerBoxC").append(this.answerC);
    $("#answerBoxD").append(this.answerD);
    }
}

// set fadeout so the coutndown pulses
function countDownClock() {
    for (var i = 0; i < 1; i++) {
        $("#clock").show().html(timer--);

// if statements for the clock
        if (timer <= -1) {
            $("#topMsg").html("Out Of Time!");
            $("#clock").html("&nbsp");
        }
    }
}
    

    // function gameStart() {
        
    // for(var i = 0; i < questions.length; i++){
    // questions[i].renderQuestion();

    //     }
    // }


// $("#startBtn").click(gameStart);  







