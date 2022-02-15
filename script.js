function displayClock(){
    var time = new Date();
    console.log(time);
    var hours = time.getHours();
    console.log(hours);
    var minutes= time.getMinutes();
    var second = time.getSeconds();
    var temp = 'AM';
//for hours
    if(hours > 12){
        temp = "PM";
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours == 0){
        hours = 12;
    }
    if(hours < 10){
        hours ="0" + hours;
    }
    //for minutes
    if(minutes < 10){
        minutes = "0" + minutes
    }
    //for seconds
    if(second < 10){
        second = "0" + second
    }
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + second + " " + temp;
}
setInterval(displayClock,1000);