const catalogLink = document.querySelector('.catalog-link');
const catalogMenu = document.querySelector('.catalog-menu__list');
const searchLink = document.querySelector('.search-item .nav__link');
const searchForm = document.querySelector('.search form');
const loginLink = document.querySelector('.login-item .nav__link');
const loginForm = document.querySelector('.login__form');
const cartLink = document.querySelector('.cart-item .nav__link');
const cart = document.querySelector('.cart');

catalogLink.addEventListener('focus', () => {
  catalogLink.classList.add('nav__link--active');
});

catalogMenu.addEventListener('focusin', () => {
  catalogLink.classList.add('nav__link--active');
});

catalogMenu.addEventListener('focusout', () => {
  if (!catalogMenu.contains(document.activeElement) && document.activeElement !== catalogLink) {
    catalogLink.classList.remove('nav__link--active');
  }
});

catalogLink.addEventListener('focusout', () => {
  if (!catalogMenu.contains(document.activeElement)) {
    catalogLink.classList.remove('nav__link--active');
  }
});


searchLink.addEventListener('focus', () => {
  searchLink.classList.add('nav__link--active');
});

searchForm.addEventListener('focusin', () => {
  searchLink.classList.add('nav__link--active');
});

searchForm.addEventListener('focusout', () => {
  if (!catalogMenu.contains(document.activeElement) && document.activeElement !== searchLink) {
    searchLink.classList.remove('nav__link--active');
  }
});

searchLink.addEventListener('focusout', () => {
  if (!catalogMenu.contains(document.activeElement)) {
    searchLink.classList.remove('nav__link--active');
  }
});


loginLink.addEventListener('focus', () => {
  loginLink.classList.add('nav__link--active');
});

loginForm.addEventListener('focusin', () => {
  loginLink.classList.add('nav__link--active');
});

loginForm.addEventListener('focusout', () => {
  if (!loginForm.contains(document.activeElement) && document.activeElement !== loginLink) {
    loginLink.classList.remove('nav__link--active');
  }
});

loginLink.addEventListener('focusout', () => {
  if (!loginForm.contains(document.activeElement)) {
    loginLink.classList.remove('nav__link--active');
  }
});


cartLink.addEventListener('focus', () => {
  cartLink.classList.add('nav__link--active');
});

cart.addEventListener('focusin', () => {
  cartLink.classList.add('nav__link--active');
});

cart.addEventListener('focusout', () => {
  if (!cart.contains(document.activeElement) && document.activeElement !== cartLink) {
    cartLink.classList.remove('nav__link--active');
  }
});

cartLink.addEventListener('focusout', () => {
  if (!cart.contains(document.activeElement)) {
    cartLink.classList.remove('nav__link--active');
  }
});
