import {Card} from '../scripts/card.js';
import {FormValidator} from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js'
import PopupWithForm from '../scripts/PopupWithForm.js'
import UserInfo from '../scripts/UserInfo.js'
import '../pages/index.css'; 

const popupFormProfile = document.querySelector('#form-body-profile');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');  
const profileEdit = document.querySelector('#profile-edit');
const newCard = document.querySelector('#new-card');
const elementTable = document.querySelector('.element__table');
const elementImage = document.querySelector('#enlarged-card');
const popupImageSubtitle = document.querySelector('.popup__image-subtitle');
const modalImage = document.querySelector('.popup__image');
const popupInputName = document.querySelector('#name-profile');
const popupInputJob = document.querySelector('#job-profile');
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

const createCard = (data) => {
  const card = new Card(data, ".element-template", handleCardClick);
  const cardElement = card.generateCard(data);
  return cardElement;
};

const userInfo = new UserInfo( '.profile__name', '.profile__description');


const section = new Section({ renderItems: (name, link) => {
const defaultCard = createCard(name, link, '.element-template');
section.addItem(defaultCard);
}
}, elementTable
);

 section.renderItems(initialCards);

 const editPopup = new PopupWithForm(profileEdit, { submitForm: (data) => {
  userInfo.setUserInfo(data);
  editPopup.close();
}});
editPopup.setEventListeners();

//* Попап добавления карточки
const addNewCardPopup = new PopupWithForm(newCard, { submitForm: (name, link) => {
  section.addItem(createCard(name, link))
  addNewCardPopup.close();
}},
'.element-template'
);
addNewCardPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo()
  popupInputName.value = data.name;
  popupInputJob.value = data.name;
  editPopup.open();
  profileFormValidator.clearValidation()
});

profileAddButton.addEventListener("click", () => {
  addNewCardPopup.open();
  placeFormValidator.clearValidation();
  //formCard.reset();
});
const popupWithImage = new PopupWithImage(elementImage);

popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  popupImageSubtitle.textContent = name;
  popupWithImage.open(name, link);
}

const formElementPlace = document.querySelector('#form-body-newcard');

const placeFormValidator = new FormValidator(settings, formElementPlace);

placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(settings, popupFormProfile);

profileFormValidator.enableValidation();
