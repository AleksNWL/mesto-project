export function validateInput(input, form, maxLength = null) {
    const submitBtn = form.querySelector("button");

    input.addEventListener("input", () => {
        const isEmpty = input.value.length === 0;
        const exceedsMaxLength = maxLength
            ? input.value.length >= maxLength
            : false;
        const isInvalid = !input.validity.valid;

        if (isEmpty || exceedsMaxLength || isInvalid) {
            input.classList.add("invalid");
            submitBtn.setAttribute("disabled", true);
        } else {
            input.classList.remove("invalid");
            submitBtn.removeAttribute("disabled");
        }
    });
}
