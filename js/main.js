import {renderMiniatures, picturesContainer} from './render-miniatures.js';
import {renderFullPicture} from './render-full.js';
import {formController} from './picture-editor.js';
import {getData} from './api.js';
import {filtersController} from './filters.js';
import {debounce} from './debounce.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderFullPicture(picturesContainer, data);
    debounce(filtersController(data), 500);
  });

formController();
