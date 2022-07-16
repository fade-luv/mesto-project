import { handleEscape, fillUserInfo } from "./script.js";
import { loadNewAvatar } from "./api.js";
const profilePopup = document.querySelector(".profile-popup");
const popupEditButton = document.querySelector(".profile__edit-button");
const addCardButon = document.querySelector(".profile__button");
const popupOpenImage = document.querySelector(".popupGelery");
const popupAddNewCard = document.querySelector(".popup_new-card");
const popupImg = document.querySelector(".popup__img");
const popupGeleryText = document.querySelector(".popupGelery__text");
const popupEditAvatarButton = document.querySelector(".profile__edit-avatar");
const popupEditAvatar = document.querySelector(".popup_new-avatar");
const newAvatarButton = document.querySelector(".button__new-avatar");
const popupInputLinkAvatar = document.querySelector(
  ".popup__input-link-avatar"
);
const profileAvatar = document.querySelector(".profile__avatar");

const renderLoading = (isLoading, button1) => {
  if (isLoading) {
    button1.textContent = "Сохранение...";
    console.log(button1);
  } else {
    button1.textContent = "Сохранить";
    console.log(button1);
  }
};

function loadNewAvatarLocal() {
  renderLoading(true, newAvatarButton);
  profileAvatar.src = popupInputLinkAvatar.value;
  loadNewAvatar(popupInputLinkAvatar.value);
  setTimeout(() => {
    renderLoading(false, newAvatarButton);
  }, 500);
  setTimeout(() => {
    closePopup(popupEditAvatar);
  }, 500);
}

newAvatarButton.addEventListener("click", loadNewAvatarLocal);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
}

popupEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  fillUserInfo();
});

addCardButon.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});

popupEditAvatarButton.addEventListener("click", function () {
  openPopup(popupEditAvatar);
});
function openImagePopup(name, link) {
  openPopup(popupOpenImage);
  popupImg.src = link;
  popupImg.alt = name;
  popupGeleryText.textContent = name;
}

popupOpenImage.addEventListener("click", (event) => {
  if (event.target == popupOpenImage) {
    closePopup(popupOpenImage);
  }
});

profilePopup.addEventListener("click", (event) => {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  }
});

popupAddNewCard.addEventListener("click", (event) => {
  if (event.target == popupAddNewCard) {
    closePopup(popupAddNewCard);
  }
});

function hendleClosePopup() {
  const closeButtons = document.querySelectorAll(".popup__close-btn");
  closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап
    const popup = button.closest(".popup");
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener("click", () => closePopup(popup));
  });
}

export {
  hendleClosePopup,
  profilePopup,
  openPopup,
  closePopup,
  openImagePopup,
  popupAddNewCard,
  popupOpenImage,
  renderLoading,
};
