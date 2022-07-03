/* Получаем модальные окна */
const popupEditProfile = document.querySelector('.popup'); //Получаем модальное окно редактирования профиля
const popupAddNewCard = document.querySelector('.popup_new-card');// Получаем модальное окно добавления карточки
const popupOpenImage = document.querySelector('.popupGelery'); // Получаем модальное окно с увеличенным изображением

/* Получаем кнопки закрытия*/
const closeButtonEditProfilePopup = document.querySelector('.popup__close-btn'); // Получаем кнопку закрытия модального окна редактирования профиля 
const closeButtonGenerateCardPopup = document.querySelector('.popup-new__close-btn'); //Получаем кнопку закрытия модального окна добавления карточки
const closeButtonGeleryPopup = document.querySelector('.popup__close-gelery'); // Получаем кнопку закрытия модального окна с увеличенным изоражением
/* Получаем кнопки открытия*/
const popupEditButton = document.querySelector('.profile__edit-button'); // Получаем кнопку открытия модального окна редактирования профиля
const addCardButon = document.querySelector('.profile__button'); // Получаем кнопку открытия модального окна добавления карточек
/* Получаем кнопки открытия*/
const profileName = document.querySelector('.profile__title'); // Получаем имя пользователя профиля
const profileJobName = document.querySelector('.profile__subtitle') // Получаем род деятельности пользователя
const pupupSubname = document.querySelector('.popup__container .popup__subname')
const editProfileformElement = document.querySelector('.popup form') //получаем форму редактирования профиля 
const formElementNew = document.querySelector('.popup_new-card form');
const cardContainer = document.querySelector(".elements");
const newCardName = document.querySelector('.popup_new-card .popup__name');
const newCardSubName = document.querySelector('.popup_new-card .popup__subname');
const cardTemplate = document.querySelector('.element-template').content; // Достаём информацию из Template
const popupInputName = document.querySelector(".popup__input");
const popupInputSubname = document.querySelector(".popup__subname");

const initialCards = [
  
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  
]; 

/* Функции открытия и закрытия попапов*/

function openPopup(popup) {
  popup.classList.add("popup_opened");
}


function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
/* Функции открытия и закрытия попапов*/




/* Функции открытия превью карточки*/
function imagePrewiew(event) {
  openPopup(popupOpenImage);
  const elementPhotoLink = event.target.src; // Достаём сссылку на фото выбраной карточки
  const ActiveElement = event.target.closest(".element"); // нахдим элемент на который пользователь нажал кнопку
  const ActiveElementName = ActiveElement.querySelector(".element__name").textContent; // извлекаем название карточки
  popupOpenImage.querySelector(".popup__img").src = elementPhotoLink; //передаём ссылку нажатой карточки в попап
  popupOpenImage.querySelector(".popupGelery__text").textContent = ActiveElementName; //передаём текст нажатой карточки в попап

}

/* Функции открытия превью карточки*/

/* Функция лайка карточки */
function likeCard(evt) {
  evt.target.classList.toggle("element__like-button_active");
}
/* Функция лайка карточки */

/* Функция удаления карточки */
function DeleteCard(evt) {
  evt.target.closest(".element").remove();
}


/* Функция удаления карточки */


/* Функция, которая генерирует карточку" */

function createCard(name, link) {
  const cardClone = cardTemplate.querySelector('.element').cloneNode(true); // Клонируем карточку 
  cardClone.querySelector(".element__name").textContent = name; //передаём параметр name в карточку 
  cardClone.querySelector(".element__image").src = link; // передаём параметр link в карточку  
  cardClone.querySelector('.element__like-button').addEventListener('click', likeCard);  /* Лайк карточки*/ 
  cardClone.querySelector(".element__delete-button").addEventListener('click', DeleteCard); /* Удаление карточки*/ 
  cardClone.querySelector(".element__image").addEventListener("click", imagePrewiew) ; /* Превью картчоки*/ 
  return cardClone;
}
/* Функция, которая генерирует карточку" */
/* Функция вывода карточек из массива  " */
function renderCard() { 
  initialCards.forEach(element => {
    cardContainer.append(createCard(element.name,element.link));
  });
} 
/* Функция вывода карточек из массива  " */


/* Функция добавления новой карточки  " */
function addCardHendler(evt) { 
  evt.preventDefault(); 
  const placeName = newCardName.value; 
  const placeLink = newCardSubName.value; 
  cardContainer.prepend(createCard(placeName,placeLink));
} 


/* Функция добавления новой карточки  */

/* Функция изменения Имени и Рода деятельности пользователя */
function formSubmitProfileInfoHandler(evt) {
  evt.preventDefault();
  const nameValue = popupInputName.value;
  const subNameValue = popupInputSubname.value;
  profileName.textContent = nameValue;
  profileJobName.textContent = subNameValue;
}
/* Функция изменения Имени и Рода деятельности пользователя */


closeButtonGeleryPopup.addEventListener('click', function (params) {
  closePopup(popupOpenImage );
})



/* Функции открытия и закрытия попапа добавления новой карточки*/

addCardButon.addEventListener('click', function () {
  openPopup(popupAddNewCard);
});


closeButtonGenerateCardPopup.addEventListener('click', function () {
  closePopup(popupAddNewCard);
});
/* Функции открытия и закрытия попапа добавления новой карточки*/

/* Функции открытия и закрытия попапа редактирования профиля*/
popupEditButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
});

closeButtonEditProfilePopup.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
/* Функции открытия и закрытия попапа редактирования профиля*/

renderCard();
formElementNew.addEventListener('submit',addCardHendler);
editProfileformElement.addEventListener('submit',formSubmitProfileInfoHandler);
















const popupForm = document.querySelector('.form');
const popupFormInput = popupForm.querySelector('.popup__input');
const formBtn = popupForm.querySelector('.popup__btn');


const showInputError = (form,input, errorMessage) => {

  
  const popupFormError = form.querySelector(`.${input.id}-error`);
  popupFormError.textContent = errorMessage;
  popupFormError.classList.add('popup__input_error_active');
  
  
};

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
  btnList = Array.from(document.querySelectorAll('.popup__btn '));
  btnList.forEach((btn) => {
    btn.classList.add('popup__btn_disabled');
    btn.disabled = true; 
  })
}
function BtnActive(params) {
 btnList = Array.from(document.querySelectorAll('.popup__btn '));
  btnList.forEach((btn) => {
    btn.classList.remove('popup__btn_disabled');
    btn.disabled = false; 
  })
 
}

function idEmpty(params) {
  
}
BtnDisable();
enableValidation(); 







