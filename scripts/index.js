const placesList = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template').content;
const popup = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');

// изначально включена анимация появления попап-ов
popup.forEach((popupElement) => {
    popupElement.classList.add('popup_is-animated');
});


// добавление изначальных карточек, установка лайков, удаление карточки, приближение по фото
function createCard(cardData) {
    const cardItem = cardTemplate.querySelector('li').cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
    });

    deleteButton.addEventListener('click', () => {
        cardItem.remove();
    });
    
    cardImage.addEventListener('click', () => {
        const popupTypeImage = document.querySelector('.popup_type_image');
        const popupImage = popupTypeImage.querySelector('.popup__image');
        const popupCaption = popupTypeImage.querySelector('.popup__caption');

        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;
        popupCaption.textContent = cardData.name;

        popupTypeImage.classList.add('popup_is-opened');
    });

    return cardItem;
} 

// рендер всех карточек
function renderCards(cards) {
    cards.forEach((cardData) => {
      const cardElement = createCard(cardData);
      placesList.append(cardElement);
    });
}

// добавление новых карточек
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const cardFormElement = popupTypeNewCard.querySelector('.popup__form');
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const nameCard = document.querySelector('.popup__input_type_card-name').value;
    const linkCard = document.querySelector('.popup__input_type_url').value;
    const newCard = {
        name: nameCard,
        link: linkCard
    };
    const newCardElemet = createCard(newCard);
    placesList.prepend(newCardElemet);
    cardFormElement.reset();
};
cardFormElement.addEventListener('submit', handleCardFormSubmit);


const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', () => {
    popupTypeNewCard.classList.add('popup_is-opened');
});

renderCards(initialCards);





// Открытие окна для редактирования профиля
const popupTypeEdit = document.querySelector('.popup_type_edit');
profileEditButton.addEventListener('click', function() {
    popupTypeEdit.classList.add('popup_is-opened');
});

// Закрытие всех попап-ов на крестик
const popupClose = document.querySelectorAll('.popup__close');
popupClose.forEach((button) => {
    button.addEventListener('click', function(evt) {
        const popupToClose = evt.target.closest('.popup');
        if (popupToClose) {
            popupToClose.classList.remove('popup_is-opened');
        }
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
};
profileFormElement.addEventListener('submit', handleProfileFormSubmit);