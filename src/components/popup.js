import { handleEscape, fillUserInfo } from "./script.js";

const profilePopup = document.querySelector(".profile-popup"); 
const closeButtonEditProfilePopup = document.querySelector(".popup__close-btn"); 
const closeButtonGenerateCardPopup = document.querySelector(".popup-new__close-btn"); 
const closeButtonGeleryPopup = document.querySelector(".popup__close-gelery"); 
const popupEditButton = document.querySelector(".profile__edit-button"); 
const addCardButon = document.querySelector(".profile__button"); 
const popupOpenImage = document.querySelector(".popupGelery"); 
const popupAddNewCard = document.querySelector(".popup_new-card"); 
const popupImg = document.querySelector(".popup__img");
const popupGeleryText = document.querySelector(".popupGelery__text");



function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
  
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
};

popupEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  fillUserInfo(); 
});



addCardButon.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});


function openImagePopup(name, link) {
  openPopup(popupOpenImage);

  popupImg.src = link;
  popupImg.alt = name;
  popupGeleryText.textContent = name;
}



popupOpenImage.addEventListener('click', (event) => {
  if(event.target == popupOpenImage){
    closePopup(popupOpenImage);
  }
});

profilePopup.addEventListener("click", (event) => {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  }
});

popupAddNewCard.addEventListener('click', (event) => {
  if (event.target == popupAddNewCard) {
    closePopup(popupAddNewCard);
  }
})


function hendleClosePopup () {
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
};
