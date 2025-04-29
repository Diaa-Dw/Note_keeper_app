import axios from "axios";
import { LoginFormData } from "../types/Login.type";
import { handleAxiosError } from "../../../utils/handleAxiosError";

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

    if (res.data.status !== "success") {
      throw new Error(
        "An unexpected error occurred while logging in. Please try again later."
      );
    }
    const data = res.data.data;
    const user = {
      id: data.user._id,
      username: data.user.username,
      photo: data.user?.photo || "",
    };

    localStorage.setItem("user", JSON.stringify(user));
    // setCookie("jwt", data.token, Number(import.meta.env.VITE_JWT_EXPIRES_IN));

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
