const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button'); 
const closePopupButton = document.querySelector('.close-popup'); 
const inputName = document.querySelectorAll('#input-name');
const inputJob = document.querySelectorAll('#input-job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupBody = document.querySelector('.popup__body');


function popupOpen() {
    if (popup.classList.contains('popup_opened')) {
       (popup.classList.toggle('popup_opened'))
    } else {
        popup.classList.toggle('popup_opened');
        inputName[0].value = profileName.textContent;
        inputJob[0].value = profileDescription.textContent;
    };
};

function popupClose() {
    popup.classList.remove('popup_opened')
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName[0].value;
    profileDescription.textContent = inputJob[0].value;
};

profileEditButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);
popupBody.addEventListener('submit', formSubmitHandler);
popupBody.addEventListener('click', formSubmitHandler);










