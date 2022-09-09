import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImg = this._popupElement.querySelector('.popup__image');
    this._popupImgSignature = this._popupElement.querySelector('.popup__image-subtitle');
  }

  open (data) {
    super.open();
    this._popupImg.src = data.link; 
    this._popupImg.alt = data.name; 
    this._popupImgSignature.textContent = `${data.name}`;//устанавливаем подпись картинке
  }
}