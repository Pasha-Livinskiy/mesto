import {Card} from '../scripts/components/card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import '../pages/index.css'; 

import {
  popupFormProfile, 
  profileAddButton, 
  profileEditButton, 
  profileEdit, 
  newCard, 
  elementTable, 
  elementImage, 
  popupInputName, 
  popupInputJob, 
  settings,  
  profileAvatarEditButton, 
  avatarEditPopup, 
  spinner, 
  cardDeletePopup} from "../scripts/utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-49/",
  token: "a29c64ab-90ad-4c85-9b43-2da7686f936d",
});


let userId, addCardLike, deleteCardLike;

const initialData = [api.getUserInfo(), api.getInitialCards()];


const popupWithImage = new PopupWithImage(elementImage);
popupWithImage.setEventListeners();

//открытие фото
const openImagePopup = (evt) => {
  const data = {
   link: evt.target.src,
    name: evt.target
      .closest(".element__list")
      .querySelector(".element__title").textContent,
  };
  popupWithImage.open(data);
   console.log(data);
};


const deleteCard = (data) => {
  deleteCardPopup.data = data;
  deleteCardPopup.open();
};


//* Создание карточки
const createCard = (data) => {
  const card = new Card( data, ".element-template", userId, openImagePopup, deleteCard, (addCardLike = (data) => {
      return api.addCardLike(data);
    }),
    (deleteCardLike = (data) => {
      return api.deleteCardLike(data);
    })
  );
  const cardElement = card.generateCard(data);
  return cardElement;
};

//* Попап удаления карточки
const deleteCardPopup = new PopupWithConfirmation(cardDeletePopup, {
  submitForm: (data) => {
    api
      .deleteCard(data.cardId)
      .then(() => {
        data.card.remove();
        deleteCardPopup.close();
      })
      .catch((err) => console.log(err));
  },
});
deleteCardPopup.setEventListeners();

const section = new Section({ renderItems: (data) => {
  section.addItem(createCard(data));
}
}, elementTable
);

const userInfo = new UserInfo( '.profile__name', '.profile__description', '.profile__avatar');


//Попап редактирования профиля
 const editPopup = new PopupWithForm(profileEdit, { submitForm: (data, button) => {
  addSpinner(button);
   api
      .editProfile(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        editPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeSpinner(button);
      });
}});
editPopup.setEventListeners();

//* Попап добавления карточки
const addNewCardPopup = new PopupWithForm(newCard, { submitForm: (data, button) => {
  addSpinner(button);
  const item = {
      name: data.name,
      link: data.link,
    };
    api
      .addNewCard(item)
      .then((res) => {
        section.addItem(createCard(res), true);
        addNewCardPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeSpinner(button);
      });
}},
'.element-template'
);
addNewCardPopup.setEventListeners();


// Попап редактирования аватарки
const avatarEdit = new PopupWithForm(avatarEditPopup, {
  submitForm: (data, button) => {
    addSpinner(button);
    api
      .editAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        avatarEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeSpinner(button);
      });
  },
});
avatarEdit.setEventListeners();

profileAvatarEditButton.addEventListener("click", () => {
  avatarEdit.open();
  avatarFormValidator.clearValidation()
});

const avatarFormValidator = new FormValidator(settings, avatarEditPopup);

avatarFormValidator.enableValidation();

function addSpinner(elem) {
  elem.textContent = "Сохранение...";
  elem.append(spinner);
};

function removeSpinner(elem) {
  elem.textContent = "Сохранить";
};


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
});


const formElementPlace = document.querySelector('#form-body-newcard');

const placeFormValidator = new FormValidator(settings, formElementPlace);

placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(settings, popupFormProfile);

profileFormValidator.enableValidation();


// Запрос данных сервера для превой отрисовки страницы
Promise.all(initialData)
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    section.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
