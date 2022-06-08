let popup = document.querySelector('.popup');
let popupBody = document.querySelector('.popup__body'); // Само окно
let popupLinkButtons = document.querySelectorAll('.popup-link'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

popupLinkButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popup.classList.add('active'); // Добавляем класс 'active' для фона
        popupBody.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popup.classList.remove('active'); // Убираем активный класс с фона
    popupBody.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup) { // Если цель клика - фот, то:
        popup.classList.remove('active'); // Убираем активный класс с фона
        popupBody.classList.remove('active'); // И с окна
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
