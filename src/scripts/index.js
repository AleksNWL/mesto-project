import { renderCard } from "../features/renderCard";
import {
    closeModal,
    closeModalOnClick,
    closeModalOverlay,
} from "../features/closeModal";
import { openModal } from "../features/openModal";
import { removeCard } from "../features/removeCard";
import { toggleLike } from "../features/toggleLike";
import { validateInput } from "../features/validateInput";

import { toggleImagePopup } from "../features/toggleImagePopup";
import {
    addLikeToCard,
    daleteCard,
    getInitialCards,
    postCard,
    removeLikeFromCard,
} from "../api/cards/cards";
import "../pages/index.css";
import { getInfoAboutUser, updateAvatar, updateUser } from "../api/user/user";
import { updateAvatarImage } from "../features/updateAvatarImage";

const editProfileBtn = document.querySelector(".profile__edit-button");
const addImageBtn = document.querySelector(".profile__add-button");
const placesList = document.querySelector(".places__list");
const avatar = document.querySelector(".profile__image");

const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const avatarPopup = document.querySelector(".popup_type_avatar");

const fetchCards = () => {
    getInitialCards()
        .then((res) => res.json())
        .then((data) => {
            data.forEach((obj) => {
                placesList.append(renderCard(obj));
            });
        });
};
fetchCards();

const setUserData = () => {
    let name = document.querySelector(".profile__title");
    let major = document.querySelector(".profile__description");
    let avatarImageBlock = document.querySelector(".profile__image");

    const avatarImg = document.createElement("img");
    avatarImg.alt = "avatar image";
    avatarImg.style.width = "120px";
    avatarImg.style.height = "120px";
    avatarImageBlock.append(avatarImg);

    getInfoAboutUser()
        .then((res) => res.json())
        .then((data) => {
            name.textContent = data.name;
            major.textContent = data.about;
            avatarImg.setAttribute("src", data.avatar);
        });
};
setUserData();

function editAvatar() {
    openModal(avatarPopup);
    const closePopupBtn = avatarPopup.querySelector(".popup__close");
    const avatarForm = avatarPopup.querySelector("form");
    const submitBtn = avatarForm.querySelector("button");
    const linkInput = avatarPopup.querySelector(".popup__input_type_url");

    validateInput(linkInput, avatarForm);

    closeModalOverlay(avatarPopup);
    closeModalOnClick(closePopupBtn, avatarPopup);

    function handleAvatarFormSubmit(evt) {
        evt.preventDefault();
        const link = linkInput.value;
        submitBtn.textContent = "Сохраняем...";
        submitBtn.disabled = true;
        updateAvatar(link)
            .then(() => {
                updateAvatarImage();
            })
            .finally(() => {
                submitBtn.textContent = "Сохранить";
                submitBtn.disabled = false;
                closeModal(avatarPopup);
            });

        avatarForm.removeEventListener("submit", handleAvatarFormSubmit);
    }

    avatarForm.addEventListener("submit", handleAvatarFormSubmit);
}
avatar.addEventListener("click", editAvatar);

//Функция изменения данных профиля
function editProfile() {
    openModal(profilePopup);
    const closePopupBtn = profilePopup.querySelector(".popup__close");
    const profileForm = profilePopup.querySelector("form");
    const submitBtn = profileForm.querySelector("button");
    const nameInput = profilePopup.querySelector(".popup__input_type_name");
    const majorInput = profilePopup.querySelector(
        ".popup__input_type_description"
    );

    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");

    nameInput.value = profileTitle.textContent;
    majorInput.value = profileDescription.textContent;

    validateInput(nameInput, profileForm, 40);
    validateInput(majorInput, profileForm, 200);

    closeModalOverlay(profilePopup);
    closeModalOnClick(closePopupBtn, profilePopup);

    function handleProfileFormSubmit(evt) {
        evt.preventDefault();
        submitBtn.textContent = "Сохраняем...";
        submitBtn.disabled = true;
        updateUser(nameInput.value, majorInput.value)
            .then(() => {
                profileTitle.textContent = nameInput.value;
                profileDescription.textContent = majorInput.value;
            })
            .finally(() => {
                closeModal(profilePopup);
                submitBtn.textContent = "Сохранить";
                submitBtn.disabled = false;
            });
    }

    profileForm.addEventListener("submit", handleProfileFormSubmit);
}
editProfileBtn.addEventListener("click", editProfile);

//функция добавления новой карточки
function addNewCard() {
    openModal(cardPopup);
    const closePopupBtn = cardPopup.querySelector(".popup__close");
    const cardForm = cardPopup.querySelector("form");
    const submitBtn = cardForm.querySelector("button");

    const nameInput = cardPopup.querySelector(".popup__input_type_card-name");
    const linkInput = cardPopup.querySelector(".popup__input_type_url");

    validateInput(nameInput, cardForm);
    validateInput(linkInput, cardForm);

    closeModalOverlay(cardPopup);
    closeModalOnClick(closePopupBtn, cardPopup);

    function handleCardFormSubmit(evt) {
        evt.preventDefault();
        const name = nameInput.value;
        const link = linkInput.value;
        submitBtn.textContent = "Сохраняем...";
        submitBtn.disabled = true;
        postCard(name, link)
            .then(() => {
                placesList.innerHTML = "";
                fetchCards();
            })
            .finally(() => {
                closeModal(cardPopup);
                submitBtn.textContent = "Сохранить";
                submitBtn.disabled = false;
            });

        cardForm.removeEventListener("submit", handleCardFormSubmit);
    }

    cardForm.addEventListener("submit", handleCardFormSubmit);
}

addImageBtn.addEventListener("click", addNewCard);

placesList.addEventListener("click", ({ target }) => {
    const { classList } = target;

    switch (true) {
        case classList.contains("card__like-button"):
            const cardID = target.closest(".card").getAttribute("id");

            if (!target.classList.contains("card__like-button_is-active")) {
                addLikeToCard(cardID).then(() => toggleLike(target));
            } else {
                removeLikeFromCard(cardID).then(() => toggleLike(target));
            }
            break;
        case classList.contains("card__delete-button"):
            const cardId = target.parentNode.getAttribute("id");
            daleteCard(cardId).then(() => removeCard(target));
            break;
        case classList.contains("card__image"):
            toggleImagePopup(target, imagePopup);
            break;
    }
});
