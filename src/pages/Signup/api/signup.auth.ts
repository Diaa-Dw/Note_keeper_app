import axios from "axios";
import { SignupFormData } from "../Signup.type";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = "https://fts-note-keeper-2.onrender.com/api/v1/users/register";
const signup = async ({
  username,
  email,
  password,
  profile = "",
}: Omit<SignupFormData, "confirmPassword">) => {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  if (profile && profile[0]) {
    formData.append("photo", profile[0]);
  }
  try {
    const res = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = res.data.data;
    return data;
  } catch (error) {
    handleAxiosError(
      error,
      "An unexpected error occurred while signing up. Please try again later."
    );
  }
};

export default signup;
