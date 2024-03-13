let isRunning = false;
let hours = 0, minutes = 0 , seconds = 0 , interval;

function displayStopWatch(){

    //To Format the timing HH:MM:SS format
    document.getElementById('displaystopwatch').innerText = 
    (hours < 10 ? "0"+hours : hours) + ":" +
    (minutes < 10 ? "0"+minutes : minutes) + ":"+
    (seconds < 10 ? "0"+seconds : seconds);
}

function startStopWatch(){
    if(!isRunning){
        isRunning = true;

        interval = setInterval(function(){
            seconds++;
            if(seconds === 60)
            {
                seconds = 0;
                minutes++;
                if(minutes === 60){
                    minutes = 0;
                    hours++;
                }
            }
            displayStopWatch();
        },1000)
    }
}

function stopStopWatch(){
    clearInterval(interval);
    isRunning = false;
}

function resetStopWatch(){
    stopStopWatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayStopWatch();
}

document.getElementById("startstopwatch").addEventListener('click',startStopWatch);
document.getElementById("stopstopwatch").addEventListener('click',stopStopWatch);
document.getElementById("resetstopwatch").addEventListener('click',resetStopWatch);