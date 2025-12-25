const slider = function() {
  const imagePreviewElement = document.querySelector('.img-upload__preview');

  const sliderContainerElement = document.querySelector('.img-upload__effect-level');
  const sliderElement = document.querySelector('.effect-level__slider');
  const effectValueElement = document.querySelector('.effect-level__value');

  const chromeEffectElement = document.getElementById('effect-chrome');
  const sepiaEffectElement = document.getElementById('effect-sepia');
  const marvinEffectElement = document.getElementById('effect-marvin');
  const phobosEffectElement = document.getElementById('effect-phobos');
  const heatEffectElement = document.getElementById('effect-heat');
  const noneEffectElement = document.getElementById('effect-none');

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 0,
    },
    start: 0,
    connect: 'lower',
  });

  sliderElement.classList.add('hidden');
  sliderContainerElement.classList.add('hidden');


  chromeEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.remove('hidden');
      sliderContainerElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValueElement.setAttribute('value', sliderElement.noUiSlider.get());
        imagePreviewElement.style.filter = `grayscale(${effectValueElement.value})`;
      });
    }
  });

  sepiaEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.remove('hidden');
      sliderContainerElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValueElement.setAttribute('value', sliderElement.noUiSlider.get());
        imagePreviewElement.style.filter = `sepia(${effectValueElement.value})`;
      });
    }
  });

  marvinEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.remove('hidden');
      sliderContainerElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 0,
        step: 1,
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValueElement.setAttribute('value', sliderElement.noUiSlider.get());
        imagePreviewElement.style.filter = `invert(${effectValueElement.value}%)`;
      });
    }
  });

  phobosEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.remove('hidden');
      sliderContainerElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValueElement.setAttribute('value', sliderElement.noUiSlider.get());
        imagePreviewElement.style.filter = `blur(${effectValueElement.value}px)`;
      });
    }
  });

  heatEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.remove('hidden');
      sliderContainerElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValueElement.setAttribute('value', sliderElement.noUiSlider.get());
        imagePreviewElement.style.filter = `brightness(${effectValueElement.value})`;
      });
    }
  });

  noneEffectElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.classList.add('hidden');
      sliderContainerElement.classList.add('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 0,
        },
        start: 0,
      });
      imagePreviewElement.style.filter = '';
    }
  });
};


export {slider};
