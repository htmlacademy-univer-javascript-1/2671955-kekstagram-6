const picturesContainer = document.querySelector('.pictures');

const renderMiniatures = function (data) {

  const template = document.querySelector('#picture').content;

  for (let i = 0; i < data.length; i++) {
    const newPhoto = template.cloneNode(true);
    const templateElement = newPhoto.querySelector('.picture');
    templateElement.setAttribute('id', i);

    const pictureImgElement = newPhoto.querySelector('.picture__img');
    pictureImgElement.src = data[i].url;
    pictureImgElement.alt = data[i].description;

    const pictureLikesElement = newPhoto.querySelector('.picture__likes');
    pictureLikesElement.textContent = data[i].likes;

    const pictureCommentsElement = newPhoto.querySelector('.picture__comments');
    pictureCommentsElement.textContent = data[i].comments.length;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newPhoto);
    picturesContainer.appendChild(fragment);
  }
};


export {renderMiniatures, picturesContainer};
