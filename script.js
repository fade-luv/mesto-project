/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sj": () => (/* binding */ fillUserInfo),
  "rA": () => (/* binding */ handleEscape)
});

// UNUSED EXPORTS: disableButton, handleAddCard

;// CONCATENATED MODULE: ./src/components/api.js
var configApi = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-12",
  headers: {
    authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
    "Content-Type": "application/json"
  }
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
}

function getUserInfo() {
  return fetch(configApi.baseUrl + "/users/me", {
    headers: configApi.headers
  }).then(checkResponse);
}

function getCards(params) {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers
  }).then(checkResponse);
}

var updateUser = function updateUser(name, about) {
  return fetch(configApi.baseUrl + "/users/me", {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about
    })
  }).then(checkResponse);
};

var loadNewCard = function loadNewCard(name, link) {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link
    })
  }).then(checkResponse);
};

var deleteCardFromServer = function deleteCardFromServer(cardID) {
  return fetch("".concat(configApi.baseUrl, "/cards/").concat(cardID), {
    headers: configApi.headers,
    method: "DELETE"
  }).then(checkResponse);
};

var addLikeToCard = function addLikeToCard(cardID) {
  return fetch("".concat(configApi.baseUrl, "/cards/likes/").concat(cardID), {
    headers: configApi.headers,
    method: "PUT"
  }).then(checkResponse);
};

var loadNewAvatar = function loadNewAvatar(link) {
  return fetch("".concat(configApi.baseUrl, "/users/me/avatar"), {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link
    })
  }).then(checkResponse);
};

var deleteLikefromCard = function deleteLikefromCard(cardID) {
  return fetch("".concat(configApi.baseUrl, "/cards/likes/").concat(cardID), {
    headers: configApi.headers,
    method: "DELETE"
  }).then(checkResponse);
};


;// CONCATENATED MODULE: ./src/components/popup.js


var profilePopup = document.querySelector(".profile-popup");
var popupEditButton = document.querySelector(".profile__edit-button");
var addCardButon = document.querySelector(".profile__button");
var popupOpenImage = document.querySelector(".popupGelery");
var popupAddNewCard = document.querySelector(".popup_new-card");
var popupImg = document.querySelector(".popup__img");
var popupGeleryText = document.querySelector(".popupGelery__text");
var popupEditAvatarButton = document.querySelector(".profile__edit-avatar");
var popupEditAvatar = document.querySelector(".popup_new-avatar");
var newAvatarButton = document.querySelector(".button__new-avatar");
var changeAvatarForm = document.querySelector(".form__new-avatar");
var popupInputLinkAvatar = document.querySelector(".popup__input-link-avatar");
var profileAvatar = document.querySelector(".profile__avatar");

var renderLoading = function renderLoading(isLoading, button1) {
  if (isLoading) {
    button1.textContent = "Сохранение...";
  } else {
    button1.textContent = "Сохранить";
  }
};

function loadNewAvatarLocal() {
  loadNewAvatar(popupInputLinkAvatar.value).then(function (response) {
    if (response) {
      renderLoading(true, newAvatarButton);
      profileAvatar.src = popupInputLinkAvatar.value;
      closePopup(popupEditAvatar);
      return response;
    }
  }).catch(function (error) {
    return alert(error.message);
  }).finally(function () {
    return setTimeout(function () {
      renderLoading(false, newAvatarButton);
    }, 500);
  });
}

changeAvatarForm.addEventListener("submit", loadNewAvatarLocal);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
}

popupEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  fillUserInfo();
});
addCardButon.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});
popupEditAvatarButton.addEventListener("click", function () {
  openPopup(popupEditAvatar);
});

function openImagePopup(name, link) {
  openPopup(popupOpenImage);
  popupImg.src = link;
  popupImg.alt = name;
  popupGeleryText.textContent = name;
}

popupOpenImage.addEventListener("click", function (event) {
  if (event.target == popupOpenImage) {
    closePopup(popupOpenImage);
  }
});
popupEditAvatar.addEventListener("click", function (event) {
  if (event.target == popupEditAvatar) {
    closePopup(popupEditAvatar);
  }
});
profilePopup.addEventListener("click", function (event) {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  }
});
popupAddNewCard.addEventListener("click", function (event) {
  if (event.target == popupAddNewCard) {
    closePopup(popupAddNewCard);
  }
});

function hendleClosePopup() {
  var closeButtons = document.querySelectorAll(".popup__close-btn");
  closeButtons.forEach(function (button) {
    // находим 1 раз ближайший к крестику попап
    var popup = button.closest(".popup"); // устанавливаем обработчик закрытия на крестик

    button.addEventListener("click", function () {
      return closePopup(popup);
    });
  });
}


;// CONCATENATED MODULE: ./src/components/card.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var newCardName = document.querySelector(".popup_new-card .popup__place");
var newCardSubName = document.querySelector(".popup_new-card .popup__link");
var cardContainer = document.querySelector(".elements");
var cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template

var submitButton = document.querySelector(".popup__btn-new-card");
var userId;
Promise.all([getUserInfo(), getCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      cards = _ref2[1];

  document.querySelector(".profile__title").textContent = userData.name;
  document.querySelector(".profile__subtitle").textContent = userData.about;
  document.querySelector(".profile__avatar").src = userData.avatar;
  userId = userData._id;
  console.log(userId);
  renderCards(cards);
}).catch(function (error) {
  return alert(error.message);
});

