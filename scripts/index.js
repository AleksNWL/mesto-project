// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template').content;
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupClose = document.querySelector('.popup__close');

popupTypeEdit.classList.add('popup_is-animated');


initialCards.forEach((item) => {
  const cardItem = cardTemplate.querySelector('li').cloneNode(true);
  cardItem.querySelector('.card__image').setAttribute('src', item.link);
  cardItem.querySelector('.card__image').setAttribute('alt', item.name);
  cardItem.querySelector('.card__title').textContent = item.name;
  placesList.appendChild(cardItem);
});


// Открытие окна для редактирования профиля
profileEditButton.addEventListener('click', function() {
    popupTypeEdit.classList.add('popup_is-opened');
});

// Закрытие окна для редактирования профиля
popupClose.addEventListener('click', function(evt) {
    popupTypeEdit.classList.remove('popup_is-opened');
});

const cardLikeButton = document.querySelectorAll('.card__like-button');
// Добавление лайка
cardLikeButton.forEach(button => {
    button.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__like-button_is-active');
    });
});




// Редактирование профиля
const profileFormElement = document.querySelector('.popup__form');
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector('.popup__input_type_name').value;
    const jobInput = document.querySelector('.popup__input_type_description').value;
    
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    profileTitle.textContent = nameInput;
    profileDescription.textContent = jobInput;
}
profileFormElement.addEventListener('submit', handleProfileFormSubmit);




// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки
const cardDeleteButton = document.querySelectorAll('.card__delete-button');
cardDeleteButton.forEach(button => {
   button.addEventListener('click', function(evt) {
    const placeItem = evt.target.closest('.places__item');
    if (placeItem) {
        placeItem.remove();
    }
   }); 
});


// @todo: Вывести карточки на страницу
  