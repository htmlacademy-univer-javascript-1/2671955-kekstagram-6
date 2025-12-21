import {renderMiniatures, picturesContainer} from './render-miniatures.js';
import {renderFullPicture} from './render-full.js';
import {formController} from './picture-editor.js';

renderMiniatures();
renderFullPicture(picturesContainer);
formController();
