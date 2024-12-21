import { getInfoAboutUser } from "../api/user/user";

export const updateAvatarImage = () => {
    let avatarImage = document
        .querySelector(".profile__image")
        .querySelector("img");
    getInfoAboutUser()
        .then((res) => res.json())
        .then((data) => {
            avatarImage.setAttribute("src", data.avatar);
        });
};
