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
}

function getCards(params) {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
  })
    .then (checkResponse)
    .catch((error) => alert(error.message));
    
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
  .then(checkResponse)
  .catch(error => alert(error.message));
};

const loadNewCard = (name, link) => {
  return fetch(configApi.baseUrl + "/cards", {
    headers: configApi.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
    .then(checkResponse)
    .catch((error) => alert(error.message));
};

const deleteCardFromServer = (cardID) => {
  return fetch(`${configApi.baseUrl}/cards/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  })
    .then(checkResponse)
    .catch((error) => alert(error.message));
};

const addLikeToCard = (cardID, cardLikes) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "PUT",
  })
    .then(checkResponse)
    .catch((error) => alert(error.message));
   
    
};

const loadNewAvatar = (link) => {
  return fetch(`${configApi.baseUrl}/users/me/avatar`, {
    headers: configApi.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse).catch(error => alert(error.message));
};

const deleteLikefromCard = (cardID) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardID}`, {
    headers: configApi.headers,
    method: "DELETE",
  })
    .then(checkResponse)
    .catch((error) => alert(error.message));
   
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
