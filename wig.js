const menu = document.getElementById('menu-bar');
const navbarEl = document.querySelector('.navbar-menu');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
})






