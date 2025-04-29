import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import { setCookie } from "../../../utils/cookieHandler";

const API_URL = `${import.meta.env.VITE_USER_API}/verifyEmail`;

export const verifyEmailRequest = async (token: string) => {
  try {
    const res = await axios.get(`${API_URL}/${token}`);

    if (res.data.status !== "success") {
      throw new Error(
        "Somtihng went wrong while verifling email please try again"
      );
    }

    const { token: jwt, user } = res.data.data;

    setCookie("jwt", jwt, import.meta.env.VITE_JWT_EXPIRES_IN);

    return user;
  } catch (error) {
    handleAxiosError(
      error,
      "Somtihng went wrong while verifling email please try again"
    );
  }
};
