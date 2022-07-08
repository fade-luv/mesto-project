import { handleEscape, fillUserInfo } from "./script.js";
const popup = document.querySelector(".popup"); 
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
  openPopup(popup);
  fillUserInfo(); 
});



addCardButon.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});


function imagePrewiew(name, link) {
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

popup.addEventListener('click', (event) => {
  if(event.target == popup){
    closePopup(popup);
  }
})

popupAddNewCard.addEventListener('click', (event) => {
  if (event.target == popupAddNewCard) {
    closePopup(popupAddNewCard);
  }
})



closeButtonGeleryPopup.addEventListener("click", function (params) {
  closePopup(popupOpenImage);
});
closeButtonGenerateCardPopup.addEventListener("click", function () {
  closePopup(popupAddNewCard);
});
closeButtonEditProfilePopup.addEventListener("click", function () {
  closePopup(popup);
});





export {
  popup,
  openPopup,
  closePopup,
  imagePrewiew,
  popupAddNewCard,
  popupOpenImage,
};
