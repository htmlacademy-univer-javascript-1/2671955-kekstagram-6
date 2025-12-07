const onCloseModal = function () {
  const body = document.querySelector('body');
  const bigPictureElement = document.querySelector('.big-picture');
  const loadMoreButtonElement = bigPictureElement.querySelector('.social__comments-loader');

  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  loadMoreButtonElement.classList.remove('hidden');
};

export {onCloseModal};
