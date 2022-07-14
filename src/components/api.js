import { renderCards } from "./card.js";

function getUserInfo(params) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me ", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.querySelector(".profile__title").textContent = result.name;
      document.querySelector(".profile__subtitle").textContent = result.about;
    });
}

async function getCards(params) {
  let response = await fetch(
    "https://nomoreparties.co/v1/plus-cohort-12/cards",
    {
      headers: {
        authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      },
    }
  );
  const result = await response.json();
  renderCards(result);
}
const updateUser = (name, about) => {
  fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
};

const loadNewCard = (name, link) => {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
};

const deleteCardFromServer = (cardID) => {
  fetch(`https://nomoreparties.co/v1/plus-cohort-12/cards/${cardID}`, {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
};

const addLikeToCard = (cardID, cardLikes) => {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-12/cards/likes/${cardID}`,
    {
      headers: {
        authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
        "Content-Type": "application/json",
      },
      method: "PUT",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      cardLikes.textContent = res.likes.length;
    });
};



const deleteLikefromCard = (cardID, cardLikes) => {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-12/cards/likes/${cardID}`,
    {
      headers: {
        authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      cardLikes.textContent = res.likes.length;
    });
};

export {
  getUserInfo,
  updateUser,
  loadNewCard,
  getCards,
  deleteCardFromServer,
  addLikeToCard,
  deleteLikefromCard,
};
