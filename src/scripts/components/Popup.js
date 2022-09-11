export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //* Метод открытия попапа и блокировки скролла страницы
  open() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popup.classList.add("popup_opened");
  }

  //* Метод закрытия попапа
  close() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }

  //* Метод закрытия на ESC
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  //* Установка слушателей
  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}
