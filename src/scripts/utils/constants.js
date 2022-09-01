export const popupFormProfile = document.querySelector('#form-body-profile');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');  
export const profileEdit = document.querySelector('#profile-edit');
export const newCard = document.querySelector('#new-card');
export const elementTable = document.querySelector('.element__table');
export const elementImage = document.querySelector('#enlarged-card');
export const popupImageSubtitle = document.querySelector('.popup__image-subtitle');
export const modalImage = document.querySelector('.popup__image');
export const popupInputName = document.querySelector('#name-profile');
elementImage, popupImageSubtitle, modalImage, popupInputName, popupInputJob, settings, initialCards
export const popupInputJob = document.querySelector('#job-profile');
export const settings = {
  formSelector: '.popup__body',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];