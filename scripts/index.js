const popupInputName = document.querySelector('#name-profile');
const popupInputJob = document.querySelector('#job-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupFormProfile = document.querySelector('#form-body-profile');
const pupupFormCard = document.querySelector('#form-body-newcard');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');  
const buttonCreate = document.querySelector('#create');
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
    modalImage.src = item.link;
    modalImage.alt = item.name;
    popupImageSubtitle.textContent = item.name;
    openPopup (elementImage);
  });
  //лайки 
  columnElement.querySelector('.element__like-button').addEventListener('click', function (evt) { 
    evt.target.classList.toggle('element__like-button_active'); 
  });  
  return columnElement; 
}

/*buttonCreate.addEventListener('click', function (evt) {
  evt.preventDefault();
  const cardAdd = {name:titleCard.value, link:linkCard.value};
  elementTable.prepend(createPlaceCard(cardAdd));
  titleCard.value = '';
  linkCard.value = '';
  closePopup(newCard);
});*/

function createCard(evt) {
  evt.preventDefault();
  const cardAdd = {name:titleCard.value, link:linkCard.value};
  elementTable.prepend(createPlaceCard(cardAdd));
  closePopup(newCard);
  savingCard();
}

function savingCard(evt) {
  titleCard.value = '';
  linkCard.value = '';
}

function savingData(evt) {
  evt.preventDefault();
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileDescription.textContent;
  openPopup(profileEdit);
}

function submitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputJob.value;
  closePopup(profileEdit);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

profileAddButton.addEventListener('click', function () {
  openPopup(newCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

profileEditButton.addEventListener('click', savingData);
popupFormProfile.addEventListener('submit', submitForm);
buttonCreate.addEventListener('click', createCard);
//pupupFormCard.addEventListener('submit', savingCard);
















