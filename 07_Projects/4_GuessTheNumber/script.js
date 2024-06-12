let randomNum = parseInt(Math.random() * 100 + 1)
console.log(randomNum);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const previousGuesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const LowOrHigh = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultParas')
const results = document.querySelector('#results')

const p = document.createElement('p')

let guesses = []
let numGuesses = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        // if(guess === '' || guess < 0 || isNaN(guess)) {
        //     results.innerHTML = `Please give a valid guess ${guess}`
        // }
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    //Checking if guess made by user is correct or not, like string should not be passed ... etc
    if (isNaN(guess)) {
        alert(`Please Enter a valid Number`)
    }
    else if (guess < 1) {
        alert(`Please enter a number greater than 1`)
    }
    else if (guess > 100) {
        alert(`Please enter a number less than 100`)
    }
    else {
        guesses.push(guess)
        if(numGuesses >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //Checking idhar hoga, guess correct h kya in the sense, bada h, chota h etc
    if (guess === randomNum) {
        displayMessage(`Correct!!`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`Number is too low!`)
    } else if (guess > randomNum) {
        displayMessage(`Number is too high!`)
    }
}

function displayGuess(guess) {
    //To display the guessed number by user, value ko clean karega, aur arrays ko update karega
    userInput.value = ''; //This is cleaning our userInput value, since everytime we will have a new value. 
    previousGuesses.innerHTML += ` ${guess}` // values ko push krte ja rahe h, with spaces 
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(msg) {
    //This will interact with DOM to print msgs
    LowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '') // Disable the input field, indicating that the game has ended.
    p.classList.add('button')
    // p.className = 'button'
    // console.log(p)
    p.innerHTML = `<h2 id="newGame">New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
    // displayMessage('')
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    // displayMessage('')
    newGameButton.addEventListener('click', (event) => {
        randomNum = parseInt(Math.random() * 100 + 1)
        console.log(randomNum);
        displayMessage('')
        guesses = []
        numGuesses = 1
        previousGuesses.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')   
        startOver.removeChild(p)
        playGame = true;
    })
}