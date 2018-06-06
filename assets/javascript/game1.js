//Global Variables
//======================================================

var wordBank = ["Access Control", "Authentication", "Back Door", "Certificate", "Denial of Service Attack", 
"Eavesdropping", "Encryption", "Firewall", "Honey Pot", "Malware", "Man in the Middle Attack", "Padlock", "Phishing"];
var wrongLetter = [];
var rightLetter = [];
var underScores = [];
var userGuess = [];


//this chooses a random word from the word bank
function startGame(){
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('Random Word = ' + randWord);
//this figures out how many underscores to
// display for the current word    
    for (var i = 0; i < randWord.length; i++)
    {
        underScores.push('_');
    }
    console.log(underScores);
}
//this logs user guesses
document.onkeyup = function(event)
{
    userGuess = event.key;
    console.log(userGuess);

//this finds if the user guess is a letter in
//the current word
//this part is wrong because userGuess is a list but then you're
//not referencing an index point youre treating it like a single item list
    if (randWord.indexOf(userGuess) > -1) 
    {

        for(var i = 0; i < randWord.length; i++)
        {
            if randWord[i] === userGuess;
            {
                underScores[i] = userGuess;
            }
            console.log(underScores)
        }

        if(underScores.join('') == randWord) {
            alert('You Win!')
        }

    }
    else { 
        wrongLetter.push(userGuess)
        console.log(wrongLetter);
    }


}



startGame();