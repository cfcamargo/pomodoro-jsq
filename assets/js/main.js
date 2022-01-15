const minutesInput = document.querySelector('#minutes')
const secondsInput = document.querySelector('#seconds')



const starButton = document.querySelector('#start-button')
const stopButton = document.querySelector('#stop-button')

starButton.addEventListener('click', ()=>{
    start()
})


let minutes = 25
let seconds = 0
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
    seconds = 60
    cron = setInterval(timer,1000)
    minutes-- 

    starButton.style.display = "none"
    stopButton.style.display = "inline-block"

}

function pause(){
    clearInterval(cron)
    minutes++
}

function stop(){
    clearInterval(cron)

    starButton.style.display = "inline-block"
    stopButton.style.display = "none"

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





