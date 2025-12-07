import {photo} from './photo-constructor.js';
import {renderComments} from './render-comments.js';
import {onCloseModal} from './close-modal.js';

const renderFullPicture = function(photos) {
  const body = document.querySelector('body');

  const allPicturesElement = photos.querySelectorAll('.picture');

  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
  const bigPictureSocialElement = document.querySelector('.big-picture__social');
  const socialLikesCount = bigPictureSocialElement.querySelector('.likes-count');
  const socialCommentsCount = bigPictureSocialElement.querySelector('.comments-count');
  const cancelButtonElement = document.querySelector('.big-picture__cancel');
  const loadMoreButtonElement = bigPictureElement.querySelector('.social__comments-loader');
  const socialCommentsElement = bigPictureSocialElement.querySelector('.social__comments');
  const commentTemplate = socialCommentsElement.querySelector('.social__comment');


  allPicturesElement.forEach ((picture) =>
    picture.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');
      body.classList.add('modal-open');
      bigPictureImgElement.src = photo[picture.id].url;
      bigPictureImgElement.alt = photo[picture.id].description;
      socialLikesCount.textContent = photo[picture.id].likes;
      socialCommentsCount.textContent = photo[picture.id].comments.length;


      const commentsRender = renderComments(picture, bigPictureSocialElement);
      loadMoreButtonElement.addEventListener('click', commentsRender);

      if (photo[picture.id].comments.length <= 5) {
        loadMoreButtonElement.classList.add('hidden');
      } else {
        loadMoreButtonElement.classList.remove('hidden');
      }
    }),

  cancelButtonElement.addEventListener('click', () => {
    socialCommentsElement.innerHTML = '';
    socialCommentsElement.appendChild(commentTemplate);
    onCloseModal();
  })
  );
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      socialCommentsElement.innerHTML = '';
      socialCommentsElement.appendChild(commentTemplate);
      onCloseModal();
    }
  });
};


export {renderFullPicture};
