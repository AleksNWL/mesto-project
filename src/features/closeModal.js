export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");

    document.removeEventListener("keydown", (evt) =>
        closeOnKeydown(evt, popup)
    );
}

export function closeModalOnClick(btn, popup) {
    btn.addEventListener("click", () => {
        closeModal(popup);
    });
}

export function closeModalOverlay(popup) {
    popup.addEventListener("click", (evt) => {
        const target = evt.target;

        if (target === popup) {
            closeModal(popup);
        }
    });
}

export function closeOnKeydown(evt, popup) {
    if (evt.key === "Escape") {
        closeModal(popup);
    }
}
