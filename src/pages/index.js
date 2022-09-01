import {Card} from '../scripts/components/card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js'
import UserInfo from '../scripts/components/UserInfo.js'
import '../pages/index.css'; 

import {popupFormProfile, profileAddButton, profileEditButton, profileEdit, newCard, elementTable, elementImage, popupImageSubtitle, modalImage, popupInputName, popupInputJob, settings, initialCards} from "../scripts/utils/constants.js";

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
  popupInputJob.value = data.about;
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
