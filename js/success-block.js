const sendSuccessBlock = function() {
  const template = document.querySelector('#success').content;
  const newBlock = template.cloneNode(true);
  const button = newBlock.querySelector('.success__button');
  const body = document.querySelector('body');

  body.append(newBlock);
  const successBlock = document.querySelector('.success');

  button.addEventListener('click', () => {
    body.removeChild(successBlock);
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      body.removeChild(successBlock);
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (successBlock.contains(evt.target) && evt.target !== button) {
      body.removeChild(successBlock);
    }
  }, {once: true});
};

export {sendSuccessBlock};
