const menuBtn = $('.header .menu-btn');
const cartBtn = $('.header .cart-items-container');
const searchBtn = $('.header .search-form');

const toggleMenu = () => {
    menuBtn.toggleClass('active');
}

const toggleCart = () => {
    cartBtn.toggleClass('active');
}

const toggleSearch = () => {
    searchBtn.toggleClass('active');
}

$(window).scroll(() => {
    if (menuBtn.hasClass('active')) menuBtn.removeClass('active');
    if (cartBtn.hasClass('active')) cartBtn.removeClass('active');
    if (searchBtn.hasClass('active')) searchBtn.removeClass('active');
});