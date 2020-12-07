$(document).ready(
    function () {

//add word array
var randomWordArray = ("cat","dog","water","fish","carpenter","plumber","designer","gardener","earth","bird","car","train");

//choose random word
var randomWord = randomWordArray(Math.floor(Math.random));

var a;
var count =0;
var answerArray = [];
        //fills answer array with underscores to guess

        function startGame() {
            for (var i = 0; i< randomWord.length; i++){
                answerArray[i] ="_";
            }
        }
//puts answer in a string
        a = answerArray.join(" ");
        document.getElementById("answer").innerHTML = a;
    })
//User input for the letter
    function Letter(){
        var letter = document.getElementById("letter").value;
        //For the user's guess with the letter
        if (letter.length > 0) {
            for (var a = 0; a < randomWord.length; a++){
                if (randomWord[a] === letter){
                    answerArray[a] = letter;
                }
            }
            count++;
            document.getElementById("counter").innerHTML = "Number of Guesses" + count;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
        //Game Over if over 6 guesses
        if(count>6)
        {document.getElementById("wrong").innerHTML = "Game Over, Try Again"}}

