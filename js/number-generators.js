const createRandomNumber = function(a,b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const createUniqueNumber = function(a, b) {
  const previousValues = [];

  return function () {
    let currentValue = createRandomNumber(a, b);
    if (previousValues.length >= Math.abs(b - a) + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = createRandomNumber(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {createRandomNumber, createUniqueNumber};
