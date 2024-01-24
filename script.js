var timerInMs=0;

var timer;
document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("pause").addEventListener("click",pauseTime);
document.getElementById("reset").addEventListener("click",resetTime);

function resetTime(){
    clearInterval(timer);
    timerInMs=0;
    updateTime(timerInMs);
}

function pauseTime(){
    clearInterval(timer);
}

function startTimer(){
    timer=setInterval(()=>{
        timerInMs+=100;
        updateTime(timerInMs);
    },100)
}

function updateTime(timerInMs){
    const sec=Math.floor(timerInMs/1000);
    const min=Math.floor(timerInMs/60000);
    const ms=Math.floor((timerInMs % 1000)/10);

    document.getElementById("min").innerText=min<10 ? "0"+ min%60 : min%60;
    document.getElementById("sec").innerText=sec<10 ? "0" + sec%60 : sec%60;
    document.getElementById("ms").innerText=ms<10 ? "0" +ms:ms;
}


