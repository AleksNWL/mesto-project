import { getInfoAboutUser } from "../api/user/user";

let currentUserId;

getInfoAboutUser()
    .then((res) => res.json())
    .then((data) => {
        currentUserId = data._id;
    });

export const renderCard = (obj) => {
    const cardTemplate = document.querySelector("#card-template").content;

    const card = cardTemplate.cloneNode(true);
    card.querySelector(".places__item").setAttribute("id", obj._id);
    const cardImg = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const cardLikeIcon = card.querySelector(".card__like-button");
    const cardLikeCount = card.querySelector(".card__like-count");
    const deleteButtonTemplate = `<button type="button" class="card__delete-button"></button>`;

    cardImg.setAttribute("src", obj.link);
    cardImg.setAttribute("alt", obj.name);

    if (obj.likes.find((likeObj) => likeObj._id === currentUserId)) {
        cardLikeIcon.classList.add("card__like-button_is-active");
    }

    if (currentUserId === obj.owner._id) {
        cardImg.insertAdjacentHTML("afterend", deleteButtonTemplate);
    }

    cardTitle.textContent = obj.name;
    cardLikeCount.textContent = obj.likes.length;

    return card;
};
