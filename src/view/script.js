let menu = document.querySelector('.menu-btn');
let cartItem = document.querySelector('.cart-items-container');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menu.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    menu.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}