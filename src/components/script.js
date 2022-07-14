import "../pages/index.css";
import { handleAddCard, renderCards,  } from "./card.js";
import { closePopup, popup, hendleClosePopup, profilePopup } from "./popup.js";
import { enableValidation, validationConfig } from "./validate.js";
import {getUserInfo, updateUser, } from "./api.js";
const profileName = document.querySelector(".profile__title"); // Получаем имя пользователя профиля
const popupInputName = document.querySelector(".popup__name");
const profileJobName = document.querySelector(".profile__subtitle"); // Получаем род деятельности пользователя
const popupInputSubname = document.querySelector(".popup__subname");
const editProfileformElement = document.querySelector(".popup form"); //получаем форму редактирования профиля
const formElementNew = document.querySelector(".popup_new-card form");








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
  const nameValue = popupInputName.value;
  const subNameValue = popupInputSubname.value;
  profileName.textContent = nameValue;
  profileJobName.textContent = subNameValue;
  updateUser(profileName.textContent, profileJobName.textContent);
  closePopup(profilePopup);
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened"); 
    closePopup(openedPopup);
  }
}

enableValidation(validationConfig);
hendleClosePopup();
formElementNew.addEventListener("submit", handleAddCard);
editProfileformElement.addEventListener("submit", handleProfileFormSubmit);


getUserInfo();
export { handleEscape, fillUserInfo, handleAddCard, disableButton };

