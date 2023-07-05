import { Timer } from "./timer.js";
// import { Controls } from "./controls.js";

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');

const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffee = document.querySelector('.coffee');
const buttonBonfire = document.querySelector('.bonfire');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes,
    buttonIncrease,
    buttonDecrease
})

buttonPlay.addEventListener('click', function(){
    timer.countDown();
})

buttonStop.addEventListener('click', function() {
    timer.resetTimer();
})

buttonIncrease.addEventListener('click', function(){
    let calc = Number(minutesDisplay.textContent) + 5;
    let minutes = String(calc).padStart(2, '0');

    buttonDecrease.classList.remove('maxPress');
    
    if( calc >= 60 ){
        minutes = 60;
        buttonIncrease.classList.add('maxPress');
    }
    
    timer.updateTimerDisplay(minutes, '00');
})

buttonDecrease.addEventListener('click', function(){
    let calc = Number(minutesDisplay.textContent) - 5;
    let minutes = String(calc).padStart(2, '0');
    
    buttonIncrease.classList.remove('maxPress');
    if( calc < 0 ){
        minutes = 0;
        buttonDecrease.classList.add('maxPress');
    }

    timer.updateTimerDisplay(minutes, '00');
})

buttonForest.addEventListener('click', function(){
    buttonForest.classList.add('active');
    buttonRain.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonBonfire.classList.remove('active');
})

buttonRain.addEventListener('click', function(){
    buttonRain.classList.add('active');
    buttonForest.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonBonfire.classList.remove('active');
})

buttonCoffee.addEventListener('click', function(){
    buttonCoffee.classList.add('active');
    buttonForest.classList.remove('active');
    buttonRain.classList.remove('active');
    buttonBonfire.classList.remove('active');
})

buttonBonfire.addEventListener('click', function(){
    buttonBonfire.classList.add('active');
    buttonForest.classList.remove('active');
    buttonRain.classList.remove('active');
    buttonCoffee.classList.remove('active');
})