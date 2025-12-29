import {loadErrorBlock, sendErrorBlock} from './error-blocks.js';
import {closeEditor} from './close-editor.js';
import {sendSuccessBlock} from './success-block.js';

const GET_URL = 'https://29.javascript.htmlacademy.pro/kekstagram/data';
const SEND_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const ErrorGetData = 'Не удалось загрузить данные. Попробуйте обновить страницу.';

const submitButton = document.querySelector('.img-upload__submit');

const getData = () => fetch(GET_URL)
  .then((response) => {
    if (!response.ok) {
      loadErrorBlock(ErrorGetData);
    }
    return response.json();
  })
  .catch(() => {
    loadErrorBlock(ErrorGetData);
  });

const sendData = (data) => fetch(SEND_URL, {
  method: 'POST',
  body: data,
})
  .then((response) => {
    if (!response.ok) {
      sendErrorBlock();
      return;
    }

    return response.json();
  })
  .then(() => {
    closeEditor();
    sendSuccessBlock();
  })

  .catch(() => {
    sendErrorBlock();
  })

  .finally(submitButton.disabled = false);

export {getData, sendData};
