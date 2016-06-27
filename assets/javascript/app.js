// Video Game Trivia
// Kevin Haas 2016

//correct and incorrect guess functions that display image or point you to appropriate page with jQuery

// make correct and incorrect guesses flash green and red


var questionNumber = 0;
var usedQuestions = [];
var currentAnswer = [];
var currentGuess = [];

var correct = 0;
var incorrect = 0;
var gameOver = false;

var timer;
var countDown1 = setInterval(countDownClock, 1000);

var questions = {
    question1 : new QuestionAnswer("Who is Mario's Brother?","A:) Tony","B:) Frankie","C:) Luigi","D:) Vincenzo","Luigi"),
    question2 : new QuestionAnswer("Who is the Original Kong in 'Donkey Kong?","A:) Funky Kong","B:) Candy Kong","C:) Dixie Kong","D:) Cranky Kong","Cranky Kong"),
    question3 : new QuestionAnswer("What was SEGA's Last Console?","A:) Saturn","B:) Dreamcast","C:) Game Gear","D:) Gamecube","Dreamcast"),
    question4 : new QuestionAnswer("What Type of Processor Did the PS3 Have?","A:) Cell","B:) Celeron","C:) Pentium","D:) Quad Core","Cell"),
    question5 : new QuestionAnswer("What Chased Pac-Man?","A:) Monkeys","B:) Ghosts","C:) Clowns","D:) Bears","Ghosts"),
    question6 : new QuestionAnswer("Which 'Mario Kart' Power-Up Seeks Out the Racer in 1st Place?","A:) Banana Skin","B:) Bullet Bill","C:) Thunder Cloud","D:) Blue Shell","Blue Shell"),
    question7 : new QuestionAnswer("Sonic The Hedgehog's Sidekick is Named...","A:) Tails","B:) Bowser","C:) Eggman","D:) Skrim","Tails"),
    question8 : new QuestionAnswer("Who is Solid Snake's Twin Brother?","A:) Gaseous Snake","B:) Plasma Snake","C:) Liquid Snake","D:) Venom Snake","Liquid Snake"),
    question9 : new QuestionAnswer("Where was 'Tetris' Originally Developed?","A:) Russia","B:) Japan","C:) USA","D:) France","Russia"),
    question10 : new QuestionAnswer("Where did Gordon Freeman Work?","A:) Blue Ridge","B:) Black Mesa","C:) NASA","D:) Midgar","Black Mesa"),
}

$(document).ready(function introScreen() {
    $("#topMsg, #outputTitle, #textOutput").hide();
    $("#startBtn").html("Click Here To Start");
    $("#answerBoxA").append("A:) ");
    $("#answerBoxB").append("B:) ");
    $("#answerBoxC").append("C:) ");
    $("#answerBoxD").append("D:) ");

});



function QuestionAnswer(question, answerA, answerB, answerC, answerD, correctAnswer) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
    this.correctAnswer = correctAnswer;

    $("body").off('click').one("click", "#startBtn", function startGame() {
        $("#startBtn").fadeOut(1000);
        $("#topMsg").delay(1000).fadeIn(2000).html("Game Starts In ");
        timer = 5;
        setTimeout(gameLoop, 5000);
    });

//how can i randomize this?
    this.renderQuestion = function() {
        currentAnswer.push(this.correctAnswer);
        $("#startBtn, #questionBox, #answerBoxA, #answerBoxB, #answerBoxC, #answerBoxD").hide().empty();
        $("#questionBox").fadeIn(3000).html(this.question + "<hr");
        $("#answerBoxA").fadeIn(3000).append(this.answerA + "<hr>");
        $("#answerBoxB").fadeIn(3000).append(this.answerB + "<hr>");
        $("#answerBoxC").fadeIn(3000).append(this.answerC + "<hr>");
        $("#answerBoxD").fadeIn(3000).append(this.answerD);
    }
}

function gameLoop() {
    timer = 10;
    questionNumber++;
    $("#outputTitle").fadeIn(3000).html("Stats");
    $("#textOutput").fadeIn(3000).html("<div>" + "Correct: " + correct + "<br>" + "<div>" + "Incorrect: " + incorrect);
    $("#textOutput").html("<div>" + "Correct: " + correct + "<br>" + "<div>" + "Incorrect: " + incorrect);

    if (correct == 7) {
        $("#wrapper").hide();
        $("#winBadge").fadeIn(3000).html("u r teh 1337ness!1!");
    }

    if ( incorrect == 3) {
        $("#wrapper").hide();
        $("#loseBadge").fadeIn(3000).html("u r teh sux0r!1!!!12!");
    }


    if (questionNumber == 1) {
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question1.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxB, #answerBoxD", function() {
            $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxC", function() {
            $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });
    }

    if (questionNumber == 2) {
        setInterval(countDownClock, 1000);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question2.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxB, #answerBoxC", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 3) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question3.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxB", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 4) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question4.renderQuestion();

        $(document.body).one("click", "#answerBoxB, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxA", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 5) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question5.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxB", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 6) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question6.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxB, #answerBoxC", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 7) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question7.renderQuestion();

        $(document.body).one("click", "#answerBoxB, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxA", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });
    }

    if (questionNumber == 8) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question8.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxB, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxC", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 9) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question9.renderQuestion();

        $(document.body).one("click", "#answerBoxB, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxA", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

    if (questionNumber == 10) {
        clearInterval(countDown1);
        $("#startBtn").fadeOut(500);
        $("#topMsg, #clock").hide();
        $("#topMsg").fadeIn(3000).html("Time Remaining ");
        $("#clock").fadeIn(3000);
        questions.question10.renderQuestion();

        $(document.body).one("click", "#answerBoxA, #answerBoxC, #answerBoxD", function() {
            timer +=
                $("#topMsg").html("You're Wrong!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            incorrect++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

        $(document.body).one("click", "#answerBoxB", function() {
            timer +=
                $("#topMsg").html("You're Right!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            clearInterval(countDown1);
            correct++;

            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        });

    }

}

// set fadeout so the countdown pulses
function countDownClock() {

    for (var i = 0; i < 1; i++) {
        $("#clock").show().html(timer--);

// if statements for the clock
        if (timer <= -1 ) {
            clearInterval(countDown1);
            $("#topMsg").html("Out Of Time!");
            $("#clock").hide();
            $("#startBtn").html("Next Question").fadeIn(1000);
            $("body").off('click').one("click", "#startBtn", function() {
                gameLoop();
            });
        }
    }
}