import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";
import { LoginFormData } from "../types/Login.type";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

const sendLoginRequest = async ({
  email,
  password,
}: LoginFormData): Promise<User> => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const res = await axios.post(
    `${API_URL}/login`,
    { email, password },
    { withCredentials: true }
  );

  return res.data.data.user;
};

const sendForgotPasswordRequest = async (email: string): Promise<null> => {
  await axios.post(`${API_URL}/forgotPassword`, { email });
  return null;
};

export const loginRequest = catchAsync(
  sendLoginRequest,
  "An unexpected error occurred while logging in. Please try again later."
);

export const forgotPasswordRequest = catchAsync(
  sendForgotPasswordRequest,
  "An unexpected error occurred. Please try again later."
);
