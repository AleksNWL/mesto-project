import { closeModalOnClick, closeModalOverlay } from "./closeModal";
import { openModal } from "./openModal";

export function toggleImagePopup(cardImage, popup) {
    openModal(popup);
    const closePopupBtn = popup.querySelector(".popup__close");
    const image = popup.querySelector("img");

    image.setAttribute("src", cardImage.getAttribute("src"));
    image.setAttribute("alt", cardImage.getAttribute("alt"));

    closeModalOverlay(popup);
    closeModalOnClick(closePopupBtn, popup);
}
