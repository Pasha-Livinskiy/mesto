import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForm } ) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formSubmit = this._formSubmit.bind(this);
    this._form = this._popup.querySelector(".popup__body")
    this._submitButton = this._form.querySelector(".popup__button");
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._submitBtnText = this._submitButton.textContent;
  }

  //* Сабмит формы
  _formSubmit(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
  }

  //* Метод сбора данных со всех полей формы
  _getInputValues() {
    const data = {};
    this._inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }

  //* Перезапись родительского метода закрытия попапа
  close() {
    super.close();
    this._form.reset();
  }

  //* Перезапись родительского метода установки слушателей
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._formSubmit);
  }


  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...'
    } else {
      this._submitButton.textContent = this._submitBtnText;
    }
  }

}