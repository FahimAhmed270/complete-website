let menuBar = document.querySelector('.menu-icon');
let sideBar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuBar.onclick=()=>{
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}