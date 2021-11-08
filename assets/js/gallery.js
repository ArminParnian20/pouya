const gallery=document.querySelectorAll(".gallery .image");
let previewBox=document.querySelector(".preveiw-box");
let previewImg=previewBox.querySelector('img')
let closeIcone=previewBox.querySelector('.icon')
let totalImg=document.querySelector('.total-img');
let currentImg=document.querySelector('.current-img')
let shadow=document.querySelector('.shadow');

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

          }) 
        });
}