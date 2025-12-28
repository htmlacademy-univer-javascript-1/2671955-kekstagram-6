import {renderMiniatures, picturesContainer} from './render-miniatures.js';
import {renderFullPicture} from './render-full.js';
import {formController} from './picture-editor.js';
import {getData} from './api.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderFullPicture(picturesContainer, data);
  });

formController();
