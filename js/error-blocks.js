import {closeEditor} from './close-editor.js';

const loadErrorBlock = function(message) {
  const picturesContainer = document.querySelector('.pictures');

  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error-message');
  errorBlock.textContent = message;
  picturesContainer.appendChild(errorBlock);

  errorBlock.style.cssText = `
  position: absolute;
  display: flex;
  justify-content: center;
  margin-left: 275px;
  width: 800px;
  height: 30px;

  font-size: 20px;
  font-weight: 550;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 6px
  `;
};

const sendErrorBlock = function() {
  const template = document.querySelector('#error').content;
  const newBlock = template.cloneNode(true);
  const button = newBlock.querySelector('.error__button');
  const body = document.querySelector('body');
  const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');

  imageUploadOverlayElement.classList.add('hidden');
  body.append(newBlock);
  const errorBlock = document.querySelector('.error');

  button.addEventListener('click', () => {
    imageUploadOverlayElement.classList.remove('hidden');
    body.removeChild(errorBlock);
    document.addEventListener('keydown', closeEditor);
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      imageUploadOverlayElement.classList.remove('hidden');
      body.removeChild(errorBlock);
      document.addEventListener('keydown', closeEditor);
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (errorBlock.contains(evt.target)) {
      imageUploadOverlayElement.classList.remove('hidden');
      body.removeChild(errorBlock);
      document.addEventListener('keydown', closeEditor);
    }
  }, {once: true});
};

export {loadErrorBlock, sendErrorBlock};
