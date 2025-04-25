const body = document.querySelector('.page__body');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const fullPhoto = document.querySelector('.slider__img--main img');
const smallPhotos = document.querySelectorAll('.slider__img--small img');
const title = document.querySelector('.main-header__title');
const subtitle = document.querySelector('.main-header__subtitle');
const pagButtons = document.querySelectorAll('.pag__button');

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

const photoDescriptions = [
  'Пломбир с клубничным джемом',
  'Сливочное мороженое со вкусом банана',
  'Карамельный пломбир с маршмеллоу',
]

let currIndex = 0;

const getIndexes = (index) => {
  let nextIndex = (index + 1) % iceCreamPhotos.length;
  let prevIndex = (index - 1 + iceCreamPhotos.length) % iceCreamPhotos.length;
  return { nextIndex, prevIndex };
};

const changePagButton = (index) => {
  pagButtons.forEach((button) => {
    button.classList.remove('pag__button--current');
  });
  pagButtons[index].classList.add('pag__button--current');
};

nextButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  currIndex = (currIndex + 1) % iceCreamPhotos.length;
  const { nextIndex, prevIndex } = getIndexes(currIndex);

  title.textContent = titles[currIndex];
  subtitle.textContent = subtitles[currIndex];

  fullPhoto.src = iceCreamPhotos[currIndex];
  smallPhotos[0].src = iceCreamPhotos[nextIndex];
  smallPhotos[1].src = iceCreamPhotos[prevIndex];

  fullPhoto.alt = photoDescriptions[currIndex];
  smallPhotos[0].alt = photoDescriptions[nextIndex];
  smallPhotos[1].alt = photoDescriptions[prevIndex];

  changePagButton(currIndex);

  body.classList.remove(`page__body--bg${prevIndex}`);
  body.classList.add(`page__body--bg${currIndex}`);
});

prevButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  currIndex = (currIndex - 1 + iceCreamPhotos.length) % iceCreamPhotos.length;
  const { nextIndex, prevIndex } = getIndexes(currIndex);

  fullPhoto.src = iceCreamPhotos[currIndex];
  smallPhotos[0].src = iceCreamPhotos[prevIndex];
  smallPhotos[1].src = iceCreamPhotos[nextIndex];

  fullPhoto.alt = photoDescriptions[currIndex];
  smallPhotos[0].alt = photoDescriptions[prevIndex];
  smallPhotos[1].alt = photoDescriptions[nextIndex];

  title.textContent = titles[currIndex];
  subtitle.textContent = subtitles[currIndex];

  changePagButton(currIndex);

  body.classList.remove(`page__body--bg${(currIndex + 1) % iceCreamPhotos.length}`);
  body.classList.add(`page__body--bg${currIndex}`);
});


const feedbackModal = document.querySelector('.modal-container');
const feedbackButton = document.querySelector('.contacts .button');
const closeButton = feedbackModal.querySelector('.modal__close-button');

feedbackButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackModal.classList.remove('modal-close');
});

closeButton.addEventListener('click', () => {
  feedbackModal.classList.add('modal-close');
});
