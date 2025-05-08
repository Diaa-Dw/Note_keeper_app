import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import { LoginFormData } from "../types/Login.type";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

export const login = async ({ email, password }: LoginFormData) => {
  // Check if email and password are provided
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const res = await axios.post(
      `${API_URL}/login`,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );

    const { user } = res.data.data;

    return user;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};

export const forgotPassword = async (email: string) => {
  try {
    await axios.post(`${API_URL}/forgotPassword`, {
      email,
    });

    return null;
  } catch (error) {
    handleAxiosError(
      error,
      "An unexpected error occurred. Please try again later."
    );
  }
};
