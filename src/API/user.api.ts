import axios from "axios";
import { handleAxiosError } from "../utils/handleAxiosError";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

export const getCurrentUser = async () => {
  console.log("get current user");
  try {
    const res = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });

    const { user } = res.data.data;

    return user;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};

export const logoutUser = async () => {
  try {
    await axios.get(`${API_URL}/logout`, {
      withCredentials: true,
    });

    return null;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};
