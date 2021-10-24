const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const gotoleftImage = document.querySelector(".goto-left");
const gotorightImage = document.querySelector(".goto-right");
const slides = document.querySelectorAll(".slide");
const menuIcon = document.querySelector(".menu-icon");
const sitemenu = document.querySelector(".site-menu");
const menuItems = document.querySelectorAll(".items");
const scrolllIcon = document.querySelector(".scrolll-icon");
const errors = document.querySelectorAll('.errors div');
const Name = document.querySelector('#name');
const phoneNumber = document.querySelector('#phone-number');
const Email = document.querySelector('#email');
const Message = document.querySelector('#message');
const subBtn = document.querySelector('#submit');
const namePattern = /[a-z]{3,}\s[a-z]{3,}/;
const phonePattern = /09\d{9}/;
const emailPattern = /[\w.]+@[a-z-]+\.[a-z]{2,6}/;
const messagePattern = /\S{3,}/;

let counter=0;
let menuMode=0;
const gotoslide = function(slide){
slides.forEach((s,i)=>{
    s.style.transform =`translateX(${100*(i-slide)}%)`;
})
}
gotorightImage.addEventListener('click',()=>{
    if(counter>1){
        counter=0;}
    else{
    counter++;}
    gotoslide(counter);
})
gotoleftImage.addEventListener('click',()=>{
    if(counter==0){
        counter=2;}
    else{
    counter--;}
    gotoslide(counter);
})
let mode=0;
icon.addEventListener('click',()=>{
    if(mode==0){
       
    icon.innerHTML='<i class="far fa-sun fa-2x"></i>'
    icon.style.color="#000";
    icon.style.backgroundColor="yellow";
    menuIcon.style.backgroundColor="yellow";
    menuIcon.style.color="#000";
    body .style.backgroundColor="#191700";
    document.documentElement.style.setProperty('--font-color','#fff');

    mode=1;
    }
    else{
        icon.innerHTML='<i class="fas fa-moon fa-2x"></i>'
        icon.style.color="yellow";
        body.style.backgroundColor="#f2f9f9";
        menuIcon.style.backgroundColor="#000";
        menuIcon.style.color="yellow";
        icon.style.backgroundColor="#000";
        document.documentElement.style.setProperty('--font-color','#000');
        mode=0;
    }
});
setInterval(()=>{
    gotoslide(Math.floor(Math.random()*2))
},3000);
menuIcon.addEventListener('click',()=>{
    if(menuMode==0){
    menuIcon.innerHTML='<i class="fas fa-times fa-2x"></i>';
    menuMode=1;
    sitemenu.style.transform =`translateX(0)`;
    }
    else{
    menuIcon.innerHTML='<i class="fas fa-bars fa-2x"></i>';
     menuMode=0;
    sitemenu.style.transform =`translateX(-100%)`;

    }
})
for(let i=0;i<menuItems.length;i++){
    menuItems[i].addEventListener('click',function(){
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}
scrolllIcon.addEventListener('click',()=>{
    window.scroll({top:0,behavior:'smooth'})
})

subBtn.addEventListener('click',()=>{
    if(!namePattern.test(Name.value)){
        errors[0].style.transform=`translateX(0%)`
        setTimeout(()=>{
            errors[0].style.transform=`translateX(-120%)`
        },2000)
    }
    if(!emailPattern.test(Email.value)){
        errors[2].style.transform=`translateX(0%)`
        setTimeout(()=>{
            errors[2].style.transform=`translateX(-120%)`
        },2000)
    }
    if(!phonePattern.test(phoneNumber.value)){
        errors[1].style.transform=`translateX(0%)`
        setTimeout(()=>{
            errors[1].style.transform=`translateX(-120%)`
        },2000)
    }
    if(!messagePattern.test(Message.value)){
        errors[3].style.transform=`translateX(0%)`
        setTimeout(()=>{
            errors[3].style.transform=`translateX(-120%)`
        },2000)
    }
})

