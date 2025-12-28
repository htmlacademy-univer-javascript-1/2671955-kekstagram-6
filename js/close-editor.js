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
  const effectsListElement = document.querySelectorAll('.effects__item');

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
  imagePreviewElement.querySelector('img').src = '';
  imagePreviewElement.style.transform = 'scale(1)';

  effectsListElement.forEach((effect) => {
    effect.querySelector('.effects__preview').style.backgroundImage = '';
  });
};

export {closeEditor};
