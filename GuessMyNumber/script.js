'use strict';
/*
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number 🥳';

// to edit element
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

// to edit in the input field
document.querySelector('.guess').value = 20 ;
console.log(document.querySelector('.guess').value);

const check = function(sc){
    sc == 0 ? 0 : --sc;
    console.log(sc);;
    if(!sc){
        document.querySelector('body').style.backgroundColor = 'red';

        document.querySelector('.score').textContent = sc;
        document.querySelector('.message').textContent = 'GameOver 😭';
    }else{
        document.querySelector('.score').textContent = sc;
    }
    return sc;
}
*/

let secretNumber = Math.floor(Math.random() * 20) + 1; ;
let score = 20;
let Highscore =0;


// Math.trunc -> delete the float part from number
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;

    document.body.style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;

});


document.querySelector('.check').addEventListener('click' , function () {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.number').textContent = guess;
    if (!guess) {
        displayMessage('🚫 No Number');
    
    } else if (guess == secretNumber) {
        document.querySelector('.number').textContent = guess;
        displayMessage('🥳 Correct Number 🥳');
        document.querySelector('body').style.backgroundColor = '#00cc6a';
        document.querySelector('.number').style.width = '30rem';

        Highscore = score > Highscore ? score : Highscore;

        document.querySelector('.highscore').textContent = Highscore;
    } else if (guess !== secretNumber) {
        if( score > 0 ){
            displayMessage(guess > secretNumber ? 'Too High 🫠😞' : 'Too Low 🫠😞'); 
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('body').style.backgroundColor = 'red';
            displayMessage('GameOver 😭');
            document.querySelector('.score').textContent = score;

        }
    }
});
