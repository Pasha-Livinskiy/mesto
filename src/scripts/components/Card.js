export class Card {
  constructor({
    data, 
    cardSelector, 
    userId, 
    handleCardClick, 
    handleDeleteIconClick,
    handleSetLike,
    handleRemoveLike 
  }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._userId = userId; 
    this._cardId = data._id; 
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
   
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }
 
  _getTemplate() {
    const columnElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element__list')
    .cloneNode(true);
    return columnElement;
  } 

  generateCard() {
    
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.element__img');
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__trash");
    this._likeCounter = this._element.querySelector(".element__like-counter");
   
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._hasDeleteBtn();
    this._isCardLiked();
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId);
    })
    
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like-button_active')) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    })
  }

  // Проверка, стоит ли лайк на карточке
  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('element__like-button_active');
    }
  }
  
  // поставить/удалить лайк, изменение количества лайков
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likeCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like-button_active');
  }

  // Удаление карточки
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _hasDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }
}

