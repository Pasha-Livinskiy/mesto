import {Card} from '../scripts/card.js';
import {FormValidator} from '../scripts/FormValidator.js';
const popupInputName = document.querySelector('#name-profile');
const popupInputJob = document.querySelector('#job-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupFormProfile = document.querySelector('#form-body-profile');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');  
const profileEdit = document.querySelector('#profile-edit');
const newCard = document.querySelector('#new-card');
const elementTable = document.querySelector('.element__table');
const elementTemplate = document.querySelector('.element-template').content;
const elementImage = document.querySelector('#enlarged-card');
const titleCard = document.querySelector('#name-card');
const linkCard = document.querySelector('#link-card');
const profileClose = document.querySelector('#close-profile');
const newCardClose = document.querySelector('#close-newcard');
const imgClose = document.querySelector('#close-img');
const popupImageSubtitle = document.querySelector('.popup__image-subtitle');
const modalImage = document.querySelector('.popup__image');
const formCard = document.forms.form2;
const buttonElementList= document.querySelector('#create');

const settings = {
  formSelector: '.popup__body',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

const initialCards = [
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

initialCards.forEach((item) => {
  elementTable.append(creatingNewCards(item));
});

function creatingNewCards(item) {
  const card = new Card(item,'.element-template', handleCardClick);
  const columnElement = card.generateCard();
  return columnElement;
}


function createCard(evt) {
  evt.preventDefault();
  const cardAdd = {name:titleCard.value, link:linkCard.value};
  elementTable.prepend(creatingNewCards(cardAdd));
  closePopup(newCard);
}

function editProfile(evt) {
  evt.preventDefault();
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileDescription.textContent;
  openPopup(profileEdit);
  profileFormValidator.clearValidation() 
}

/*function disableElementButton () {
  buttonElement.forEach(function(element) {
    element.classList.add('popup__button_disabled'); 
    element.disabled = true;
  });
}*/

function handleCardClick(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  popupImageSubtitle.textContent = name;
  openPopup(elementImage);
}

function submitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputJob.value;
  closePopup(profileEdit);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener ('keyup', closeWithEsc);
}

profileAddButton.addEventListener('click', function () {
  openPopup(newCard);
  placeFormValidator.clearValidation();
  formCard.reset();
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeWithEsc);
}

profileClose.addEventListener('click', function () {
  closePopup(profileEdit);
});

newCardClose.addEventListener('click', function () {
  closePopup(newCard);
});

imgClose.addEventListener('click', function () {
  closePopup(elementImage);
});

function targetClose (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

profileEdit.addEventListener('click', targetClose);
newCard.addEventListener('click', targetClose);
elementImage.addEventListener('click', targetClose);

profileEditButton.addEventListener('click', editProfile);
popupFormProfile.addEventListener('submit', submitForm);
formCard.addEventListener('submit', createCard);

const formElementPlace = document.querySelector('#form-body-newcard');

const placeFormValidator = new FormValidator(settings, formElementPlace);

placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(settings, popupFormProfile);

profileFormValidator.enableValidation();
