// Vars to control HTML Div Elements
var winCounter = document.getElementById("winCounter");
var guessCounter = document.getElementById("guessCounter");
var guessDisplay = document.getElementById("guessDisplay");
var currentWord = document.getElementById("currentWord");
var lossCounter = document.getElementById("lossCounter");

// Vars to control game logic
var allGuesses = [];
var guessUpdate = "";
var guessRemain = 10;
var wordDisplay = "";
var winValue = 0;
var winTest = 0;
var currentGuess =""
var winCount = 0
var lossCount = 0
var wordList = ["chicken", "cow", "birdie", "snow", "rent", "factory", "building", "display", "mortgage", "automobile"]

//Pick random word from word list
var secretWord = wordList[Math.floor(Math.random() * wordList.length)];

//Split secretWord into Array
var secretArray = secretWord.split("")

// pressed key Event
document.onkeyup = function(event) {
    //collects pressed key into var
    var currentGuess = event.key;
    //write bool to check if guess already exists
    var checkGuess = allGuesses.includes(currentGuess);
    //records guess into array for list of guesses
    allGuesses.push(currentGuess);
    //Do nothing if guess already exists
    if (checkGuess==true) {}
    //If guess doesn't exist...
    else {
        //update list of guesses
        guessUpdate = guessUpdate.concat(" ", currentGuess);
        //update HTML div with guess
        guessDisplay.innerHTML = guessUpdate;
        //check if current guess exists in secret word string
        //loop for size of array to catch duplicates
        var correctGuess = 0;

        for (z=0; z<secretArray.length; z++){
            var correctGuess = secretArray.indexOf(currentGuess)
            if (correctGuess != -1) {
                //Updates array revealing correct guess
                displayArray[correctGuess] = currentGuess;
                wordDisplay = displayArray.toString();
            
                //Strip out commas from "toString" conversion
                for (i=0; i<secretWord.length; i++){
                    wordDisplay = wordDisplay.replace(",", " ");
                }
                //Remove correct guess from Secret Array
                secretArray[correctGuess] = "9"
                guessRemain= guessRemain + 1;
                winTest = 0

                

                for (q=0; q<secretArray.length; q++) {
                    winTest = winTest + parseInt(secretArray[q])
                }

                
                
            }
            //Display revealed part of word
            currentWord.innerHTML = wordDisplay;
            winTest = parseInt(winTest)
        }
        if (correctGuess == -1) {
            guessRemain = guessRemain - 1;
            guessCounter.innerHTML = guessRemain;

        }
        if (winTest == winValue){
            alert("You win!")
            winCount = winCount +1
            winCounter.innerHTML = winCount 
            reset()
        }
        if (guessRemain == 0) {
            alert("You lose!")
            reset()
        }  
    }

}

//Secret Word Initializaton - sets to all dashes
for (i=0; i < secretWord.length; i++) {
    wordDisplay = wordDisplay.concat("_ ");
    winValue = winValue + 9;
}

//Display initialization
winCounter.innerHTML = winCount
lossCounter.innerHTML = lossCount
guessCounter.innerHTML = guessRemain
guessDisplay.innerHTML = guessUpdate

currentWord.innerHTML = wordDisplay;
//This array will be what updates with correct letters
//It should begin as all dashes
var displayArray = wordDisplay.split(" ");
//remove empty index
displayArray.pop();

function reset() {
allGuesses = [];
guessUpdate = "";
guessRemain = 10;
wordDisplay = "";
winValue = 0;
winTest = 0;
currentGuess = ""

secretWord = wordList[Math.floor(Math.random() * wordList.length)];

secretArray = secretWord.split("");

guessDisplay.innerHTML = "";

for (i=0; i < secretWord.length; i++) {
    wordDisplay = wordDisplay.concat("_ ");
    winValue = winValue + 9;
}
currentWord.innerHTML = wordDisplay;
//This array will be what updates with correct letters
//It should begin as all dashes
displayArray = wordDisplay.split(" ");
//remove empty index
displayArray.pop();
}