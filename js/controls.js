export function Controls(){

    buttonPlay.addEventListener('click', function(){
        countDown();
    })
    
    buttonStop.addEventListener('click', function() {
        resetTimer();
    })
    
    buttonIncrease.addEventListener('click', function(){
        let calc = Number(minutesDisplay.textContent) + 5;
        let minutes = String(calc).padStart(2, '0');
    
        buttonDecrease.classList.remove('maxPress');
        
        if( calc >= 60 ){
            minutes = 60;
            buttonIncrease.classList.add('maxPress');
        }
        
        updateTimerDisplay(minutes, '00');
    })
    
    buttonDecrease.addEventListener('click', function(){
        let calc = Number(minutesDisplay.textContent) - 5;
        let minutes = String(calc).padStart(2, '0');
        
        buttonIncrease.classList.remove('maxPress');
        if( calc < 0 ){
            minutes = 0;
            buttonDecrease.classList.add('maxPress');
        }
    
        updateTimerDisplay(minutes, '00');
    })
}



