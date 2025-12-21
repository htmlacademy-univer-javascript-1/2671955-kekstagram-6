const closeEditor = function () {
  const body = document.querySelector('body');
  const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');
  const imageScaleElement = imageUploadOverlayElement.querySelector('.scale__control--value');
  const hashtagFieldElement = imageUploadOverlayElement.querySelector('.text__hashtags');
  const commentFieldElement = imageUploadOverlayElement.querySelector('.text__description');

  imageUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.getElementById('upload-file').value = '';
  imageScaleElement.setAttribute('value', '100%');
  hashtagFieldElement.value = '';
  commentFieldElement.value = '';
};

export {closeEditor};
