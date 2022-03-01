let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
}

// product part js

var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides:true,
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

  // preview section js

  let productPreviewContainer = document.querySelector('.products-preview-container');
  let productPreview = document.querySelectorAll('.products-preview');

  document.querySelectorAll('.products .slide .btn').forEach(deatilBtn=>{
    deatilBtn.onclick=()=>{
      productPreviewContainer.style.display = 'block';
      let name = deatilBtn.getAttribute('data-product');
      productPreview.forEach(preview=>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.style.display = 'flex';
        };
      });
    };
  });

  document.querySelectorAll('.products-preview-container .products-preview .fa-times').forEach(close=>{
    close.onclick=()=>{
      productPreviewContainer.style.display='none';
      productPreview.forEach(closePreview=>{
        closePreview.style.display = 'none';
      })
    };
  });

  // review section js

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides:true,
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