const showError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorMessage);
};

const hideError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorMessage);
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

const setEventListeners = (popupForm, config) => {
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
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((popupForm) => {
    popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

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
  inputErrorMessage: "popup__text_invalid",
};

export { enableValidation, validationConfig, toggleButtonState };
