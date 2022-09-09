import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement, { submitForm }) {
    super(popupElement);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector(".popup__container");
    this._submit = this._submit.bind(this);
  }

  _submit(evt) {
    evt.preventDefault();
    this._submitForm(this.data);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submit);
  }
}