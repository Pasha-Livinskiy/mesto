
const profileEditButton = document.querySelector('.profile__edit-button');  
const popupInputName = document.querySelector('#name-profile');
const closePopup = document.querySelectorAll('.popup__close');
const popupInputJob = document.querySelector('#job-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupBody = document.querySelector('.popup__body');

//const popupConteiner = document.querySelector('.popup__conteiner');
const popupButton = document.querySelector('#create');

const profileEdit = document.querySelector('#profile-edit');
const newCard = document.querySelector('#new-card');

const profileAddButton = document.querySelector('.profile__add-button');

const elementTable = document.querySelector('.element__table');
const elementTemplate = document.querySelector('.element-template').content;

//const elementColumn = document.querySelector('.element__list');

const elementImage = document.querySelector('#enlarged-card');

const titleCard = document.querySelector('#name-card');
const linkCard = document.querySelector('#link-card');

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

initialCards.forEach(function (item) {
  const newElement = addElement(item);
  elementTable.append(newElement);
});

function addElement(item) {
  const columnElement = elementTemplate.querySelector('.element__list').cloneNode(true);
  
  columnElement.querySelector('.element__img').src = item.link;
  columnElement.querySelector('.element__title').textContent = item.name;

  columnElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    const targetClick = evt.target;
    const elementTrash = targetClick.closest('.element__list');
    elementTrash.remove();
  });

  columnElement.querySelector('.element__img').addEventListener('click', function () {
    const popupImageSubtitle = document.querySelector('.popup__image-subtitle');
    const modalImage = document.querySelector('.popup__image');
    elementImage.classList.add('popup_opened');
    modalImage.src = item.link;
    popupImageSubtitle.textContent = item.name;
  });

  //лайки
  columnElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  }); 

  //elementTable.prepend(columnElement);
  return columnElement;
}

popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  const cardAdd = {name:titleCard.value, link:linkCard.value};
  elementTable.prepend(addElement(cardAdd));
  titleCard.value = '';
  linkCard.value = '';
  popupClose();
});

function popupProfile() {
  if (profileEdit.classList.contains('popup_opened')) {
    (profileEdit.classList.toggle('popup_opened'));
  } else {
    profileEdit.classList.toggle('popup_opened');
      popupInputName.value = profileName.textContent;
      popupInputJob.value = profileDescription.textContent;
        //document.addEventListener ('keyup', closeWithEsc);
  }
}

function popupNewCard() {
  if (newCard.classList.contains('popup_opened')) {
    (newCard.classList.toggle('popup_opened'));
  } else {
    newCard.classList.toggle('popup_opened');
  }
}

function popupClose() {
  newCard.classList.remove('popup_opened');
  profileEdit.classList.remove('popup_opened');
  elementImage.classList.remove('popup_opened');
  //document.removeEventListener ('keyup', closeWithEsc);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputJob.value;
  popupClose();
}

document.addEventListener('click', (e) => { 
  if(e.target === profileEdit) { 
    profileEdit.classList.remove('popup_opened'); 
  }
  if(e.target === newCard) { 
    newCard.classList.remove('popup_opened'); 
  }
});

/*const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupClose(popupOpened);
  }
}*/

profileEditButton.addEventListener('click', popupProfile);
profileAddButton.addEventListener('click', popupNewCard); 
popupBody.addEventListener('submit', formSubmitHandler);
closePopup.forEach(b=>b.addEventListener('click', popupClose));














