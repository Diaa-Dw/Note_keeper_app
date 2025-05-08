import axios from "axios";
import { catchAsync } from "../utils/catchAsync";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

const fetchCurrentUser = async (): Promise<User> => {
  const res = await axios.get(`${API_URL}/me`, {
    withCredentials: true,
  });

  return res.data.data.user;
};

const requestLogout = async (): Promise<void> => {
  await axios.get(`${API_URL}/logout`, {
    withCredentials: true,
  });
};

export const getCurrentUserRequest = catchAsync(
  fetchCurrentUser,
  "An unexpected error occurred while fetching user data."
);

export const logoutRequest = catchAsync(
  requestLogout,
  "An unexpected error occurred while logging out."
);
