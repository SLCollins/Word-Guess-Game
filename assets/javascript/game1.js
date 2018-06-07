//Global Variables
//======================================================

var wordBank = ["authentication", "backdoor", "certificate", 
"eavesdropping", "encryption", "firewall", "honeypot", "malware", "padlock", "phishing"];
var wordBankDefinitions = ["Authentication: "]
var wrongLetter = [];
var underScores = [];
var userGuess = [];
var remainingGuesses = 10;
var rightLetterCounter = 0;
var winCounter = 0;


//this chooses a random word from the word bank
function startGame(){
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('Random Word = ' + randWord);
    //this makes sure that each new game has ten guesses and doesn't carry over results from the last game
    underScores = [];
    remainingGuesses = 10;
    userGuess = [];
    rightLetterCounter = 0;

//this figures out how many underscores to display for the current word 
    for (var i = 0; i < randWord.length; i++)
    {
        underScores.push('_');
        document.querySelector('.underscore').innerHTML = underScores.join("");
    }
    console.log(underScores);
    //this displays the number of guesses left in the remaining guesses div
    document.querySelector('.remainingGuess').innerHTML = remainingGuesses.toString();
    //this displays the number of games the player has won while in the browser window
    document.querySelector('.numWins').innerHTML = winCounter.toString();
    //this resets the userGuesses to reflect the current game
    document.querySelector('.wrongGuess').innerHTML = userGuess;
}


//this keeps track of when you win or lose
function winLose() {
    if (rightLetterCounter === randWord.length)
    {
        document.querySelector('.underscore').innerHTML = underScores.join(" ");
        winCounter++;
        startGame();
    }
    else if (remainingGuesses === 0)
    {
        alert('Loser!');
        startGame();
    }
}

//this logs user guesses
document.onkeyup = function(event)
{
    userGuess = event.key;

//this finds if the user guess is a letter in the current word

    if (randWord.indexOf(userGuess) > -1) 
    {
        for(var i = 0; i < randWord.length; i++)
        {
            if (randWord[i] === userGuess)
            {
                underScores[i] = userGuess;
                console.log(underScores);
                document.querySelector('.underscore').innerHTML = underScores.join(" ");
                rightLetterCounter++;
                winLose();
                
            }

        }
    }    
    else 
    { 
        wrongLetter.push(userGuess);
        document.querySelector('.wrongGuess').innerHTML = wrongLetter
        console.log(wrongLetter);
        remainingGuesses--;
        document.querySelector('.remainingGuess').innerHTML = remainingGuesses.toString();
        winLose();
    }
}



startGame();