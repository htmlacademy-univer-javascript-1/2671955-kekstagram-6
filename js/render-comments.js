import {photo} from './photo-constructor.js';

const renderComments = function(picture, social) {

  const socialCommentsElement = social.querySelector('.social__comments');
  const commentTemplate = socialCommentsElement.querySelector('.social__comment');
  socialCommentsElement.innerHTML = '';

  const socialCaptionElement = social.querySelector('.social__caption');
  socialCaptionElement.textContent = photo[picture.id].description;
  const commentsArray = photo[picture.id].comments;

  for (let i = 0; i < commentsArray.length; i++) {
    const newComment = commentTemplate.cloneNode(true);
    const newCommentImg = newComment.querySelector('.social__picture');
    const socialTextElement = newComment.querySelector('.social__text');

    newCommentImg.setAttribute('src', commentsArray[i].avatar);
    newCommentImg.setAttribute('alt', commentsArray[i].name);
    socialTextElement.textContent = commentsArray[i].message;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newComment);
    socialCommentsElement.appendChild(fragment);
  }
};


export {renderComments};
