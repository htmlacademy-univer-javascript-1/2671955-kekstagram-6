const closeEditor = function () {
  const body = document.querySelector('body');
  const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');
  const imageScaleElement = imageUploadOverlayElement.querySelector('.scale__control--value');
  const hashtagFieldElement = imageUploadOverlayElement.querySelector('.text__hashtags');
  const commentFieldElement = imageUploadOverlayElement.querySelector('.text__description');
  const scaleBiggerButtonElement = imageUploadOverlayElement.querySelector('.scale__control--bigger');
  const scaleSmallerButtonElement = imageUploadOverlayElement.querySelector('.scale__control--smaller');
  const sliderElement = document.querySelector('.effect-level__slider');
  const imagePreviewElement = document.querySelector('.img-upload__preview');

  imageUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.getElementById('upload-file').value = '';
  imageScaleElement.setAttribute('value', '100%');
  hashtagFieldElement.value = '';
  commentFieldElement.value = '';

  scaleSmallerButtonElement.disabled = false;
  scaleBiggerButtonElement.disabled = false;

  sliderElement.noUiSlider.destroy();
  imagePreviewElement.style.filter = '';
};

export {closeEditor};
