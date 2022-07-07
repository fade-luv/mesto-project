import { closePopup } from "./popup.js";
import { popupEditProfile } from "./script.js";
const popupForm = document.querySelector(".form");
const popupInputName = document.querySelector(".popup__name");
const profileName = document.querySelector(".profile__title"); // Получаем имя пользователя профиля
const profileJobName = document.querySelector(".profile__subtitle"); // Получаем род деятельности пользователя
const popupInputSubname = document.querySelector(".popup__subname");
const popupSubmitButton = document.querySelector(".popup__btn");
const popupCard = document.querySelector(".popup_new-card");
const form = document.forms.place_form;

/* Функция изменения Имени и Рода деятельности пользователя */
function formSubmitProfileInfoHandler(evt) {
  evt.preventDefault();
  const nameValue = popupInputName.value;
  const subNameValue = popupInputSubname.value;
  profileName.textContent = nameValue;
  profileJobName.textContent = subNameValue;
}
/* Функция изменения Имени и Рода деятельности пользователя */

function FillUserInfo(params) {
  popupInputName.value = profileName.textContent;
  popupInputSubname.value = profileJobName.textContent;
}

FillUserInfo();

popupForm.addEventListener("submit", function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
  closePopup(popupEditProfile);
});

form.addEventListener("submit", function (evt) {
  closePopup(popupCard);
});

const showError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorMessage);
};

const hideError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(".popup__text_invalid");
  errorElement.classList.remove(config.errorMessage);
  errorElement.textContent = "";
};

const checkInputValidity = (popupForm, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showError(popupForm, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(popupForm, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

function buttonState(popupForm, config) {
  const inputList = Array.from(
    popupForm.querySelectorAll(config.inputSelector)
  );
  const buttonElement = popupForm.querySelector(config.popupSubmitButton);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(popupForm, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}

const setEventListeners = (popupForm, config) => {
  buttonState(popupForm, config);
};

function isValid(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((popupForm) => {
    popupForm.addEventListener("submit", (evt) => {});

    setEventListeners(popupForm, config);
  });
}

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  popupSubmitButton: ".popup__btn",
  errorMessage: "popup__input_error_active",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
};

isValid(validationConfig);

export { formSubmitProfileInfoHandler };
