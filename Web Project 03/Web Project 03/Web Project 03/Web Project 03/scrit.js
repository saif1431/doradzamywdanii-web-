const main = document.querySelector('#main');
const maintxt = document.getElementById('main-text');
const txt = document.querySelector('h1');
window.addEventListener('scroll', function(){
    const current =window.scrollY;
    if(window.innerWidth>900){
      maintxt.style.transform = `translateY(${current*1.3}px) scale(${1-current/1500})`;
main.style.backgroundSize = 150 +window.pageYOffset/12+'%';
main.style.height = 180 +'vh';
    }
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// txt.addEventListener('scroll', function(){
//     // txt.style.backgroundSize = 190 - +window.pageYOffset/12+'%';
//     txt.style.bottom = '100%'
//     txt.style.left = '0'
// })

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
      }
      else{
        menuList.style.maxHeight = "0px";
    }
}

// window.addEventListener('scroll', function() {
//   const main = document.querySelector('#main');
//   const h1 = document.querySelector('#main h1');
  
//   main.style.height = Math.max(50, 100 - window.pageYOffset / 10) + '%';
  

//   h1.style.fontSize = Math.max(1, 3.5 - window.pageYOffset / 100) + 'rem';
// });

// const main =document.querySelector('#main');
// const h1 = document.querySelector('h1');
// window.addEventListener('scroll', function(){

//     main.style.height = '180vh'
//     h1.style.fontSize = '3.5rem'

// })