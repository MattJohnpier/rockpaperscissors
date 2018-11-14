// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    var userPick = $("input").val();
    var randomNumber = Math.random();
    var computerChoice;
    $("#userChoice").text(userPick);
    if (randomNumber < .333){
        computerChoice = "rock";
    } else if( (randomNumber > .333) && (randomNumber < .666) ){
        computerChoice = "paper";
    } else if (randomNumber > .666){
        computerChoice = "scissors";
    }
});

var computerChoice = "";
var winner = "";