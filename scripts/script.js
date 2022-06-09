let popup = document.querySelector('.popup');
let popupBody = document.querySelector('.popup__body'); 
let popupLinkButtons = document.querySelectorAll('.popup-link'); 
let closePopupButton = document.querySelector('.close-popup'); 

popupLinkButtons.forEach((button) => { 
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        popup.classList.add('active'); 
        popupBody.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => { 
    popup.classList.remove('active'); 
    popupBody.classList.remove('active'); 
});

document.addEventListener('click', (e) => { 
    if(e.target === popup) { 
        popup.classList.remove('active'); 
        popupBody.classList.remove('active'); 
    }
});



function qs(selector) {
  return document.querySelector(selector);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  qs('.profile__name').textContent = qs('.popup__input').value;
  qs('.profile__description').textContent = qs('.popup__input').value;
  closeEditForm();
}

function closeEditForm() {}

document.getElementById('submit').addEventListener('click', formSubmitHandler);
