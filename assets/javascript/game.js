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
//var wordList = ["aaaeee", "aeaeaeae", "iiiioooo", "iooiiooiio"]
var wordList = ["adon", "birdie", "eagle", "geki", "gen", "joe", "ken", "lee", "mike", "retsu", "ryu", "sagat", "akuma", "balrog", "blanka", "cammy", "chun-li", "deejay", "dhalsim", "e.honda", "feilong", "guile", "m.bison", "t.hawk", "vega", "zangief", "cody", "dan", "kage", "guy", "ingrid", "karin", "maki", "nash", "r.mika", "rolento", "rose", "sakura", "sodom", "alex", "dudley", "elena", "gill", "hugo", "ibuki", "makoto", "necro", "oro", "q", "remy", "sean", "twelve", "urien", "yun", "yang", "abel", "c.viper", "decapre", "elfuerte", "gouken", "hakan", "juri", "oni", "poison", "rufus", "seth", "abigail", "ed", "f.a.n.g.", "falke", "g", "kolin", "laura", "menat", "necalli", "rashid", "zeku"]
var rand = 1



//Pick random word from word list
var secretWord = wordList[Math.floor(Math.random() * wordList.length)];

//Split secretWord into Array
var secretArray = secretWord.split("")

// pressed key Event
document.onkeyup = function(event) {
    //play random sound
    randomsfx()
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
                if (correctGuess == 0) {
                    currentGuess = currentGuess.toUpperCase()
                }

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
                currentGuess = currentGuess.toLowerCase()
                

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
            youwin()
            winCount = winCount +1
            winCounter.innerHTML = winCount 
            setTimeout(function() {reset();}, 6000)
        }
        if (guessRemain == 0) {
            youlose()
            //alert("You lose!")
            lossCount = lossCount +1
            lossCounter.innerHTML = lossCount 
            setTimeout(function() {reset();}, 6000)
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
randommusic()
secretWord = wordList[Math.floor(Math.random() * wordList.length)];
document.getElementById("screen").src = "assets/images/none.png";
document.getElementById("screen").className = "hidden";
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

//Sound Effects

var clicksound = [
    "assets/sound/sfx/SE_00007.wav",
    "assets/sound/sfx/SE_00008.wav",
    "assets/sound/sfx/SE_00009.wav",
    "assets/sound/sfx/SE_00010.wav",
    "assets/sound/sfx/SE_00011.wav",
    "assets/sound/sfx/SE_00012.wav",
    "assets/sound/sfx/SE_00013.wav",
    "assets/sound/sfx/SE_00024.wav",
    "assets/sound/sfx/SE_00025.wav",
    "assets/sound/sfx/SE_00026.wav",
    "assets/sound/sfx/SE_00027.wav",
    "assets/sound/sfx/SE_00069.wav"
]

function randomsfx() {
    var rand = Math.floor(Math.random() * clicksound.length);
    document.getElementById("sfx1").src = clicksound[rand]
    document.getElementById("sfx1").play()
}

//Music

var musicplay = [
    "assets/sound/music/Balrog.mp3",
    "assets/sound/music/Blanka.mp3",
   "assets/sound/music/Chun.mp3",
   "assets/sound/music/Guile.mp3",
   "assets/sound/music/Honda.mp3",
   "assets/sound/music/Ken.mp3",
    "assets/sound/music/Vega.mp3",
    "assets/sound/music/Zangief.mp3"
]

function randommusic() {
    var rand = Math.floor(Math.random() * musicplay.length);
    document.getElementById("music").src = musicplay[rand]
    document.getElementById("music").play()
}

document.body.onclick = function() {randommusic()};

//win screens and sound
function youwin() {
    var winscreen = "assets/images/youwin.png"
    var winsound = "assets/sound/sfx/Youwin.wav"
    document.getElementById("screen").classList.remove("hidden")
    document.getElementById("screen").src = winscreen
    document.getElementById("music").pause()
    document.getElementById("music").src = winsound
    document.getElementById("music").play()
}

//loss screens and sound
function youlose() {
    var losescreen = ["assets/images/gameover1.png", "assets/images/gameover2.png", "assets/images/gameover3.png", "assets/images/gameover4.png", "assets/images/gameover5.png", "assets/images/gameover6.png"]
    var losesound = "assets/sound/sfx/YouLose2.wav"
    var rand = Math.floor(Math.random() * losescreen.length);
    document.getElementById("screen").classList.remove("hidden")
    document.getElementById("screen").src = losescreen[rand]
    document.getElementById("music").pause()
    document.getElementById("music").src = losesound
    document.getElementById("music").play()
}