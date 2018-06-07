//still can't get the correct input letters to display in current word box



const maxTurns = 10

var wordBank = ["authentication", "backdoor", "certificate", 
"eavesdropping", "encryption", "firewall", "honeypot", "malware", "padlock", "phishing"];
var wordBankDefinitions = ["Authentication: The process for verifying that someone or something is who or what it claims to be. In private and public computer networks (including the internet), authentication is generally done with passwords. Source: http://www.ruleworks.co.uk/cgi-bin/TUaz.exe?Guide=Security&XL=A&t=Internet%20and%20Data%20Security%20Knowledgebase", 
"Backdoor: A loophole in a computer's security systems that allows a hacker to gain access. Source: https://www.cybersmile.org/internet-terminology", 
"Certificate: An encrypted file containing user or server identification information, which is used to verify a website owner's identity and to help establish a security-enhanced link. Source: https://www.cybersmile.org/internet-terminology", 
"Eavesdropping: Listening in to voice or data traffic without the knowledge or consent of the sender or recipient. Source: https://www.cybersmile.org/internet-terminology", 
"Encryption: The process of converting data into cipher text (a type of code) to prevent it from being understood by an unauthorised party. Source: https://www.cybersmile.org/internet-terminology", 
"Firewall: Hardware or software designed to prevent unauthorised access to a computer network over the internet. Source: https://www.cybersmile.org/internet-terminology", 
"Honeypot: A security feature built into a network, designed to lure hackers into meaningless locations to avoid harm to genuine, crucial data. Source: https://www.cybersmile.org/internet-terminology", 
"Malware: Software used or created by hackers to disrupt computer operation, g ather sensitive information, or gain access to private computer systems. Short for 'malicious software'. Source: https://www.cybersmile.org/internet-terminology",
"Padlock: A symbol in a web browser that indicates that an encrypted (SSL) connection is being used to communicate with a site that has a valid certificate. Normally accompanied by 'https' at the beginning of the address line. Source: https://www.cybersmile.org/internet-terminology",
"Phishing: A social engineering hack in which the actor attempts to trick a target into delivering access to the target's system. An example of this would be a spoofed e-mail message, which appears to come from a legitimate IP address belonging to a bank or major internet site. The e-mail requests the target enter their login and password or financial information. Spear phishing is the same type of approach, but with information targeting a specific individual or organization. Source: https://www.cybersmile.org/internet-terminology"]

var userGuessedLetters = [];
var answerGuess = [];
var remainingGuesses = 0
var winCounter = 0
var gameOver = false
 
//this function resets game variables
function gameReset(){
    remainingGuesses = maxTurns;
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Random Word = " + randWord);
    userGuessedLetters = [];
    answerGuess = [];

    for (var i = 0; i < randWord.length; i++) {
        answerGuess.push('_');
        console.log(answerGuess);
    } 
    updateDisplayContents();
};

function updateDisplayContents(){
    document.querySelector('.numWins').innerHTML = ("Wins: " + winCounter.toString());
    document.querySelector(".underscore").innerHTML = answerGuess.join("");
    document.querySelector(".remainingGuess").innerHTML = ("Remaining Guesses: " + remainingGuesses.toString());
    document.querySelector(".wrongGuess").innerHTML = ("Guessed Letters: " + userGuessedLetters);
};

function findLetter(letter){
    var letterPositions = [];
    for (var i = 0; i < randWord.length; i++) {
        if(randWord[i] === letter) {
            letterPositions.push(i);
        }
    }
    if (letterPositions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for(var i = 0; i < letterPositions.length; i++) {
            guessingWord[letterPositions[i]] = letter;
        }
    }
}

function userWinsRound() {
    if(answerGuess.indexOf("_") === -1) {
        winCounter++;
        gameOver = true;
    }
};

function userLosesRound() {
    if(remainingGuesses <=0) {
        gameOver = true;
    }
};

function fillAnswerGuess(letter) {
    if (remainingGuesses > 0) {
        // this makes sure we don't repeat letter guesses
        if (userGuessedLetters.indexOf(letter) === -1) {
            userGuessedLetters.push(letter);
            findLetter(letter);
        }
    }
    
};

document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(gameOver) {
        gameReset();
        gameOver = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            fillAnswerGuess(event.key.toUpperCase());
            updateDisplayContents();
            userWinsRound();
            userLosesRound();
        }
    }
};

resetGame();