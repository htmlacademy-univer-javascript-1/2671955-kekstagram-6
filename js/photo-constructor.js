import {createRandomNumber, createUniqueNumber} from './number-generators.js';
import {createComment} from './comment-constructor.js';

const fileId = createUniqueNumber(1, 25);
const photoId = createUniqueNumber(1, 25);


const createPhoto = () => ({
  id: photoId(),
  url: `photos/${fileId()}.jpg`,
  description: 'Описание картинки',
  likes: createRandomNumber(15, 200),
  comments: Array.from({length: createRandomNumber(0, 30)}, createComment)
});

const photo = Array.from({length: 25}, createPhoto);

export {photo};
