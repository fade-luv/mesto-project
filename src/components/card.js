import { openImagePopup, closePopup, renderLoading } from "./popup.js";
import {
  disableButton,
  loadNewCard,
  getCards,
  deleteCardFromServer,
  addLikeToCard,
  deleteLikefromCard,
  getUserInfo,
} from "./api.js";
const newCardName = document.querySelector(".popup_new-card .popup__place");
const newCardSubName = document.querySelector(".popup_new-card .popup__link");
const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template
const submitButton = document.querySelector(".popup__btn-new-card");

let userId;

Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    document.querySelector(".profile__title").textContent = userData.name;
    document.querySelector(".profile__subtitle").textContent = userData.about;
    document.querySelector(".profile__avatar").src = userData.avatar;
    userId = userData._id;
    console.log(userId);
    renderCards(cards);
  })
  .catch((error) => alert(error.message));

const likeCard = (likeButton, cardID, likes) => {
  addLikeToCard(cardID)
    .then((res) => {
      likes.textContent = res.likes.length;
      likeButton.classList.add("element__like-button_active");
    })
    .catch((error) => alert(error.message));
};

const dislikeCard = (likeButton, cardID, likes) => {
  deleteLikefromCard(cardID, likes)
    .then((res) => {
      likes.textContent = res.likes.length;
      likeButton.classList.remove("element__like-button_active");
    })
    .catch((error) => alert(error.message));
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
  deleteCardFromServer(card)
    .then((res) => evt.target.closest(".element").remove())
    .catch((error) => alert(error.message));
};

function createCard(name, link, likes, owner, cardID) {
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
  if (userId === ownerID) {
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

function handleAddCard(evt) {
  evt.preventDefault();
  const placeName = newCardName.value;
  const placeLink = newCardSubName.value;
  loadNewCard(placeName, placeLink)
    .then(function (response) {
      renderLoading(true, submitButton);
      cardContainer.prepend(
        createCard(
          placeName,
          placeLink,
          response.likes,
          response.owner._id,
          response._id
        )
      );

      return response;
    })
    .catch((error) => alert(error.message))
    .then(function (result) {
      if (result) {
        setTimeout(() => {
          evt.target.reset();
          closePopup(evt.target.closest(".popup_opened"));
        }, 600);
      }
    })
    .finally(function () {
      setTimeout(() => {
        renderLoading(false, submitButton);
      }, 200);
    });
}

export { renderCards, likeCard, deleteCard, createCard, handleAddCard };
