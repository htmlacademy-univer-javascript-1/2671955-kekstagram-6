import {photo} from './photo-constructor.js';

const renderComments = function(picture, social) {
  const bigPictureElement = document.querySelector('.big-picture');
  const socialCommentsElement = social.querySelector('.social__comments');
  const commentTemplate = socialCommentsElement.querySelector('.social__comment');
  const currentCommentsCount = bigPictureElement.querySelector('.social__comment-count');
  socialCommentsElement.innerHTML = '';

  const socialCaptionElement = social.querySelector('.social__caption');
  socialCaptionElement.textContent = photo[picture.id].description;
  const commentsArray = photo[picture.id].comments;


  let CURRENT_COMMENT = 0;
  const showComments = function() {
    const loadMoreButtonElement = bigPictureElement.querySelector('.social__comments-loader');
    loadMoreButtonElement.classList.remove('hidden');

    if (commentsArray.length === 0) {
      loadMoreButtonElement.classList.add('hidden');
      currentCommentsCount.innerHTML = `${CURRENT_COMMENT} из <span class="comments-count">${commentsArray.length}</span> комментариев</div>`;
      return;
    }

    if (CURRENT_COMMENT >= commentsArray.length) {
      loadMoreButtonElement.classList.add('hidden');
      return;
    }

    const endIndex = Math.min(CURRENT_COMMENT + 5, commentsArray.length);
    const fragment = document.createDocumentFragment();

    for (let i = CURRENT_COMMENT; i < endIndex; i++) {
      const newComment = commentTemplate.cloneNode(true);
      const newCommentImg = newComment.querySelector('.social__picture');
      const socialTextElement = newComment.querySelector('.social__text');

      newCommentImg.setAttribute('src', commentsArray[i].avatar);
      newCommentImg.setAttribute('alt', commentsArray[i].name);
      socialTextElement.textContent = commentsArray[i].message;

      fragment.appendChild(newComment);
    }

    socialCommentsElement.appendChild(fragment);

    CURRENT_COMMENT = endIndex;
    currentCommentsCount.innerHTML = `${CURRENT_COMMENT} из <span class="comments-count">${commentsArray.length}</span> комментариев</div>`;
    if (CURRENT_COMMENT >= commentsArray.length) {
      loadMoreButtonElement.classList.add('hidden');
    }
  };

  showComments();

  return showComments;
};


export {renderComments};
