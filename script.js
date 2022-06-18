const timer = document.getElementById('timer');


function myTimer(){
    const date = new Date()
    timer.innerText = date.toLocaleTimeString();
}

setInterval(myTimer, 1000);