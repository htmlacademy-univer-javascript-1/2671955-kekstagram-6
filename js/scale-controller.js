const imageScaleController = function() {
  const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');
  const imagePreviewElement = imageUploadOverlayElement.querySelector('.img-upload__preview');
  const scaleBiggerButtonElement = imageUploadOverlayElement.querySelector('.scale__control--bigger');
  const scaleSmallerButtonElement = imageUploadOverlayElement.querySelector('.scale__control--smaller');
  const imageScaleElement = imageUploadOverlayElement.querySelector('.scale__control--value');
  let currentScale = parseInt(imageScaleElement.value.slice(0, -1), 10);
  const SCALE_STEP = 25;

  const checkScale = function (scale) {
    if (scale === 25) {
      scaleSmallerButtonElement.disabled = true;
      scaleBiggerButtonElement.disabled = false;
    } else if (scale === 100) {
      scaleBiggerButtonElement.disabled = true;
      scaleSmallerButtonElement.disabled = false;
    } else {
      scaleSmallerButtonElement.disabled = false;
      scaleBiggerButtonElement.disabled = false;
    }
  };

  checkScale(currentScale);

  scaleBiggerButtonElement.addEventListener('click', () => {
    currentScale += SCALE_STEP;
    imageScaleElement.setAttribute('value', `${currentScale}%`);
    imagePreviewElement.style.transform = `scale(${1 - (1 - currentScale/100)})`;
    checkScale(currentScale);
  });

  scaleSmallerButtonElement.addEventListener('click', () => {
    currentScale -= SCALE_STEP;
    imageScaleElement.setAttribute('value', `${currentScale}%`);
    imagePreviewElement.style.transform = `scale(${1 - (1 - currentScale/100)})`;
    checkScale(currentScale);
  });
};

export {imageScaleController};
