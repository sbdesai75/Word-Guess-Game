// JavaScript Document
var $ = function (id) {
    return document.getElementById(id); //?
}

//declare and initiate array
var game = ["Prince", "Madonna", "Sting", "Genesis", "Ratt",]
var choice = Math.floor(Math.random()*5);
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output="";
var userLetter="";

var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    $("game").innerHTML = output; //?
    output ="";
}

alert(answer);

var submit = function()
{

    output = "";
    userLetter=$("letter").value; //?
    $("letter").value = "";

    for (var i=0; i< answer.length; i++) {
        alert(letters[i]);
        if (user.Letter.toUpperCase() == letters[i]) { //
            display[i] = userLetter.toUpperCase(); 
            win--;
        }
            output = output + display[i] + " ";
    }
    document.getElementById("game").innerHTML = output; //?
    output="";
    attempsLeft--;

    if (win < 1)
    {
        document.getElementById("guesses").innerHTML = "YOU WIN!!!";  //?
    }
    else if (attemptsLeft < 1);
    {
        document.getElementById("guesses").innerHTML = "YOU LOSE!!!"; //?
    }

}

window.onload = function()
{
    setup();
    $("submit").onclick = submit; //
}

