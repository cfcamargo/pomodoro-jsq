const minutesInput = document.querySelector('#minutes')
const secondsInput = document.querySelector('#seconds')


const options = document.querySelector('#options')

const starButton = document.querySelector('#start-button')
const stopButton = document.querySelector('#stop-button')
const pauseButton = document.querySelector('#pause-button')

starButton.addEventListener('click', ()=>{ 
    start()
})


let minutes = 25
let seconds = 60
let pomodoros = 0
var cron




function decrement(){

    if(minutes == 5){
        minutes = 5
    } else{
        minutes = minutes - 5
    }
    
    setTimerOnDisplay(minutes)
}

function increment(){
    if(minutes == 60){
        minutes = 60
    } else{
        minutes = minutes + 5
    }
    
    setTimerOnDisplay(minutes)
}




function setTimerOnDisplay(min){

    minutes = min
    
    
    minutesInput.innerHTML = minutes


    secondsFormat = seconds >=10 ? seconds : `0${seconds}`

    secondsInput.innerHTML = seconds == 60 ? '00' : secondsFormat;




    
}

function start(){
    minutes--
    cron = setInterval(timer,1000)
    
    starButton.style.display = "none"
    stopButton.style.display = "inline-block"
    pauseButton.style.display = "inline-block"
    options.style.display = "none"

}

function pause(){
    minutes++
    clearInterval(cron)
    starButton.style.display = "inline-block"
    stopButton.style.display = "inline-block"
    pauseButton.style.display = "none"
    
}

function stop(){
    
    clearInterval(cron)

    starButton.style.display = "inline-block"
    stopButton.style.display = "none"
    pauseButton.style.display = "none"
    options.style.display = "inline-block"

    minutes = 25
    seconds = 60
    setTimerOnDisplay(25)
}




function timer(){
    seconds--;
     if(seconds < 0){
         seconds = 59
         minutes--
         if(minutes == 0){
             minutes = 25
             clearInterval(cron)
         }
     }

     var minutesFormat = minutes < 10 ? `0${minutes}` : minutes
     var secondsFormat = seconds < 10 ? `0${seconds}` : seconds



     minutesInput.innerHTML = minutesFormat
     secondsInput.innerHTML = seconds == 60 ? '00' : secondsFormat;
     
     

     
     

}





