// search bar design
let searchBar = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
searchBtn.onclick=()=>{
    searchBar.classList.toggle('active');
    nav.classList.remove('active');
}

// responsive nav bar
let nav = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');
menu.onclick=()=>{
    nav.classList.toggle('active');
    searchBar.classList.remove('active');
}

// scroll spy

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll=()=>{
    searchBar.classList.remove('active');
    nav.classList.remove('active');
    
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    section.forEach(sec=>{
      let top = window.scrollY;
      let offset = sec.offsetTop -200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >=offset && top<offset+height){
        navLinks.forEach(link=>{
          link.classList.remove('active');
          document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active');
        });
      };
    });
}

// swipper js home section

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
  });

  // swipper js products section

  var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        grabCursor:true,
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          },
  });

