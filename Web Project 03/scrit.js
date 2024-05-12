const main = document.querySelector('#main');
const txt = document.querySelector('h1');
window.addEventListener('scroll', function(){
const current =window.scrollY;
main.style.backgroundSize = 190 - +window.pageYOffset/12+'%';
main.style.height = 180 +'vh';
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

