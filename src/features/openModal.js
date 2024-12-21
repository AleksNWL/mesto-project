import { closeOnKeydown } from "./closeModal";

export function openModal(popup) {
    popup.classList.add("popup_is-opened");

    document.addEventListener("keydown", (evt) => closeOnKeydown(evt, popup));
}
