import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__image');
    this._popupImgSignature = this._popup.querySelector('.popup__image-subtitle');
  }

  open (name, link) {
    super.open();
    this._popupImg.src = link; 
    this._popupImg.alt = name; 
    this._popupImgSignature.textContent = `${name}`;//устанавливаем подпись картинке
  }
}