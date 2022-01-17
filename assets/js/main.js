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
    minutes == 0 ? minutes = 0 : minutes = minutes - 5
    
    setTimerOnDisplay(minutes,seconds)
}

function increment(){
    minutes == 60 ? minutes = 60 : minutes = minutes + 5
    
    setTimerOnDisplay(minutes,seconds)
}




function setTimerOnDisplay(min, sec){

    minutesInput.innerHTML = min

    sec >= 10 ? secondsInput.innerHTML = sec : secondsInput.innerHTML = `0${sec}`

    minutes = min
    seconds = sec

    
}

function start(){
    
    cron = setInterval(timer,1000)
    minutes-- 

    starButton.style.display = "none"
    stopButton.style.display = "inline-block"
    pauseButton.style.display = "inline-block"
    options.style.display = "none"

}

function pause(){
    clearInterval(cron)
    starButton.style.display = "inline-block"
    stopButton.style.display = "inline-block"
    pauseButton.style.display = "none"
    minutes++
}

function stop(){
    clearInterval(cron)

    starButton.style.display = "inline-block"
    stopButton.style.display = "none"
    pauseButton.style.display = "none"
    options.style.display = "inline-block"

    setTimerOnDisplay(25,0)
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





