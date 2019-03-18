var countDownDate = new Date("Sep 6, 2018 16:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var disctance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "return(home)";
    }
}, 1000);