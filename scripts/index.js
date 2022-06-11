const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button'); 
const closePopup = document.querySelector('.popup__close'); 
const popupBodyInputName = document.querySelector('.popup__body_input-name');
const popupBodyInputJob = document.querySelector('.popup__body_input-job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupBody = document.querySelector('.popup__body');
const popupButton = document.querySelector('.popup__button');


function popupProfile() {
    if (popup.classList.contains('popup_opened')) {
       (popup.classList.toggle('popup_opened'))
    } else {
        popup.classList.toggle('popup_opened');
        popupBodyInputName.value = profileName.textContent;
        popupBodyInputJob.value = profileDescription.textContent;
        //document.addEventListener ('keyup', closeWithEsc);
    };
};

function popupClose() {
    popup.classList.remove('popup_opened');
    //document.removeEventListener ('keyup', closeWithEsc);
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupBodyInputName.value;
    profileDescription.textContent = popupBodyInputJob.value;
    popupClose()
};

document.addEventListener('click', (e) => { 
    if(e.target === popup) { 
        popup.classList.remove('popup_opened'); 
    }
});

/*const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupClose(popupOpened);
  }
}*/


profileEditButton.addEventListener('click', popupProfile);
closePopup.addEventListener('click', popupClose);
popupBody.addEventListener('submit', formSubmitHandler);











