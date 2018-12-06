// Game Variables
var winsVar = 0;
var lossesVar = 0;
var guessesLeft = 10;

// Alphabet letters
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letterChosen = "";

// Guesses So Far Array
var guessesSoFarArray = [];

// Display Wins
document.getElementById("winsDisplay").innerHTML = winsVar;

// Display Losses
document.getElementById("lossesDisplay").innerHTML = lossesVar;

// Display Plays Left
document.getElementById("guessesLeftDisplay").innerHTML = guessesLeft;

// Activate Keyboard Press
document.addEventListener('keypress', (event) => {

    // Ramdom Letter Choosen
    letterChosen = alphabet[Math.floor(Math.random() * alphabet.length)];

    // Display Guesses So Far By Player
    const keyName = event.key;
    guessesSoFarArray.push(keyName);
    document.getElementById("guessesSoFarDisplay").innerHTML = guessesSoFarArray;

    // Compare User Choice with Random Selected Letter
    if (keyName == letterChosen) {

        // Add to Wins Display
        winsVar++;
        document.getElementById("winsDisplay").innerHTML = winsVar;

        // Reset Game After Win
        resetGame();
    }
    else {

        // Check for Plays Left
        guessesLeft--;
        document.getElementById("guessesLeftDisplay").innerHTML = guessesLeft;

        if (guessesLeft == 0) {

            // Add to Losses Display
            lossesVar++;
            document.getElementById("lossesDisplay").innerHTML = lossesVar;

            // Reset Game After Lose
            resetGame();
        }
    }
});

// Reset Game
function resetGame() {

    // Reset Guesses Left
    guessesLeft = 10;
    document.getElementById("guessesLeftDisplay").innerHTML = guessesLeft;

    // Reset Guesses
    guessesSoFarArray = [];
    document.getElementById("guessesSoFarDisplay").innerHTML = "";
}