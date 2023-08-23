function clock(){

var a = document.getElementById("Time_Hour");
var b = document.getElementById("Time_Minute");
var c = document.getElementById("Time_Second");
var am = document.getElementById("Meridiem");

const date = new Date()
// let text = date.toLocaleTimeString();
let hours = half(date.getHours());
let mins = date.getMinutes();
let secs = date.getSeconds();
a.innerHTML=hours;
b.innerHTML=mins;
c.innerHTML=secs;
if(date.getHours()>=12){
    document.getElementById("Meridiem").innerHTML="PM";
}
else{
    document.getElementById("Meridiem").innerHTML="AM";
}
setInterval("clock()",1000)
}
clock();
function half(p){
    if(p>12){
        return p-12;
    }
}
const date = new Date();
let hours=date.getHours();
let greet=document.getElementById("greetings");
if(hours>=12 && hours<16){
    greet.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP";
}

else if(hours>=16 && hours<17){
    greet.innerHTML="GOOD EVENING!!";
}
else if(hours>=17 && hours<24){
    greet.innerHTML="GOOD NIGHT!!";
}
else{
    greet.innerHTML="GOOD MORNING!! WAKE UP!!";
}
var button=document.getElementById("changetext");
button.addEventListener("click",function(){
    let date=new Date();
    let hour=date.getHours();
    let wakeup=document.getElementById('wakeup');
    let lunch=document.getElementById('lunch');
    let nap=document.getElementById('nap');
    let night=document.getElementById('night');
    if(wakeup.value==hour){
        document.getElementById("DynamicMessage2").innerHTML="GRAB SOME BREAKFAST";
        document.getElementById("Reminder_Poster").src="morning_image.jpg";
    }
    if(lunch.value==hour){
        document.getElementById("DynamicMessage2").innerHTML="LET'S HAVE SOME LUNCH !!";
        document.getElementById("Reminder_Poster").src="lunch_image.jpg";
    }
    if(nap.value==hour){
        document.getElementById("DynamicMessage2").innerHTML="STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!";
        document.getElementById("Reminder_Poster").src="evening_image.jpg";
    }
    if(night.value==hour){
        document.getElementById("DynamicMessage2").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("Reminder_Poster").src="night_image.jpg";
    }
    var morning =wakeup.options[wakeup.selectedIndex].text;
    document.getElementById("wakeuptime").innerHTML=morning;
    var afternoon =lunch.options[lunch.selectedIndex].text;
    document.getElementById("lunchtime").innerHTML=afternoon;
    var evening =nap.options[nap.selectedIndex].text;
    document.getElementById("naptime").innerHTML=evening;
    var nights =night.options[night.selectedIndex].text;
    document.getElementById("nighttime").innerHTML=nights;
})

function changecontent(){
 document.getElementById("changetext").innerHTML="Party time!"
}
function content(){
    document.getElementById("changetext").innerHTML="Set Alarm"
}