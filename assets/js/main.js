let loading=document.querySelector('.load-box');
let body=document.querySelector('.website');

window.addEventListener('load',()=>{
  setTimeout(()=>{
    body.style.display='block'; 
    loading.style.display='none';
  },1000)
})
let mode=0;
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let lamp=document.querySelector('.lamp');
lamp.addEventListener('click',()=>{
if(mode==0){
  document.documentElement.style.setProperty('--color-bg-x','#1b262c');
  document.documentElement.style.setProperty('--color-bg','#ffac41');
  document.documentElement.style.setProperty('--color-font','#beebe9');
  mode=1;
}
else{
  document.documentElement.style.setProperty('--color-bg-x','#e6e2dd');
  document.documentElement.style.setProperty('--color-bg','#d48166');
  document.documentElement.style.setProperty('--color-font','#373a36');
  mode=0;
}
})
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();

