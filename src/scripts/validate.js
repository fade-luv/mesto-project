const popupForm = document.querySelector('.form');
const popupInputName = document.querySelector(".popup__input");
const profileName = document.querySelector('.profile__title'); // Получаем имя пользователя профиля
const profileJobName = document.querySelector('.profile__subtitle') // Получаем род деятельности пользователя
const popupInputSubname = document.querySelector(".popup__subname");
const showInputError = (form,input, errorMessage) => {


  const popupFormError = form.querySelector(`.${input.id}-error`);
  popupFormError.textContent = errorMessage;
  popupFormError.classList.add('popup__input_error_active');
};


/* Функция изменения Имени и Рода деятельности пользователя */
function formSubmitProfileInfoHandler(evt) {
  evt.preventDefault();
  const nameValue = popupInputName.value;
  const subNameValue = popupInputSubname.value;
  profileName.textContent = nameValue;
  profileJobName.textContent = subNameValue;
}
/* Функция изменения Имени и Рода деятельности пользователя */

const hideInputError = (form,input) => {

  let popupFormError = document.querySelector(`.${form.id}-error`);
  popupFormError.classList.remove('popup__input_error_active');
  popupFormError.textContent = '';
  BtnActive();
  
  
};

const isValid = (form, element) => {
  if (!element.validity.valid) {
    // Передадим сообщение об ошибке вторым аргументом
    BtnDisable();
    showInputError(form, element, element.validationMessage);
  } else {
    hideInputError(element, form);
  }
};

popupForm.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

const setEventListeners = (popupForm) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const popupInputList = Array.from(popupForm.querySelectorAll('.popup__input'));
  // Обойдём все элементы полученной коллекции
  popupInputList.forEach((popupInputElement) => {
    // каждому полю добавим обработчик события input
    popupInputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(popupForm, popupInputElement)
    });
  });
}; 

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));
 

  // Переберём полученную коллекцию
  formList.forEach((popupForm) => {
    popupForm.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(popupForm);
  });
};

function BtnDisable(params) {
  const btnList = Array.from(document.querySelectorAll('.popup__btn '));
  btnList.forEach((btn) => {
    btn.classList.add('popup__btn_disabled');
    btn.disabled = true; 
  })
}

function BtnActive(params) {
  const btnList = Array.from(document.querySelectorAll('.popup__btn '));
  btnList.forEach((btn) => {
    btn.classList.remove('popup__btn_disabled');
    btn.disabled = false; 
  })
 
}

export {BtnDisable, enableValidation,formSubmitProfileInfoHandler};