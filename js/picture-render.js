import {photo} from './photo-constructor.js';

const renderPicture = function () {

  const template = document.querySelector('#picture').content;
  const picturesContainer = document.querySelector('.pictures');

  for (let i = 0; i < photo.length; i++) {
    const newPhoto = template.cloneNode(true);

    const pictureImg = newPhoto.querySelector('.picture__img');
    pictureImg.src = photo[i].url;
    pictureImg.alt = photo[i].description;

    const pictureLikes = newPhoto.querySelector('.picture__likes');
    pictureLikes.textContent = photo[i].likes;

    const pictureComments = newPhoto.querySelector('.picture__comments');
    pictureComments.textContent = photo[i].comments.length;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newPhoto);
    picturesContainer.appendChild(fragment);
  }

};

export {renderPicture};
