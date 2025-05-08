import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

export const resetPassword = async (token: string, password: string) => {
  try {
    const res = await axios.patch(`${API_URL}/resetPassword/${token}`, {
      password,
    });

    if (res.data.status !== "success") {
      throw new Error(
        "An unexpected error occurred while logging in. Please try again later."
      );
    }
  } catch (error) {
    handleAxiosError(
      error,
      "An unexpected error occurred. Please try again later."
    );
  }
};
