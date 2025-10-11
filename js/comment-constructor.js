import {createRandomNumber, createUniqueNumber} from './number-generators';
import {MESSAGES, USERNAMES} from './constants';


const createMessage = function(numberOfMessages) {
  let string = '';
  if (numberOfMessages === 2) {
    string = `${MESSAGES[1]} ${MESSAGES[createRandomNumber(2, MESSAGES.length - 1)]}`;
  }
  else {
    string = `${MESSAGES[createRandomNumber(0, MESSAGES.length - 1)]}`;
  }
  return string;
};

const commentId = createUniqueNumber(1, 10000);

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${createRandomNumber(1, 6)}.svg`,
  message: createMessage(createRandomNumber(1,2)),
  name: USERNAMES[createRandomNumber(0, USERNAMES.length - 1)]
});

export {createComment};
