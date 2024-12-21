export function toggleLike(btn) {
    btn.classList.toggle("card__like-button_is-active");
    if (btn.classList.contains("card__like-button_is-active")) {
        btn.closest(".card").querySelector(".card__like-count").textContent =
            Number(
                btn.closest(".card").querySelector(".card__like-count")
                    .textContent
            ) + 1;
    } else {
        btn.closest(".card").querySelector(".card__like-count").textContent =
            Number(
                btn.closest(".card").querySelector(".card__like-count")
                    .textContent
            ) - 1;
    }
}
