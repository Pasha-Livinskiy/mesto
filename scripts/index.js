const popupAll = document.querySelector('.popup');

const popupInputName = document.querySelector('#name-profile');
const popupClose = document.querySelector('.popup__close');
const popupInputJob = document.querySelector('#job-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupForm = document.querySelector('.popup__body');


//const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');  


//const popupConteiner = document.querySelector('.popup__conteiner');
const buttonCreate = document.querySelector('#create');

const profileEdit = document.querySelector('#profile-edit');
const newCard = document.querySelector('#new-card');

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


const popupImageSubtitle = document.querySelector('.popup__image-subtitle');


const modalImage = document.querySelector('.popup__image');

//const elementImg = document.querySelector('.element__img');


initialCards.forEach(function (item) { 
  const newElement = createPlaceCard(item); 
  elementTable.append(newElement); 
}); 

function createPlaceCard(item) { 
  const columnElement = elementTemplate.querySelector('.element__list').cloneNode(true); 
  columnElement.querySelector('.element__title').textContent = item.name; 
  columnElement.querySelector('.element__trash').addEventListener('click', function (evt) { 
    const targetClick = evt.target; 
    const elementTrash = targetClick.closest('.element__list'); 
    elementTrash.remove(); 
  }); 
  const elementImg = columnElement.querySelector('.element__img');
   elementImg.src = item.link;
   elementImg.alt = item.name;
   elementImg.addEventListener('click', function () {
    elementImage.classList.add('popup_opened');
    modalImage.src = item.link;
    modalImage.alt = item.name;
    popupImageSubtitle.textContent = item.name;
  });


  //лайки 
  columnElement.querySelector('.element__like-button').addEventListener('click', function (evt) { 
    evt.target.classList.toggle('element__like-button_active'); 
  });  
  //elementTable.prepend(columnElement); 
  return columnElement; 
}

buttonCreate.addEventListener('click', function (evt) {
  evt.preventDefault();
  const cardAdd = {name:titleCard.value, link:linkCard.value};
  elementTable.prepend(createPlaceCard(cardAdd));
  titleCard.value = '';
  linkCard.value = '';
  closePopup(newCard);
});

function savingData(evt) {
  evt.preventDefault();
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileDescription.textContent;
  //document.addEventListener ('keyup', closeWithEsc);
  //openedPopup();
}

/*function closePopup() {
  newCard.classList.remove('popup_opened');
  profileEdit.classList.remove('popup_opened');
  elementImage.classList.remove('popup_opened');
  //document.removeEventListener ('keyup', closeWithEsc);
}*/

/*document.addEventListener('click', function (e) {
  if (e.target.dataset.toggle === 'profile-edit') {
    profileEdit.classList.add('popup_opened');
  } else if (e.target.dataset.toggle === 'new-card') {
    newCard.classList.add('popup_opened');
  }
});*/

const formOpen = document.querySelector('#form-open');
const newPopap = document.querySelector('#new-popap');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
formOpen.addEventListener('click', function () {
  openPopup(profileEdit);
});

newPopap.addEventListener('click', function () {
  openPopup(newCard);
});

const profileClose = document.querySelector('#close-profile');
const newCardClose = document.querySelector('#close-newcard');
const imgClose = document.querySelector('#close-img');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', function () {
  closePopup(popupAll);
});

profileClose.addEventListener('click', function () {
  closePopup(profileEdit);
});

newCardClose.addEventListener('click', function () {
  closePopup(newCard);
});

imgClose.addEventListener('click', function () {
  closePopup(elementImage);
});

function submitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputJob.value;
  closePopup(profileEdit);
}

/*document.addEventListener('click', (e) => { 
  if(e.target === profileEdit) { 
    profileEdit.classList.remove('popup_opened'); 
  }
  if(e.target === newCard) { 
    newCard.classList.remove('popup_opened'); 
  }
  if(e.target === elementImage) {
    elementImage.classList.remove('popup_opened');
  }
});*/

/*const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupClose(popupOpened);
  }
}*/
profileEditButton.addEventListener('click', savingData);
popupForm.addEventListener('submit', submitForm);
//popupClose.forEach(b=>b.addEventListener('click', closePopup(popup)));
//popupClose.addEventListener('click', closePopup());
















