let array = [];


const messagesList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const nameList = ['Степан', 'Юля', 'Матвей', 'Аня' ,'Кирилл', 'Женя', 'Дмитрий', 'Ксюша', 'Илья', 'Влада', 'Димон', 'Настя'];


const numberGenerator = function(a,b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const uniqueNumberGenerator = function(a, b) {
  const previousValues = [];

  return function () {
    let currentValue = numberGenerator(a, b);
    if (previousValues.length >= Math.abs(b - a) + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = numberGenerator(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


const commentMessage = function(numberOfMessages) {
  let string = '';
  if (numberOfMessages === 2) {
    string = `${messagesList[1]} ${messagesList[numberGenerator(2, messagesList.length - 1)]}`;
  }
  else {
    string = `${messagesList[numberGenerator(0, messagesList.length - 1)]}`;
  }
  return string;
};

const photoId = uniqueNumberGenerator(1, 25);
const commentId = uniqueNumberGenerator(1, 10000);
const objectId = uniqueNumberGenerator(1, 25);

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${numberGenerator(1, 6)}.svg`,
  message: commentMessage(numberGenerator(1,2)),
  name: nameList[numberGenerator(0, nameList.length - 1)]
});


const createObject = () => ({
  id: objectId(),
  url: `photos/${photoId()}.jpg`,
  description: 'Описание картинки',
  likes: numberGenerator(15, 200),
  comments: Array.from({length: numberGenerator(0, 30)}, createComment)
});

array = Array.from({length: 25}, createObject);
console.log(array);
