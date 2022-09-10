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

let userId;

const initialData = [api.getUserInfo(), api.getInitialCards()];


const popupWithImage = new PopupWithImage(elementImage);
popupWithImage.setEventListeners();

//открытие фото
/*const openImagePopup = (data) => {
  const dataa = {
   link: data.target.src,
    name: data.target
      .closest(".element__list")
      .querySelector(".element__title").textContent,
  };
  popupWithImage.open(dataa);
   console.log(dataa);
};


const deleteCard = (data) => {
  deleteCardPopup.data = data;
  deleteCardPopup.open();
};
*/

//////////////////////////////////////////////////
const createCard = (data) => {
  const card = new Card({ 
    data: data,
    cardSelector: ".element-template",
    userId: userId,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.addCardLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteCardLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};
///////////////////////////////////////////////////
//* Попап удаления карточки
const deleteCardPopup = new PopupWithConfirmation(cardDeletePopup);
deleteCardPopup.setEventListeners();

/*const section = new Section({ renderItems: (data) => {
  section.addItem(createCard(data));
}
}, elementTable
);*/

const section = new Section({
  renderItems: (card) => {
    section.addItem(createCard(card));
  },
}, '.element__table');

const userInfo = new UserInfo( '.profile__name', '.profile__description', '.profile__avatar');


//Попап редактирования профиля
 const popupEdit = new PopupWithForm(profileEdit, { 
  submitForm: (data) => {
    popupEdit.loading(true);
    api.editProfile(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupEdit.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupEdit.loading(false);
      });
  }
 });
popupEdit.setEventListeners();

//* Попап добавления карточки
const addNewCardPopup = new PopupWithForm(newCard, { 
  submitForm: (data) => {
    addNewCardPopup.loading(true);
    api.addNewCard(data)
      .then((data) => {
        section.addItem(createCard(data));
        addNewCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addNewCardPopup.loading(false);
      });
}},
'.element-template'
);
addNewCardPopup.setEventListeners();


// Попап редактирования аватарки
const avatarEdit = new PopupWithForm(avatarEditPopup, {
  submitForm: (data) => {
    avatarEdit.loading(true);
    api
      .editAvatar(data)
      .then((data) => {
        userInfo.setUserAvatar(data);
        avatarEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        avatarEdit.loading(false);
      });
  },
});
avatarEdit.setEventListeners();

const popupAvatar = document.querySelector('#popup-avatar');

const avatarFormValidator = new FormValidator(settings, popupAvatar);
avatarFormValidator.enableValidation();

profileAvatarEditButton.addEventListener("click", () => {
  avatarEdit.open();
  avatarFormValidator.clearValidation()
});

profileEditButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo()
  popupInputName.value = data.name;
  popupInputJob.value = data.about;
  popupEdit.open();
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
    userInfo.setUserAvatar(userData);//
    section.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
