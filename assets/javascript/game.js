$(document).ready(function(){

var redRupee = 0;
var greenRupee = 0;
var purpleRupee = 0;
var blueRupee = 0;
var wins = 0;
var losses = 0;
var target = 0;
var score = 0;
var game = false;

scoreFunction ();

function scoreFunction(){
    $("#userWins").html(wins);
    $("#userLosses").html(losses);
    $("#targetScore").html(target);
    $("#currentScore").html(score);
}
$("#start").click(function(){
    if (game == false){
    target = Math.floor((Math.random() * 101) + 19);
    redRupee = Math.floor((Math.random() * 12) + 1);
    blueRupee = Math.floor((Math.random() * 12) + 1);
    purpleRupee = Math.floor((Math.random() * 12) + 1);
    greenRupee = Math.floor((Math.random() * 12) + 1);
    $("#result").html("");
    score = 0;
    console.log(blueRupee);
    scoreFunction();
    game = true;
    }
});
$("#blue").click(function(){
    if (game == true){
    score += blueRupee;
    scoreCheck();
    scoreFunction();
    }
});
$("#red").click(function(){
    if (game == true){
    score += redRupee;
    scoreCheck();
    scoreFunction();
    }
});
$("#purple").click(function(){
    if (game == true){
    score += purpleRupee;
    scoreCheck();
    scoreFunction();
    }
});
$("#green").click(function(){
    if (game == true){
    score += greenRupee;
    scoreCheck();
    scoreFunction();
    }
});
function scoreCheck(){
    if (score == target){
        wins++;
        $("#result").html("You Win!")
        game = false;
    }else if (score > target){
        losses++;
        $("#result").html("You Lose...")
        game = false;
    }
} 
});