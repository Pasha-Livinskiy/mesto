(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._cardSelector=n,this._userId=r,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._imagePopup=o,this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__trash"),this._deleteCard=i,this._addCardLike=u,this._deleteCardLike=a,this._likeCounter=this._element.querySelector(".element__like-counter")}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element__list").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._data.name,this._elementImg=this._element.querySelector(".element__img"),this._elementImg.alt="".concat(this._data.name),this._elementImg.src=this._data.link,this._element.querySelector(".element__like-counter").textContent=this._data.likes.length,this._setIsLiked(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardOwnerId===this._userId&&(this._deleteButton.classList.add("element__trash_active"),this._deleteButton.addEventListener("click",(function(){return t._deleteButtonClick()}))),this._likeButton.addEventListener("click",(function(){return t._likeToggler()})),this._element.querySelector(".element__img").addEventListener("click",this._imagePopup)}},{key:"_likeToggler",value:function(){var t=this;this._likeButton.classList.contains("element__like-button_active")?this._deleteCardLike(this._cardId).then((function(e){t._data=e,t._likeCounter.textContent=e.likes.length,t._likeButton.classList.remove("element__like-button_active")})).catch((function(t){return console.log(t)})):this._addCardLike(this._cardId).then((function(e){t._data=e,t._likeCounter.textContent=e.likes.length,t._likeButton.classList.add("element__like-button_active")})).catch((function(t){return console.log(t)}))}},{key:"_setIsLiked",value:function(){var t=this;this._data.likes.some((function(e){return e._id===t._userId}))&&this._likeButton.classList.add("element__like-button_active")}},{key:"_deleteButtonClick",value:function(){var t={card:this._element,cardId:this._cardId};this._deleteCard(t)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._settings=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"clearValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._disableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){t._toggleButtonState(),e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){var r=e.renderItems;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=e,this._popupCloseButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keyup",this._handleEscClose),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keyup",this._handleEscClose),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){t.close()})),this._popupElement.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close(e.target)}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=f(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},s.apply(this,arguments)}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function h(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popupElement.querySelector(".popup__image"),e._popupImgSignature=e._popupElement.querySelector(".popup__image-subtitle"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImg.src=e,this._popupImg.alt=t,this._popupImgSignature.textContent=t,s(d(u.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=v(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function g(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n._formSubmit=n._formSubmit.bind(E(n)),n._form=n._popupElement.querySelector(".popup__body"),n._submitButton=n._form.querySelector(".popup__button"),n._inputs=n._popupElement.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_formSubmit",value:function(t){t.preventDefault(),this._submitForm(this._getInputValues(),this._submitButton)}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"close",value:function(){b(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){b(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmit)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var C=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._job=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._job.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._profileAvatar.src=t.avatar}}],n&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._token=e.token}var e,n;return e=t,(n=[{key:"_requestResult",value:function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: Ошибка ".concat(t.status," - ").concat(t.statusText))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._requestResult(t)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._requestResult(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._requestResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"addCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=B(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function T(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return U(t)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n._form=n._popupElement.querySelector(".popup__container"),n._submit=n._submit.bind(U(n)),n}return e=u,(n=[{key:"_submit",value:function(t){t.preventDefault(),this._submitForm(this.data)}},{key:"setEventListeners",value:function(){q(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a),V=document.querySelector("#form-body-profile"),D=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__edit-button"),z=document.querySelector("#profile-edit"),N=document.querySelector("#new-card"),J=document.querySelector(".element__table"),H=document.querySelector("#enlarged-card"),M=(document.querySelector(".popup__image-subtitle"),document.querySelector(".popup__image"),document.querySelector("#name-profile")),$=document.querySelector("#job-profile"),G={formSelector:".popup__body",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"};function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q,W=document.querySelector(".profile__avatar-edit-button"),X=document.querySelector("#update"),Y=document.querySelector(".spinner"),Z=document.querySelector("#confirm"),tt=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49/",token:"a29c64ab-90ad-4c85-9b43-2da7686f936d"}),et=[tt.getUserInfo(),tt.getInitialCards()],nt=new _(H);nt.setEventListeners();var rt=function(t){var e={link:t.target.src,name:t.target.closest(".element__list").querySelector(".element__title").textContent};nt.open(e)},ot=function(t){ut.data=t,ut.open()},it=function(t){var n=new e(t,".element-template",Q,rt,ot,(function(t){return tt.addCardLike(t)}),(function(t){return tt.deleteCardLike(t)}));return n.generateCard(t)},ut=new A(Z,{submitForm:function(t){tt.deleteCard(t.cardId).then((function(){t.card.remove(),ut.close()})).catch((function(t){return console.log(t)}))}});ut.setEventListeners();var at=new i({renderItems:function(t){at.addItem(it(t))}},J),ct=new C(".profile__name",".profile__description",".profile__avatar"),lt=new w(z,{submitForm:function(t,e){ht(e),tt.editProfile(t).then((function(t){ct.setUserInfo(t),lt.close()})).catch((function(t){return console.log(t)})).finally((function(){dt(e)}))}});lt.setEventListeners();var st=new w(N,{submitForm:function(t,e){ht(e);var n={name:t.name,link:t.link};tt.addNewCard(n).then((function(t){at.addItem(it(t),!0),st.close()})).catch((function(t){return console.log(t)})).finally((function(){dt(e)}))}},".element-template");st.setEventListeners();var ft=new w(X,{submitForm:function(t,e){ht(e),tt.editAvatar(t).then((function(t){ct.setUserAvatar(t),ft.close()})).catch((function(t){return console.log(t)})).finally((function(){dt(e)}))}});ft.setEventListeners(),W.addEventListener("click",(function(){ft.open(),pt.clearValidation()}));var pt=new r(G,X);function ht(t){t.textContent="Сохранение...",t.append(Y)}function dt(t){t.textContent="Сохранить"}pt.enableValidation(),F.addEventListener("click",(function(){var t=ct.getUserInfo();M.value=t.name,$.value=t.about,lt.open(),yt.clearValidation()})),D.addEventListener("click",(function(){st.open(),_t.clearValidation()}));var _t=new r(G,document.querySelector("#form-body-newcard"));_t.enableValidation();var yt=new r(G,V);yt.enableValidation(),Promise.all(et).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,ct.setUserInfo(o),ct.setUserAvatar(o),at.renderItems(i.reverse())})).catch((function(t){return console.log(t)}))})();