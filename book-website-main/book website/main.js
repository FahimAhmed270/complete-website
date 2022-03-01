//  search bar clickable js
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.onclick=()=>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    loginForm.classList.remove('active');
}

// navbar fixed up

window.onscroll=()=>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    loginForm.classList.remove('active');


    if(window.scrollY >0){
      document.querySelector('header').classList.add('fahim');
    }else{
      document.querySelector('header').classList.remove('fahim');
    }
    // scroll navbar active  

    if(window.scrollY > 80){
        document.querySelector('header .header-2').classList.add('active');
    }else{
        document.querySelector('header .header-2').classList.remove('active');
    }
    
    // navbar  scroll spy js

   

    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .header-2 .navbar a');

    section.forEach(sec=>{
      let top = window.scrollY;
      let offset = sec.offsetTop -200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

        if( top >= offset && top < offset +height){
          navLinks.forEach(link=>{
            link.classList.remove('fahim');
            document.querySelector('header .header-2 .navbar a[href*=' + id +']').classList.add('fahim');
          });
        };
    });
}

// scroll spy js

// login form js

let loginForm = document.querySelector('.login-form-container');
let loginBtn = document.querySelector('#login-btn');
let loginClose = document.querySelector('#close-login-form');
loginBtn.onclick=()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
}
loginClose.onclick=()=>{
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

//  home section js

var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides: true,
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
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //  feature section js

  var swiper = new Swiper(".feature-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  //  arrivels section js

  var swiper = new Swiper(".arrivels-slider", {
    spaceBetween:10,
    loop:true,
    grabCursor:true,
    centeredSlides: true,
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
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //  review section js

  var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    loop:true,
    grabCursor:true,
    centeredSlides: true,
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
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //  blogs section js

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    grabCursor:true,
    centeredSlides: true,
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
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // loader section js

  function loader(){
   document.querySelector('.loader-container').classList.add('loader-active');
 }

  function fadeOut(){
    setInterval(loader, 1500);
  }
  window.onload = fadeOut();