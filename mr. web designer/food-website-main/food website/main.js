// responsive menu bar design

let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times')
    nav.classList.toggle('active');
}

window.onscroll=()=>{
    menuBtn.classList.remove('fa-times')
    nav.classList.remove('active');

    // header section scroll active

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active'); 
    }

    // scroll up section 

    if(window.scrollY > 68){
        document.querySelector('#scroll-up').classList.add('active');
    }else{
        document.querySelector('#scroll-up').classList.remove('active');
    }

    // scroll spy

    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .navbar a');
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*='+ id +']').classList.add('active');
            });
        };
    });
}

// home section js

document.querySelectorAll('.image-slider img').forEach(images=>{
    images.onclick=()=>{
        let src = images.getAttribute('src');
        document.querySelector('.main-image').src=src;
    }
});