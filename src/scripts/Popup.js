export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._popupCloseButton = this._popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //* Метод открытия попапа и блокировки скролла страницы
  open() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.add("popup_opened");
  }

  //* Метод закрытия попапа
  close() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.remove("popup_opened");
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

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close(evt.target);
      }
    });
  }
}