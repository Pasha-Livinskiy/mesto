import Popup from "../scripts/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImg = this._popupElement.querySelector('.popup__image');
    this._popupImgSignature = this._popupElement.querySelector('.popup__image-subtitle');
  }

  open (name, link) {
    this._popupImg.src = link; //устанавливаем ссылку
    this._popupImg.alt = name; //устанавливаем альт
    this._popupImgSignature.textContent = name;//устанавливаем подпись картинке
    super.open();
  }
}