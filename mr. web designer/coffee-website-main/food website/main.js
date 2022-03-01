// reponsive menu bar
let menu =document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

//home slider 
 
document.querySelectorAll('.image-slider img').forEach(images=>{
    images.onclick=()=>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    }
});

// review section js

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    grabCurser:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
            },
        },
        
  });