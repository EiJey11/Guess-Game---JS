'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; 

document.querySelector('.check')
.addEventListener('click', function() {
const guessingNumber = Number(document.querySelector('.number-input').value);
console.log(guessingNumber, typeof guessingNumber);

//No input
if(!guessingNumber) {
    document.querySelector('.guess-message').textContent = "Input some number!";

//Player won
    } else if (guessingNumber === secretNumber){
        document.querySelector('.guess-message').textContent = "You guessed the number!";
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        document.querySelector('.question').style.fontSize = '48px';
        document.querySelector('h1').textContent = "YOU WIN!!!"

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 


//Number from input is wrong    
} else if (guessingNumber !== secretNumber) {
    if(score > 1) {
        document.querySelector('.guess-message').textContent = 
        guessingNumber > secretNumber ? "The number is too high!" : "The number is too low!";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.guess-message').textContent = "Game over!";
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('h1').textContent = "You lost!"
    }
}
//Too high

    // } else if (guessingNumber > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.guess-message').textContent = "The number is too high!"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = "Game over!";
    //         document.querySelector('.score').textContent = 0;
    //     }

//Too low
    // } else if (guessingNumber < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.guess-message').textContent = "The number is too low!"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = "Game over!"
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('h1').textContent = "You lost!"
    //     }
    // }
});

//Start value
document.querySelector('.again').addEventListener('click', function() {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.question').textContent = "???";
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').style.fontSize = '4rem';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('h1').textContent = "Guess the number!";
    document.querySelector('.guess-message').textContent = "Start guessing";
    document.querySelector('.number-input').value = '';
    document.querySelector('.score').textContent = '20';
});



