import '../pages/index.css';
import {BtnDisable,enableValidation, formSubmitProfileInfoHandler} from './validate.js';
import {renderCard,addCardHendler} from "./card.js";
import {closePopup,openPopup} from "./popup.js";

const popupEditProfile = document.querySelector('.popup'); //Получаем модальное окно редактирования профиля
const popupAddNewCard = document.querySelector('.popup_new-card');// Получаем модальное окно добавления карточки
const popupOpenImage = document.querySelector('.popupGelery'); // Получаем модальное окно с увеличенным изображением
const closeButtonEditProfilePopup = document.querySelector('.popup__close-btn'); // Получаем кнопку закрытия модального окна редактирования профиля 
const closeButtonGenerateCardPopup = document.querySelector('.popup-new__close-btn'); //Получаем кнопку закрытия модального окна добавления карточки
const closeButtonGeleryPopup = document.querySelector('.popup__close-gelery'); // Получаем кнопку закрытия модального окна с увеличенным изоражением
const popupEditButton = document.querySelector('.profile__edit-button'); // Получаем кнопку открытия модального окна редактирования профиля
const addCardButon = document.querySelector('.profile__button'); // Получаем кнопку открытия модального окна добавления карточек
const editProfileformElement = document.querySelector('.popup form') //получаем форму редактирования профиля 
const formElementNew = document.querySelector('.popup_new-card form');



popupOpenImage.onclick = function(event) {
    if ( event.target == popupOpenImage ) {
        closePopup(popupOpenImage)
    };
};
popupEditProfile.onclick = function(event) {
    if ( event.target == popupEditProfile ) {
        closePopup(popupEditProfile)
    };
};

popupAddNewCard.onclick = function(event) {
    if ( event.target == popupAddNewCard ) {
        closePopup(popupAddNewCard)
    };
};

closeButtonGeleryPopup.addEventListener('click', function (params) {
  closePopup(popupOpenImage);
})


/* Функции открытия и закрытия попапа добавления новой карточки*/
addCardButon.addEventListener('click', function () {
  openPopup(popupAddNewCard);
});
closeButtonGenerateCardPopup.addEventListener('click', function () {
  closePopup(popupAddNewCard);
});
/* Функции открытия и закрытия попапа добавления новой карточки*/

/* Функции открытия и закрытия попапа редактирования профиля*/
popupEditButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
});

closeButtonEditProfilePopup.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
/* Функции открытия и закрытия попапа редактирования профиля*/

renderCard();
formElementNew.addEventListener('submit',addCardHendler);
editProfileformElement.addEventListener('submit',formSubmitProfileInfoHandler);


document.addEventListener('keydown', function (evt) {
  // Проверяем, была ли введена цифра
    if(evt.key == "Escape" ){
      closePopup(popupEditProfile);
      closePopup(popupAddNewCard);
      closePopup(popupOpenImage);
    }
}); 


BtnDisable();
enableValidation(); 

export {popupOpenImage};









