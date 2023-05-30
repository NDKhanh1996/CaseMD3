let navbar = document.querySelector('.menu-btn');
let cartItem = document.querySelector('.cart-items-container');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    // cartItem.classList.toggle('active');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    console.log('search-btn');
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () => {
    console.log('cart-btn');
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}