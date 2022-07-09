const timer = document.getElementById('timer');


function myTimer(){
    // calling date as a constructor
    const date = new Date()
    timer.innerText = date.toLocaleTimeString();
}

setInterval(myTimer, 1000);