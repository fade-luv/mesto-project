import { openImagePopup, closePopup} from "./popup.js";
import {
  loadNewCard,
  getCards,
  deleteCardFromServer,
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
  deleteCardFromServer(card);
};



function createCard(name, link, likes, owner, cardID, element) {
  const MyID = "21d278660190bbbb6648dbe8";
  const ownerID = owner;
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
      .addEventListener("click", deleteCard(cardID));
  } else {
    cardClone
      .querySelector(".element__delete-button")
      .classList.add("element__delete-button_hide");
  }
  cardClone
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard(cardID));
  cardImage.addEventListener("click", () =>
    openImagePopup(cardImage.alt, cardImage.src)
  );
  return cardClone;
}

function renderCards(massive) {
  massive.forEach((element) => {
    cardContainer.append(createCard(element.name, element.link, element.likes, element.owner._id, element._id, element));
  });
}

const handleAddCard = async (evt) => {
  const submitButton = document.querySelector(".popup__btn-new-card");
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  const card = await loadNewCard(placeName, placeLink);
  const response = await card.json();
  cardContainer.prepend(
    createCard(placeName, placeLink, response.likes,response.owner._id, response._id)
  );
  

  closePopup(evt.target.closest(".popup_opened"));
  submitButton.classList.add("popup__btn_disabled");
  submitButton.setAttribute("disabled", true);
  evt.target.reset();
};







getCards();

export {
  renderCards,
  likeCard,
  deleteCard,
  createCard,
  handleAddCard,
  
};
