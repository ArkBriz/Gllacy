const select = document.querySelector('.sorting__select');

select.addEventListener('click', () => {
  if (select.classList.contains('sorting__select--opened')) {
    select.classList.remove('sorting__select--opened');
  } else {
    select.classList.add('sorting__select--opened');
  }
});

select.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    if (select.classList.contains('sorting__select--opened')) {
      select.classList.remove('sorting__select--opened');
    } else {
      select.classList.add('sorting__select--opened');
    }
  };

  if (evt.key === 'Escape') {
    select.classList.remove('sorting__select--opened');
  }
});

select.addEventListener('blur', () => {
  select.classList.remove('sorting__select--opened');
});
