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
const changeAvatarForm = document.querySelector(".form__new-avatar");
const popupInputLinkAvatar = document.querySelector(
  ".popup__input-link-avatar"
);
const profileAvatar = document.querySelector(".profile__avatar");

const renderLoading = (isLoading, button1) => {
  console.log(isLoading);
  console.log(button1);
  if (isLoading) {
    button1.textContent = "Сохранение...";
  } else {
    button1.textContent = "Сохранить";
    button1.setAttribute("disabled", true);
    button1.classList.add("popup__btn_disabled");
  }
};

function loadNewAvatarLocal(evt) {
  loadNewAvatar(popupInputLinkAvatar.value)
    .then(function (response) {
      if (response) {
        renderLoading(true, newAvatarButton);
        profileAvatar.src = popupInputLinkAvatar.value;
        return response;
      }
    })
    .catch((error) => alert(error.message))
    .then(function (result) {
      if (result) {
        setTimeout(() => {
          evt.target.reset();
          closePopup(popupEditAvatar);
        }, 600);
      }
    })
    .finally ( function () {
      setTimeout(() => {
        renderLoading(false, newAvatarButton);
      }, 200);
    })
}


changeAvatarForm.addEventListener("submit", loadNewAvatarLocal);

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
  fillUserInfo()
  
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

popupEditAvatar.addEventListener("click", (event) => {
  if (event.target == popupEditAvatar) {
    closePopup(popupEditAvatar);
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
