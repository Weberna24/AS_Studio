const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const slogoEl = document.querySelector('.slogo');
const logoEl = document.querySelector('.image-logo');
const captionEl =document.querySelector('.caption');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    slogoEl.classList.toggle('active');
    logoEl.classList.toggle('active');
    captionEl.classList.toggle('active');
})