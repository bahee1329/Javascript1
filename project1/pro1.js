function Timmer(){
const date = new Date().getFullYear();

const newyear = new Date(`january 01 ${date+1} 00:00:00`)



const currentdate = new Date();

const diff = newyear-currentdate;



const d = Math.floor(diff/1000/60/60/24);
document.getElementById("days").innerText=d<10?"0"+d:d;

const h = Math.floor((diff/1000/60/60)%24);
document.getElementById("hours").innerText=h<10?"0"+h:h;

const m = Math.floor((diff/1000/60)%60);
document.getElementById("minutes").innerText=m<10?"0"+m:m;

const s =Math.round((diff/1000)%60);
document.getElementById("seconds").innerText=s<10?"0"+s:s;



}

setInterval(Timmer,1000);

