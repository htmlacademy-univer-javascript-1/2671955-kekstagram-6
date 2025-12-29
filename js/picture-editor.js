import {closeEditor} from './close-editor.js';
import {imageScaleController} from './scale-controller.js';
import {slider} from './slider.js';
import {sendData} from './api.js';

const formController = function () {
  const body = document.querySelector('body');
  const form = document.querySelector('.img-upload');
  const imageUploadElement = document.querySelector('.img-upload__input');
  const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');
  const imagePreviewElement = imageUploadOverlayElement.querySelector('.img-upload__preview img');
  const imageUploadCancelElement = document.querySelector('.img-upload__cancel');
  const submitButton = form.querySelector('.img-upload__submit');
  const commentFieldElement = form.querySelector('.text__description');
  const effectsListElement = form.querySelectorAll('.effects__item');


  const validator = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'text-error'
  });


  const hashtagFieldElement = imageUploadOverlayElement.querySelector('.text__hashtags');

  validator.addValidator(hashtagFieldElement, (value) => {
    const hashTagsArray = value.toLowerCase().split(' ');
    const hashtagTemplate = /^#[a-zа-яё0-9]{1,19}$/i;

    if (value.trim() === '') {
      return true;
    }

    if (hashTagsArray.length > 5) {
      return false;
    }

    const uniqueHashTags = new Set(hashTagsArray);
    if (uniqueHashTags.size !== hashTagsArray.length) {
      return false;
    }

    for (const hashtag of hashTagsArray) {
      if (hashtagTemplate.test(hashtag) === false) {
        return false;
      }
    }
    return true;
  },
  'Хэштег должен начинаться с # и содержать только буквы и цифры (не более 20). Хештеги не должны повторяться, максимум 5 хэштегов, разделенных пробелами'
  );


  imageUploadElement.addEventListener('change', (evt) => {
    imageUploadOverlayElement.classList.remove('hidden');
    body.classList.add('modal-open');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      imagePreviewElement.src = reader.result;
      effectsListElement.forEach((effect) => {
        effect.querySelector('.effects__preview').style.backgroundImage = `url(${reader.result})`;
      });
    });
    reader.readAsDataURL(evt.target.files[0]);

    imageScaleController();
    slider();
  }
  );

  imageUploadCancelElement.addEventListener('click', closeEditor);

  const closeOnEsc = function(evt) {
    if (evt.key === 'Escape') {
      closeEditor();
    }
  };
  document.addEventListener('keydown', closeOnEsc);

  form.addEventListener('input', ()=> {
    submitButton.disabled = !validator.validate();
  });

  const dontCloseOnFocus = (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  };

  hashtagFieldElement.addEventListener('keydown', dontCloseOnFocus);
  commentFieldElement.addEventListener('keydown', dontCloseOnFocus);


  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    submitButton.disabled = true;
    sendData(formData);
    document.removeEventListener('keydown', closeOnEsc);
  });
};


export {formController};
