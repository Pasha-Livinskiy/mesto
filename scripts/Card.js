export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick
  }
 
  _getTemplate() {
    const columnElement = document.querySelector(this._cardSelector).content.querySelector('.element__list').cloneNode(true);
    return columnElement;
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    const elementImg = this._element.querySelector('.element__img');
    elementImg.src = this._link;
    elementImg.alt = `${this._name}`;
    
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });

    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => { 
      evt.target.classList.toggle('element__like-button_active'); 
    });
  
    this._element.querySelector('.element__trash').addEventListener('click', function (evt) { 
      const targetClick = evt.target; 
      const elementTrash = targetClick.closest('.element__list'); 
      elementTrash.remove(); 
    });
  }
}  