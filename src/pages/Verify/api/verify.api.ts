import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/verifyEmail`;

const sendVerifyEmailRequest = async (token: string): Promise<User> => {
  const res = await axios.get(`${API_URL}/${token}`, {
    withCredentials: true,
  });

  return res.data.data.user;
};

export const verifyEmailRequest = catchAsync(
  sendVerifyEmailRequest,
  "Something went wrong while verifying email. Please try again."
);
