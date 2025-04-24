const catalogLink = document.querySelector('.catalog-link');
const catalogMenu = document.querySelector('.catalog-menu__list');
const searchLink = document.querySelector('.search-item .nav__link');
const searchForm = document.querySelector('.search form');
const loginLink = document.querySelector('.login-item .nav__link');
const loginForm = document.querySelector('.login__form');
const cartLink = document.querySelector('.cart-item .nav__link');
const cart = document.querySelector('.cart');

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


const body = document.querySelector('.page__body');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const fullPhoto = document.querySelector('.slider__img--main img');
const smallPhotos = document.querySelectorAll('.slider__img--small img');
const title = document.querySelector('.main-header__title');
const subtitle = document.querySelector('.main-header__subtitle');

const iceCreamPhotos = [
  'img/strawberry-jam-promo.png',
  'img/banana-promo.png',
  'img/caramel-promo.png',
];

const titles = [
  'Нежный пломбир\n с клубничным джемом',
  'Сливочное мороженое\n со вкусом банана',
  'Карамельный\u00A0пломбир с маршмеллоу',
];

const subtitles = [
  'Натуральное мороженое из свежих сливок\n и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи.',
  'Сливочное мороженое с ярким банановым вкусом подарит вам свежесть и наслаждение даже в самый жаркий летний день.',
  'Необычный сладкий десерт с карамельным топпингом и кусочками зефира завоюет\n сердца сладкоежек всех возрастов.',
];

let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % iceCreamPhotos.length;

  fullPhoto.src = iceCreamPhotos[index];
  smallPhotos[0].src = iceCreamPhotos[(index + 1) % iceCreamPhotos.length];
  smallPhotos[1].src = iceCreamPhotos[(index - 1 + iceCreamPhotos.length) % iceCreamPhotos.length];

  title.textContent = titles[index];
  subtitle.textContent = subtitles[index];

  body.classList.remove(`page__body--bg${(index - 1 + iceCreamPhotos.length) % iceCreamPhotos.length}`);
  body.classList.add(`page__body--bg${index}`);
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + iceCreamPhotos.length) % iceCreamPhotos.length;

  fullPhoto.src = iceCreamPhotos[index];
  smallPhotos[0].src = iceCreamPhotos[(index - 1 + iceCreamPhotos.length) % iceCreamPhotos.length];
  smallPhotos[1].src = iceCreamPhotos[(index + 1) % iceCreamPhotos.length];

  title.textContent = titles[index];
  subtitle.textContent = subtitles[index];

  body.classList.remove(`page__body--bg${(index + 1) % iceCreamPhotos.length}`);
  body.classList.add(`page__body--bg${index}`);
});
