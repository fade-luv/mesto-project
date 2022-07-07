import { openPopup, closePopup } from "./popup.js";
import { popupOpenImage } from "./script.js";

const newCardName = document.querySelector(".popup_new-card .popup__place");
const newCardSubName = document.querySelector(".popup_new-card .popup__link");
const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

console.log(newCardName);

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
  const cardClone = cardTemplate.querySelector(".element").cloneNode(true); // Клонируем карточку
  cardClone.querySelector(".element__name").textContent = name; //передаём параметр name в карточку
  cardClone.querySelector(".element__image").src = link; // передаём параметр link в карточку
  cardClone
    .querySelector(".element__like-button")
    .addEventListener("click", likeCard); /* Лайк карточки*/
  cardClone
    .querySelector(".element__delete-button")
    .addEventListener("click", DeleteCard); /* Удаление карточки*/
  cardClone
    .querySelector(".element__image")
    .addEventListener("click", imagePrewiew); /* Превью картчоки*/
  return cardClone;
}
/* Функция, которая генерирует карточку" */

/* Функция вывода карточек из массива  " */
function renderCard() {
  initialCards.forEach((element) => {
    cardContainer.append(createCard(element.name, element.link));
  });
}
/* Функция вывода карточек из массива  " */

/* Функция добавления новой карточки  " */
function addCardHendler(evt) {
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  cardContainer.prepend(createCard(placeName, placeLink));
  newCardName.value = "";
  newCardSubName.value = " ";
}
/* Функция добавления новой карточки  */

/* Функции открытия превью карточки*/
function imagePrewiew(event) {
  openPopup(popupOpenImage);
  const elementPhotoLink = event.target.src; // Достаём сссылку на фото выбраной карточки
  const ActiveElement = event.target.closest(".element"); // нахдим элемент на который пользователь нажал кнопку
  const ActiveElementName =
    ActiveElement.querySelector(".element__name").textContent; // извлекаем название карточки
  popupOpenImage.querySelector(".popup__img").src = elementPhotoLink; //передаём ссылку нажатой карточки в попап
  popupOpenImage.querySelector(".popupGelery__text").textContent =
    ActiveElementName; //передаём текст нажатой карточки в попап
}
/* Функции открытия превью карточки*/

export {
  initialCards,
  imagePrewiew,
  likeCard,
  DeleteCard,
  createCard,
  renderCard,
  addCardHendler,
};
