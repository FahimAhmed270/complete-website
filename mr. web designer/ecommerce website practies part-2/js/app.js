// navbar js

let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');  
}

// home section js

let slide = document.querySelectorAll('.slide-container');
let index= 0;

function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}
function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}

// feature section js

document.querySelectorAll('.feature-image-1').forEach(image_1=>{
    image_1.onclick=()=>{
        let src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    }
})

document.querySelectorAll('.feature-image-2').forEach(image_2=>{
    image_2.onclick=()=>{
        let src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    }
})

document.querySelectorAll('.feature-image-3').forEach(image_3=>{
    image_3.onclick=()=>{
        let src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    }
})