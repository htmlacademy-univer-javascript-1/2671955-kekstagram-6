import {renderMiniatures} from './render-miniatures.js';
import {createUniqueNumber} from './number-generators.js';
import {renderFullPicture} from './render-full.js';

const filtersController = function(data) {
  const defaultData = data;
  const randomData = [];
  const discussedData = defaultData.slice().sort((a, b) => b.comments.length - a.comments.length);

  const filtersElement = document.querySelector('.img-filters');
  const buttons = filtersElement.querySelectorAll('.img-filters__button');
  const filterDefaultButton = buttons[0];
  const filterRandomButton = buttons[1];
  const filterDiscussedButton = buttons[2];

  filtersElement.classList.remove('img-filters--inactive');

  filterDefaultButton.addEventListener('click', () => {
    if (!filterDefaultButton.classList.contains('img-filters__button--active')) {
      buttons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });
      filterDefaultButton.classList.add('img-filters__button--active');

      const picturesContainer = document.querySelector('.pictures');
      const allPicturesElement = picturesContainer.querySelectorAll('.picture');
      for (let i = 0; i < allPicturesElement.length; i++) {
        picturesContainer.removeChild(allPicturesElement[i]);
      }

      renderMiniatures(defaultData);
      renderFullPicture(picturesContainer, defaultData);
    }
  });

  filterRandomButton.addEventListener('click', () => {
    if (!filterRandomButton.classList.contains('img-filters__button--active')) {
      buttons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });
      filterRandomButton.classList.add('img-filters__button--active');

      const picturesContainer = document.querySelector('.pictures');
      const allPicturesElement = picturesContainer.querySelectorAll('.picture');
      for (let i = 0; i < allPicturesElement.length; i++) {
        picturesContainer.removeChild(allPicturesElement[i]);
      }
      randomData.length = 0;

      const objectNumber = createUniqueNumber(0,24);
      for (let i = 0; i < 10; i++) {
        randomData.push(defaultData[objectNumber()]);
      }
      renderMiniatures(randomData);
      renderFullPicture(picturesContainer, randomData);
    }
  });

  filterDiscussedButton.addEventListener('click', () => {
    if (!filterDiscussedButton.classList.contains('img-filters__button--active')) {
      buttons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });
      filterDiscussedButton.classList.add('img-filters__button--active');

      const picturesContainer = document.querySelector('.pictures');
      const allPicturesElement = picturesContainer.querySelectorAll('.picture');
      for (let i = 0; i < allPicturesElement.length; i++) {
        picturesContainer.removeChild(allPicturesElement[i]);
      }

      renderMiniatures(discussedData);
      renderFullPicture(picturesContainer, discussedData);
    }
  });
};

export {filtersController};
