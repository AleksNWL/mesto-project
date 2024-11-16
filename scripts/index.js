// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template').content;
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupClose = document.querySelector('.popup__close');


initialCards.forEach((item) => {
  const cardItem = cardTemplate.querySelector('li').cloneNode(true);
  cardItem.querySelector('.card__image').setAttribute('src', item.link);
  cardItem.querySelector('.card__image').setAttribute('alt', item.name);
  cardItem.querySelector('.card__title').textContent = item.name;
  placesList.appendChild(cardItem);
});


// Открытие окна для редактирования профиля
profileEditButton.addEventListener('click', function(evt) {
    popupTypeEdit.classList.add('popup_is-opened');

});

// Закрытие окна для редактирования профиля
popupClose.addEventListener('click', function(evt) {
    popupTypeEdit.classList.remove('popup_is-opened');
});




// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
  