var likeCard = function likeCard(likeButton, cardID, likes) {
  addLikeToCard(cardID).then(function (res) {
    likes.textContent = res.likes.length;
    likeButton.classList.add("element__like-button_active");
  }).catch(function (error) {
    return alert(error.message);
  });
};

var dislikeCard = function dislikeCard(likeButton, cardID, likes) {
  deleteLikefromCard(cardID, likes).then(function (res) {
    likes.textContent = res.likes.length;
    likeButton.classList.remove("element__like-button_active");
  }).catch(function (error) {
    return alert(error.message);
  });
};

var checkLike = function checkLike(card, cardID, likes) {
  return function (evt) {
    var likeButton = card.querySelector(".element__like-button");

    if (likeButton.classList.contains("element__like-button_active")) {
      dislikeCard(likeButton, cardID, likes);
    } else {
      likeCard(likeButton, cardID, likes);
    }
  };
};

var deleteCard = function deleteCard(card) {
  return function (evt) {
    deleteCardFromServer(card).then(function (res) {
      return evt.target.closest(".element").remove();
    }).catch(function (error) {
      return alert(error.message);
    });
  };
};

function createCard(name, link, likes, owner, cardID) {
  var ownerID = owner;
  var cardClone = cardTemplate.querySelector(".element").cloneNode(true);
  var cardImage = cardClone.querySelector(".element__image");
  var cardLikes = cardClone.querySelector(".element__likes");
  var likeButton = cardClone.querySelector(".element__like-button");
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector(".element__name").textContent = name;
  cardLikes.textContent = likes.length;
  cardClone.querySelector(".element__like-button").addEventListener("click", checkLike(cardClone, cardID, cardLikes));

  if (userId === ownerID) {
    cardClone.querySelector(".element__delete-button").addEventListener("click", deleteCard(cardID));
  } else {
    cardClone.querySelector(".element__delete-button").classList.add("element__delete-button_hide");
  }

  if (likes.find(function (item) {
    return item._id === "21d278660190bbbb6648dbe8";
  })) {
    likeButton.classList.add("element__like-button_active");
  }

  cardImage.addEventListener("click", function () {
    return openImagePopup(cardImage.alt, cardImage.src);
  });
  return cardClone;
}

function renderCards(massive) {
  massive.forEach(function (element) {
    cardContainer.append(createCard(element.name, element.link, element.likes, element.owner._id, element._id));
  });
}

function handleAddCard(evt) {
  evt.preventDefault();
  var placeName = newCardName.value;
  var placeLink = newCardSubName.value;
  loadNewCard(placeName, placeLink).then(function (response) {
    renderLoading(true, submitButton);
    cardContainer.prepend(createCard(placeName, placeLink, response.likes, response.owner._id, response._id));
    return response;
  }).then(function (response) {
    if (response) {
      setTimeout(function () {
        closePopup(evt.target.closest(".popup_opened"));
      }, 200);
      return response;
    }
  }).catch(function (error) {
    return alert(error.message);
  }).finally(function () {
    renderLoading(false, submitButton);
  });
}


;// CONCATENATED MODULE: ./src/components/validate.js
var showError = function showError(formElement, inputElement, errorMessage, config) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorMessage);
};

var hideError = function hideError(formElement, inputElement, config) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  inputElement.classList.remove(config.inputErrorMessage);
  errorElement.classList.remove(config.errorMessage);
  errorElement.textContent = "";
};

var checkInputValidity = function checkInputValidity(popupForm, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(popupForm, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(popupForm, inputElement, config);
  }
};

var hasInvalidInput = function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};

var toggleButtonState = function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

var setEventListeners = function setEventListeners(popupForm, config) {
  var inputList = Array.from(popupForm.querySelectorAll(config.inputSelector));
  var buttonElement = popupForm.querySelector(config.popupSubmitButton);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(popupForm, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

function enableValidation(config) {
  var formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (popupForm) {
    popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(popupForm, config);
  });
}

var validationConfig = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  popupSubmitButton: ".popup__btn",
  errorMessage: "popup__input_error_active",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorMessage: "popup__text_invalid"
};

;// CONCATENATED MODULE: ./src/components/script.js





var profileName = document.querySelector(".profile__title"); // Получаем имя пользователя профиля

var popupInputName = document.querySelector(".popup__name");
var profileJobName = document.querySelector(".profile__subtitle"); // Получаем род деятельности пользователя

var popupInputSubname = document.querySelector(".popup__subname");
var editProfileformElement = document.querySelector(".popup form"); //получаем форму редактирования профиля

var formElementNew = document.querySelector(".popup_new-card form");
var profileEditButton = document.querySelector(".popup__btn-edit-profile");

function disableButton(button) {
  button.setAttribute("disabled", true);
  button.classList.add(".popup__btn_disabled");
}

function fillUserInfo(params) {
  popupInputName.value = profileName.textContent;
  popupInputSubname.value = profileJobName.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  updateUser(profileName.textContent, profileJobName.textContent).then(function () {
    renderLoading(true, profileEditButton);
    var nameValue = popupInputName.value;
    var subNameValue = popupInputSubname.value;
    profileName.textContent = nameValue;
    profileJobName.textContent = subNameValue;
  }).then(function () {
    closePopup(profilePopup);
  }).catch(function (error) {
    return alert(error.message);
  }).finally(renderLoading(false, profileEditButton));
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    var openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

enableValidation(validationConfig);
hendleClosePopup();
formElementNew.addEventListener("submit", handleAddCard);
editProfileformElement.addEventListener("submit", handleProfileFormSubmit);

/******/ })()
;