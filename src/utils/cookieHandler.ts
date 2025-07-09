import Cookies from "js-cookie";

export const setCookie = (key: string, value: string, expirseIn: number) => {
  Cookies.set(key, value, {
    // httpOnly: true,
    expires: expirseIn,
    sameSite: "None",
    secure: true,
  });
};
