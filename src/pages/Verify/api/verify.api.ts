import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8080/api/v1/users/verifyEmail";

export const verifyEmailRequest = async (token: string) => {
  try {
    const res = await axios.get(`${API_URL}/${token}`);

    if (res.data.status !== "success") {
      throw new Error(
        "Somtihng went wrong while verifling email please try again"
      );
    }

    const { token: jwt, user } = res.data.data;
    Cookies.set("jwt", jwt, {
      expires: 7,
    });
    return user;
  } catch (error) {
    handleAxiosError(
      error,
      "Somtihng went wrong while verifling email please try again"
    );
  }
};
