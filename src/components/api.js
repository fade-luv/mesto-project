import { renderCards } from "./card.js";

const configApi = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-12",
  headers: {
    authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
    "Content-Type": "application/json",
  },
};

function getUserInfo() {
  return fetch(configApi.baseUrl + "/users/me", { headers: configApi.headers })
    .then((res) => res.json())
    .then((result) => {
      document.querySelector(".profile__title").textContent = result.name;
      document.querySelector(".profile__subtitle").textContent = result.about;
      document.querySelector(".profile__avatar").src = result.avatar;
    });
}

async function getCards(params) {
  let response = await fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
  });
  const result = await response.json();
  renderCards(result);
}
const updateUser = (name, about) => {
  fetch(configApi.baseUrl + "/users/me", {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
};

const loadNewCard = (name, link) => {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
};

const deleteCardFromServer = (cardID) => {
  fetch(`${configApi.baseUrl}/cards/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  });
};

const addLikeToCard = (cardID, cardLikes) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "PUT",
  })
    .then((res) => res.json())
    .then((res) => {
      cardLikes.textContent = res.likes.length;
    });
};

const loadNewAvatar = (link) => {
  return fetch(`${configApi.baseUrl}/users/me/avatar`, {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link,
    }),
  });
};

const deleteLikefromCard = (cardID, cardLikes) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  })
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
  loadNewAvatar,
};
