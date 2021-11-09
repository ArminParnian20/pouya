const gallery=document.querySelectorAll(".gallery .image");
let previewBox=document.querySelector(".preveiw-box");
let previewImg=previewBox.querySelector('img')
let closeIcone=previewBox.querySelector('.icon')
let totalImg=document.querySelector('.total-img');
let currentImg=document.querySelector('.current-img')
let shadow=document.querySelector('.shadow');
let loading=document.querySelector('.load-box');
let body=document.querySelector('.website');

window.addEventListener('load',()=>{
  setTimeout(()=>{
    body.style.display='block'; 
    loading.style.display='none';
  },1000)
})
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

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
totalImg.textContent=gallery.length;
for(let i=0;i<gallery.length;i++){
       let newIndex=i;
       gallery[i].addEventListener('click',
       ()=>{
         function preview(){
          currentImg.textContent=newIndex+1;
          let selectedImgUrl=gallery[newIndex].querySelector("img").src;
          previewImg.src=selectedImgUrl;
        }
        if(newIndex<0){
          prevBtn.style.display="none"
        }
        if(newIndex>=gallery.length){
          nextBtn.style.display="none"
        }
        const prevBtn=document.querySelector(".prev");
        const nextBtn=document.querySelector(".next");
        prevBtn.addEventListener('click',()=>{
          newIndex--;
          if(newIndex==0){
            preview();
            prevBtn.style.display="none"
          }
          else{
            nextBtn.style.display="block"
            prevBtn.style.display="block";
            preview();
          }
        })
        nextBtn.addEventListener('click',()=>{
          newIndex++;
          if(newIndex>=gallery.length-1){
            preview();
            nextBtn.style.display="none"
          }
          else{
          preview();
          nextBtn.style.display="block"
          prevBtn.style.display="block";
          }
        })
         preview();

         previewBox.classList.add('show');
         shadow.style.display="block";
         closeIcone.addEventListener('click',()=>{
           prevBtn.style.display="block"
           nextBtn.style.display="block"
           previewBox.classList.remove('show');
           shadow.style.display="none";
           newIndex=0;

          }) 
        });
}