import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/verifyEmail`;

export const verifyEmailRequest = async (token: string) => {
  try {
    const res = await axios.get(`${API_URL}/${token}`, {
      withCredentials: true,
    });

    console.log("🚀 ~ verifyEmailRequest ~ res:", res.data);
    return res.data.data.user;
  } catch (error) {
    handleAxiosError(
      error,
      "Somtihng went wrong while verifling email please try again"
    );
  }
};
