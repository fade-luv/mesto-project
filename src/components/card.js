import { openImagePopup, closePopup, renderLoading } from "./popup.js";
import {
  loadNewCard,
  getCards,
  deleteCardFromServer,
  addLikeToCard,
  deleteLikefromCard,
  checkResponse,
} from "./api.js";
const newCardName = document.querySelector(".popup_new-card .popup__place");
const newCardSubName = document.querySelector(".popup_new-card .popup__link");
const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template

const likeCard = (likeButton, cardID, likes) => {
  console.log(likeButton);
  likeButton.classList.add("element__like-button_active");
  addLikeToCard(cardID, likes);
};

const dislikeCard = (likeButton, cardID, likes) => {
  likeButton.classList.remove("element__like-button_active");
  console.log(likes);
  deleteLikefromCard(cardID, likes);
};

const checkLike = (card, cardID, likes) => (evt) => {
  const likeButton = card.querySelector(".element__like-button");
  if (likeButton.classList.contains("element__like-button_active")) {
    dislikeCard(likeButton, cardID, likes);
  } else {
    likeCard(likeButton, cardID, likes);
  }
};

const deleteCard = (card) => (evt) => {
  evt.target.closest(".element").remove();
  deleteCardFromServer(card);
};

function createCard(name, link, likes, owner, cardID) {
  const MyID = "21d278660190bbbb6648dbe8";
  const ownerID = owner;
  const cardClone = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardClone.querySelector(".element__image");
  const cardLikes = cardClone.querySelector(".element__likes");
  const likeButton = cardClone.querySelector(".element__like-button");
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector(".element__name").textContent = name;
  cardLikes.textContent = likes.length;
  cardClone
    .querySelector(".element__like-button")
    .addEventListener("click", checkLike(cardClone, cardID, cardLikes));
  if (MyID === ownerID) {
    cardClone
      .querySelector(".element__delete-button")
      .addEventListener("click", deleteCard(cardID));
  } else {
    cardClone
      .querySelector(".element__delete-button")
      .classList.add("element__delete-button_hide");
  }

  if (likes.find((item) => item._id === "21d278660190bbbb6648dbe8")) {
    likeButton.classList.add("element__like-button_active");
  }

  cardImage.addEventListener("click", () =>
    openImagePopup(cardImage.alt, cardImage.src)
  );
  return cardClone;
}

function renderCards(massive) {
  massive.forEach((element) => {
    cardContainer.append(
      createCard(
        element.name,
        element.link,
        element.likes,
        element.owner._id,
        element._id
      )
    );
  });
}

function handleAddCard(evt)  {
  
  
  const submitButton = document.querySelector(".popup__btn-new-card");
  renderLoading(true, submitButton);
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  loadNewCard(placeName, placeLink)
  .then ((res) => {
      cardContainer.prepend(
        createCard(
          placeName,
          placeLink,
          res.likes,
          res.owner._id,
          res._id
        )
      );
  }
    
  )
  

  submitButton.classList.add("popup__btn_disabled");
  submitButton.setAttribute("disabled", true);
  setTimeout(() => {
    renderLoading(false, submitButton);
  }, 500);
  setTimeout(() => {
    closePopup(evt.target.closest(".popup_opened"));
  }, 500);
  evt.target.reset();
};

getCards();

export { renderCards, likeCard, deleteCard, createCard, handleAddCard };
