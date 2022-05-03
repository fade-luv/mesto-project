const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button'); // Получаем кнопку открытия попапа
const closeButton = document.querySelector('.popup__close-btn'); // Получаем кнопку закрытия попапа
const closeButtonNew = document.querySelector('.popup-new__close-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubtltle = document.querySelector('.profile__subtitle')
const popupInput = document.querySelector('.popup__container .popup__name')
const pupupSubname = document.querySelector('.popup__container .popup__subname')
const formElement = document.querySelector('.popup form')
const formElementNew = document.querySelector('.popup_new-card form')
const addCardButon = document.querySelector('.profile__button');
const newPopup = document.querySelector('.popup_new-card');
const newCardName = document.querySelector('.popup_new-card .popup__name');
const newCardSubName = document.querySelector('.popup_new-card .popup__subname');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  
]; 


formElementNew.addEventListener('submit',function (params) {
  newPopup.style.visibility = "hidden";
  newPopup.style.opacity = 0;
});



addCardButon.addEventListener('click',function (param) {
 
  newPopup.style.visibility = "visible";
  newPopup.style.opacity = 1;
    
})

closeButtonNew.addEventListener('click', function(params) {
  newPopup.style.visibility = "hidden";
  newPopup.style.opacity = 0;
})


function cardsGenerate(params) {
  const elements = document.querySelector('.elements');
  const element = document.querySelector('.element-template').content;
  
  for (let i = 0; i < initialCards.length; i++) {
   const userElement = element.querySelector('.element').cloneNode(true);
    userElement.querySelector('.element__name').textContent = initialCards[i].name;
    userElement.querySelector('img').src = initialCards[i].link;
    elements.append(userElement);
    
  }
  like();
}
cardsGenerate();


function addCardHendler(evt) {
  const elements = document.querySelector('.elements');
  const element = document.querySelector('.element-template').content;
  evt.preventDefault();
  let placeName = newCardName.value;
  let placeLink = newCardSubName.value;
  const userElement = element.querySelector('.element').cloneNode(true);
  userElement.querySelector('.element__name').textContent = placeName;
  userElement.querySelector('img').src = placeLink;
  UserElementLike = userElement.querySelector('.element__like-button');
  elements.prepend(userElement);
   UserElementLike.addEventListener('click', function (params) {
     UserElementLike.classList.toggle("element__like-button_active");
  })
  test();
  

}

formElementNew.addEventListener('submit',addCardHendler);


function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameValue = popupInput.value;
  let subNameValue = pupupSubname.value;
  profileTitle.textContent = nameValue;
  profileSubtltle.textContent = subNameValue;
}

 
formElement.addEventListener('submit',formSubmitHandler);
formElement.addEventListener('submit',function (params) {
  popup.style.visibility = "hidden";
  popup.style.opacity = 0;
  
});



function getModalInfo(){

  let profileTitleText  = profileTitle.textContent; // Получаем имя пользователя
  let profileSubtitleText  = profileSubtltle.textContent; // Получаем описание профиля
 
  popupInput.value = profileTitleText; 
  pupupSubname.value = profileSubtitleText ; 
  
}

editButton.addEventListener('click', function(params) {
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
  getModalInfo();

})

closeButton.addEventListener('click', function(params) {
  popup.style.visibility = "hidden"
  popup.style.opacity = 0;
})


function test(params) {
  const deleteButton= document.querySelectorAll('.element__delete-button').forEach(function(a){
a.addEventListener('click',function (event) {
let my = event.target.closest(".element");
my.remove();

})

});
}
test();

function like(params) {
  const likeButton = document.querySelectorAll('.element__like-button').forEach(function(a){
a.addEventListener('click',function (params) {
  a.classList.toggle("element__like-button_active");
})

});
}
function Gelery(params) {
  const geleryElem = document.querySelectorAll('.element').forEach(function(a) {
  a.addEventListener('click', function (event) {
  let PopupImage = document.querySelector('.popup__img');
  let PopupText = document.querySelector('.popupGelery__text')


  
  let elementPhotoLink = event.target.closest(".element img").src; 
  let tt = event.target.closest('.element');
  let uu = tt.querySelector('.element__name');
  ii = uu.textContent;

    PopupImage.src = elementPhotoLink;
      PopupText.textContent = ii;
    let PopupGelery = document.querySelector('.popupGelery');
    PopupGelery.style.visibility = "visible";
    PopupGelery.style.opacity = 1;
  })
}
);;

}

Gelery();

function closeGelery(params) {
  let ButtonClose = document.querySelector('.popup__close-gelery');
  ButtonClose.addEventListener('click' ,function (params) {
     let PopupGelery = document.querySelector('.popupGelery');
    PopupGelery.style.visibility = "hidden";
    PopupGelery.style.opacity = 0;
    
  })
}

closeGelery();

