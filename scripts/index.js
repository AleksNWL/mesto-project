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
    popupTypeEdit.classList.add('popup_is-animated');
});

// Закрытие окна для редактирования профиля
popupClose.addEventListener('click', function(evt) {
    popupTypeEdit.classList.remove('popup_is-opened');
});

// Добавление лайка
placesList.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
});

// Находим форму в DOM
const profileFormElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_card-name');
const jobInput = document.querySelector('.popup__input popup__input_type_url');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    console.log(nameInput.value);
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileTitle = nameInput.value;
    const profileDescription = jobInput.value;
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent;
    profileDescription.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);



// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
  