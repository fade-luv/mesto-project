import { EscListener } from "./script.js";

/* Функции открытия и закрытия попапов*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", EscListener);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", EscListener);
}
/* Функции открытия и закрытия попапов*/

export { openPopup, closePopup };
