export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
 
  _getTemplate() {
    const columnElement = document.querySelector(this._cardSelector).content.querySelector('.element__list').cloneNode(true);
    return columnElement;
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._elementImg = this._element.querySelector('.element__img');
    this._elementImg.src = this._link;
    this._elementImg.alt = `${this._name}`;
    this._setEventListeners()
    
    return this._element;
  }

  _activeLike(evt) {
    evt.target.classList.toggle('element__like-button_active'); 
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });

    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {  
      this._activeLike(evt);
    });
  
    this._element.querySelector('.element__trash').addEventListener('click', (evt) => { 
      this._removeElement();
    });
  }
  
  _removeElement() {
   this._element.remove();
  }
}  