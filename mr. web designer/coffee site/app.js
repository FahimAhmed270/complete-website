// login form js
let loginForm = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick=()=>{
    loginForm.classList.add('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
}
document.querySelector('#close-form').onclick=()=>{
    loginForm.classList.remove('active');
}

// bars section js

let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector(".header .nav");
menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll=()=>{
    loginForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}