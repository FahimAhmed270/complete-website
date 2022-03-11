let menuBtn = document.querySelector('#menu-btn .fa-bars')
let nav = document.querySelector('nav')

menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-xmark')
    nav.classList.toggle('nav-active')
}

// share js

let share = document.querySelector('.share-icon .fa-share-nodes')
let list = document.querySelector('.share-icon ul')

share.onclick=()=>{
    list.classList.toggle('share-active')
}

// scroll top js

let scrollTop = document.querySelector('.scroll-top')

window.onscroll=()=>{
    if(window.scrollY > 150){
        scrollTop.classList.add('scroll-active')
    }else{
        scrollTop.classList.remove('scroll-active')
    }
}

// theme toggler js

let themeToggler = document.querySelector('.theme-toggler')

themeToggler.onclick=()=>{
    document.querySelector('.color-panel').classList.toggle('theme-active')
}

// color panel js

$(document).ready(function(){
    $('.color-panel ul li').click(function(){
        let color = $(this).css('background');

        $('.color').css('background', color);
    })
})