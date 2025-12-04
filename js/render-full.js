import {photo} from './photo-constructor.js';
import {renderComments} from './render-comments.js';

const renderFullPicture = function(photos) {
  const body = document.querySelector('body');

  const allPicturesElement = photos.querySelectorAll('.picture');

  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');

  const bigPictureSocialElement = document.querySelector('.big-picture__social');
  const socialLikesCount = bigPictureSocialElement.querySelector('.likes-count');
  const socialCommentsCount = bigPictureSocialElement.querySelector('.comments-count');

  const cancelButtonElement = document.querySelector('.big-picture__cancel');

  allPicturesElement.forEach ((picture) =>
    picture.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');

      bigPictureImgElement.src = photo[picture.id].url;
      bigPictureImgElement.alt = photo[picture.id].description;

      socialLikesCount.textContent = photo[picture.id].likes;
      socialCommentsCount.textContent = photo[picture.id].comments.length;

      renderComments(picture, bigPictureSocialElement);

      const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
      commentCountElement.classList.add('hidden');
      const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
      commentsLoaderElement.classList.add('hidden');

      body.classList.add('modal-open');
    }),

  cancelButtonElement.addEventListener('click', () => {
    bigPictureElement.classList.add('hidden');
    body.classList.remove('modal-open');
  }),

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPictureElement.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  })
  );
};


export {renderFullPicture};
