import { openImagePopup, closePopup, popup } from "./popup.js";
import { enableValidation, validationConfig } from "./validate.js";
import { disableButton } from "./script.js";
import {
  loadNewCard,
  getCards,
  deleteCardFromServer,
  getUserInfo,
} from "./api.js";
const newCardName = document.querySelector(".popup_new-card .popup__place");
const newCardSubName = document.querySelector(".popup_new-card .popup__link");
const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template








function likeCard(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

const deleteCard = (card) => (evt) => {
  evt.target.closest(".element").remove();
  deleteCardFromServer(card._id);
};



function createCard(name, link, likes, owner, element) {
  const MyID = "21d278660190bbbb6648dbe8";
  const ownerID = owner._id;
  const cardClone = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardClone.querySelector(".element__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector(".element__name").textContent = name;
  cardClone.querySelector(".element__likes").textContent = likes.length;
  cardClone.querySelector(".element__like-button").addEventListener("click", likeCard);
  if (MyID === ownerID) {
    cardClone
      .querySelector(".element__delete-button")
      .addEventListener("click", deleteCard);
  } else {
    cardClone
      .querySelector(".element__delete-button")
      .classList.add("element__delete-button_hide");
  }
  cardClone
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard(element));
  cardImage.addEventListener("click", () =>
    openImagePopup(cardImage.alt, cardImage.src)
  );
  return cardClone;
}

function renderCards(massive) {
  massive.forEach((element) => {
    cardContainer.append(createCard(element.name, element.link, element.likes, element.owner, element));
  });
}

function handleAddCard(evt) {
  let myID1 = "21d278660190bbbb6648dbe8";
  const submitButton = document.querySelector(".popup__btn-new-card");
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  let likes = [];
  loadNewCard(placeName, placeLink);
  const a = getUserInfo();
  console.log(a);
  cardContainer.prepend(createCard(placeName, placeLink, likes, undefined,undefined, myID1));
  closePopup(evt.target.closest(".popup_opened"));
  submitButton.classList.add("popup__btn_disabled");
  submitButton.setAttribute("disabled", true);
  evt.target.reset();
  
}







getCards();

export {
  renderCards,
  likeCard,
  deleteCard,
  createCard,
  handleAddCard,
  
};
