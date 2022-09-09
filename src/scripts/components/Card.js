export class Card {
  constructor( data, cardSelector, userId, openImagePopup, deleteCard, addCardLike, deleteCardLike) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._userId = userId; 
    this._cardId = data._id; 
    this._cardOwnerId = data.owner._id;
    this._imagePopup = openImagePopup;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__trash");
    this._deleteCard = deleteCard;
    this._addCardLike = addCardLike;
    this._deleteCardLike = deleteCardLike;
    this._likeCounter = this._element.querySelector(".element__like-counter");
    
  }
 
  _getTemplate() {
    const columnElement = document.querySelector(this._cardSelector).content.querySelector('.element__list').cloneNode(true);
    return columnElement;
  } 

  generateCard() {
    this._setEventListeners();
    this._element.querySelector(".element__title").textContent = this._data.name;
    this._elementImg = this._element.querySelector('.element__img');
    this._elementImg.alt = `${this._data.name}`;
    this._elementImg.src = this._data.link;
    this._element.querySelector(".element__like-counter").textContent = this._data.likes.length;
    
    this._setIsLiked();
    
    return this._element;
  }

  _setEventListeners() {
    if (this._cardOwnerId === this._userId) {
      this._deleteButton.classList.add("element__trash_active");
      this._deleteButton.addEventListener("click", () =>
        this._deleteButtonClick()
      );
    }

    this._likeButton.addEventListener("click", () => this._likeToggler());
    
    this._element.querySelector(".element__img").addEventListener("click", this._imagePopup);
  }

  // лайки
  _likeToggler() {
    if (!this._likeButton.classList.contains("element__like-button_active")) {
      this._addCardLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._likeCounter.textContent = res.likes.length;
          this._likeButton.classList.add("element__like-button_active");
        })
        .catch((err) => console.log(err));
    } else {
      this._deleteCardLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._likeCounter.textContent = res.likes.length;
          this._likeButton.classList.remove("element__like-button_active");
        })
        .catch((err) => console.log(err));
    }
  }

  _setIsLiked() {
    if (this._data.likes.some(elem => elem._id === this._userId)) {
      this._likeButton.classList.add("element__like-button_active");
    }
  }

   //* Удаление карточки
  _deleteButtonClick() {
    const data = {
      card: this._element,
      cardId: this._cardId,
    };
    this._deleteCard(data);
  }
}  