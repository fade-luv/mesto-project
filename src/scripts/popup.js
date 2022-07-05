

/* Функции открытия и закрытия попапов*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
/* Функции открытия и закрытия попапов*/



export {openPopup,closePopup};