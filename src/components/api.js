import { renderCards } from "./card.js";

const configApi = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-12",
  headers: {
    authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

function getUserInfo() {
  return fetch(configApi.baseUrl + "/users/me", { headers: configApi.headers })
    .then(checkResponse)
    .then((result) => {
      document.querySelector(".profile__title").textContent = result.name;
      document.querySelector(".profile__subtitle").textContent = result.about;
      document.querySelector(".profile__avatar").src = result.avatar;
    });
}

function getCards(params) {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
  })
    .then(checkResponse)
    .then((res) => renderCards(res));
}
const updateUser = (name, about) => {
  return fetch(configApi.baseUrl + "/users/me", {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
  .then(checkResponse);
};

const loadNewCard = (name, link) => {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse)
};

const deleteCardFromServer = (cardID) => {
  return fetch(`${configApi.baseUrl}/cards/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  }).then(checkResponse)
};

const addLikeToCard = (cardID, cardLikes) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "PUT",
  })
    .then(checkResponse)
    .then((res) => {
      cardLikes.textContent = res.likes.length;
    })
    
};

const loadNewAvatar = (link) => {
  return fetch(`${configApi.baseUrl}/users/me/avatar`, {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse);
};

const deleteLikefromCard = (cardID, cardLikes) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  })
    .then(checkResponse)
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
  checkResponse,
};
