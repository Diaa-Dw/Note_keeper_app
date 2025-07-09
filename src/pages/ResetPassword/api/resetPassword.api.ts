import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users`;

const sendResetPasswordRequest = async (token: string, password: string) => {
  await axios.patch(
    `${API_URL}/resetPassword/${token}`,
    {
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const resetPasswordRequest = catchAsync(
  sendResetPasswordRequest,
  "An unexpected error occurred while resetting your password. Please try again later."
);
