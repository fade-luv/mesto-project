import { openImagePopup, closePopup, popup } from "./popup.js";
import { enableValidation, validationConfig } from "./validate.js";
import { disableButton } from "./script.js";
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

function likeCard(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

function createCard(name, link) {
  const cardClone = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardClone.querySelector(".element__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector(".element__name").textContent = name;
  cardClone
    .querySelector(".element__like-button")
    .addEventListener("click", likeCard);
  cardClone
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard);
  cardImage.addEventListener("click", () =>
    openImagePopup(cardImage.alt, cardImage.src)
  );
  return cardClone;
}

function renderCards() {
  initialCards.forEach((element) => {
    cardContainer.append(createCard(element.name, element.link));
  });
}

function handleAddCard(evt) {
  const submitButton = document.querySelector(".popup__btn-new-card");
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  cardContainer.prepend(createCard(placeName, placeLink));
  closePopup(evt.target.closest(".popup_opened"));
  console.log(submitButton);
  submitButton.classList.add("popup__btn_disabled");
  submitButton.setAttribute("disabled", true);
  evt.target.reset();
  

}

export { renderCards, likeCard, deleteCard, createCard, handleAddCard };
