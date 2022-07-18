import "../pages/index.css";
import { handleAddCard } from "./card.js";
import {
  closePopup,
  hendleClosePopup,
  profilePopup,
  renderLoading,
} from "./popup.js";
import { enableValidation, validationConfig } from "./validate.js";
import { updateUser } from "./api.js";
const profileName = document.querySelector(".profile__title"); // Получаем имя пользователя профиля
const popupInputName = document.querySelector(".popup__name");
const profileJobName = document.querySelector(".profile__subtitle"); // Получаем род деятельности пользователя
const popupInputSubname = document.querySelector(".popup__subname");
const editProfileformElement = document.querySelector(".popup form"); //получаем форму редактирования профиля
const formElementNew = document.querySelector(".popup_new-card form");
const profileEditButton = document.querySelector(".popup__btn-edit-profile");

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
  updateUser(profileName.textContent, profileJobName.textContent)
    .then(function () {
      renderLoading(true, profileEditButton);
    })
    .then(function () {
        setTimeout(() => {
          evt.target.reset();
          closePopup(evt.target.closest(".popup_opened"));
        }, 600);
    })
    .finally(function () {
      setTimeout(() => {
        renderLoading(false, profileEditButton);
      }, 200);
    });
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

export { handleEscape, fillUserInfo, handleAddCard, disableButton };
