import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";
import { SignupFormData } from "../types/Signup.type";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/register`;

const sendSignupRequest = async ({
  username,
  email,
  password,
  profile = "",
}: Omit<SignupFormData, "confirmPassword">): Promise<{ message: string }> => {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  if (profile && profile[0]) {
    formData.append("photo", profile[0]);
  }

  const res = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.data;
};

export const signupRequest = catchAsync(
  sendSignupRequest,
  "An unexpected error occurred while signing up. Please try again later."
);
