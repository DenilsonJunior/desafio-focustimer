export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes,
    buttonIncrease,
    buttonDecrease
}) {
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }
    
    function resetTimer() {
        updateTimerDisplay(minutes, 0);
        clearTimeout(timerTimeOut);
    }
    
    // Função recursiva
    function countDown(){
        timerTimeOut = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent);
            let seconds = Number(secondsDisplay.textContent);
    
            if( minutes < 60 ){
                buttonIncrease.classList.remove('maxPress');
            }
    
            if( minutes <= 0 && seconds <= 0 ){
                buttonDecrease.classList.add('maxPress');
                return;
            }
    
            if( seconds <= 0 ){
                seconds = 5;
                --minutes;
            }
    
            updateTimerDisplay(minutes, String(seconds - 1))
    
            countDown();
        }, 1000);
    }

    return {
        updateTimerDisplay,
        resetTimer,
        countDown
    }
}
