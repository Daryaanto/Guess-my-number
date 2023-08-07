'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.floor(Math.random()*20)+1;
let score =20;
let highscore =0;

const displayMessage=function(message){
    document.querySelector('.message').textContent= message;
}

document.querySelector('.again').addEventListener('click', function(){
    score =20;
    document.querySelector('.guess').value= '';
    displayMessage('Start guessing...');
    secretNumber=Math.floor(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor=
    '#222';
    document.querySelector('.number').style.width='15rem';

})


document.querySelector('.check').addEventListener(
    'click', function(){
    const guess = Number( document.querySelector('.guess').value);
    
if(!guess){
   displayMessage('No number!');

}

else if( guess === secretNumber){


    displayMessage('Correct Number!');
     document.querySelector('.number').textContent=secretNumber;

     document.querySelector('body').style.backgroundColor=
     '#60b347';

     document.querySelector('.number').style.width='30rem';
    if(score>highscore){
        highscore=score;
     document.querySelector('.highscore').textContent=highscore;
}}
else if(guess!=secretNumber){

    if(score>1){
        displayMessage(guess>secretNumber? 'Too high!':'Too low!');
        
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        displayMessage('You lost!');
        document.querySelector('.score').textContent=0;
    }

}


})