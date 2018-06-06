//Global Variables
//======================================================

var wordBank = ["Access Control", "Authentication", "Back Door", "Certificate", "Denial of Service Attack", 
"Eavesdropping", "Encryption", "Firewall", "Honey Pot", "Malware", "Man in the Middle Attack", "Padlock", "Phishing"];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;

//Function for starting the game
//=======================================================

//this function picks a random word from the wordBank array
function startGame(){
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('Random Word = ' + randWord);
    for (var i = 0; i < randWord.length; i++)
    {
        underScores.push('_');
    }
    //This prints underscores to the screen
    document.getElementById('word-blanks').textContent = underScores.join(" ");
    console.log(underScores)
}

//reset
wrongLetter = [];
guessesLeft = 9;

function winLose()
{
    if (winCounter === randWord.length)
    {
        alert('Winner');
    }
    else if(guessesLeft === 0)
    {
        alert('Loser');
    }
}
//this logs the user guesses
document.onkeyup = function(event)
{
    userGuesses = event.key;
    //checking to see if the letter is in the word
    if(randWord.indexOf(userGuesses) > -1)
    {
        for(var i = 0; i < randWord.length; i++)
        {
            if randWord[i] === userGuesses;
            {
                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
                winLose();
            }
        }
    }
    else
    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
    }

}

//Main Game
startGame();