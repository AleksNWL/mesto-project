import { config } from "../api";

export const getInfoAboutUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    });
};

export const updateUser = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name,
            about,
        }),
    });
};

export const updateAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar,
        }),
    });
};
