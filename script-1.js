const catalogLink = document.querySelector('.catalog-link');
const catalogMenu = document.querySelector('.catalog-menu__popup');
const searchLink = document.querySelector('.search-item .nav__link');
const searchForm = document.querySelector('.search-item__popup form');
const loginLink = document.querySelector('.login-item .nav__link');
const loginForm = document.querySelector('.login-popup__form');
const cartLink = document.querySelector('.cart-item .nav__link');
const cart = document.querySelector('.cart-popup');

const links = [
  catalogLink,
  searchLink,
  loginLink,
  cartLink,
];

const popups = [
  catalogMenu,
  searchForm,
  loginForm,
  cart,
];

links.forEach((link, index) => {
  link.addEventListener('focus', () => {
    link.classList.add('nav__link--active');
  });

  popups[index].addEventListener('focusin', () => {
    link.classList.add('nav__link--active');
  });

  popups[index].addEventListener('focusout', () => {
    if (!popups[index].contains(document.activeElement) && document.activeElement !== link) {
      link.classList.remove('nav__link--active');
    }
  });

  link.addEventListener('focusout', () => {
    if (!popups[index].contains(document.activeElement)) {
      link.classList.remove('nav__link--active');
    }
  });
});
