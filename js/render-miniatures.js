import {photo} from './photo-constructor.js';

const picturesContainer = document.querySelector('.pictures');

const renderMiniatures = function () {

  const template = document.querySelector('#picture').content;

  for (let i = 0; i < photo.length; i++) {
    const newPhoto = template.cloneNode(true);
    const templateElement = newPhoto.querySelector('.picture');
    templateElement.setAttribute('id', i);

    const pictureImgElement = newPhoto.querySelector('.picture__img');
    pictureImgElement.src = photo[i].url;
    pictureImgElement.alt = photo[i].description;

    const pictureLikesElement = newPhoto.querySelector('.picture__likes');
    pictureLikesElement.textContent = photo[i].likes;

    const pictureCommentsElement = newPhoto.querySelector('.picture__comments');
    pictureCommentsElement.textContent = photo[i].comments.length;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newPhoto);
    picturesContainer.appendChild(fragment);
  }
};


export {renderMiniatures, picturesContainer};
