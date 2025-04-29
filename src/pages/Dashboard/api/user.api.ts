import Cookies from "js-cookie";
import { UpdatePasswordFormType } from "../components/ChangePassowrdForm/ChangePasswordForm.type";
import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import { setCookie } from "../../../utils/cookieHandler";

const API_URL = `${import.meta.env.VITE_USER_API}/updatePassword`;

export const updatePassowrd = async ({
  currentPassword,
  newPassword,
}: Omit<UpdatePasswordFormType, "confirmPassword">) => {
  try {
    const token = Cookies.get("jwt");

    const res = await axios.patch(
      API_URL,
      {
        currentPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    if (res.data.status !== "success") {
      throw new Error(
        "An unexpected error occurred while logging in. Please try again later."
      );
    }
    const data = res.data.data;

    setCookie("jwt", data.token, import.meta.env.VITE_JWT_EXPIRES_IN);


    return null;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};
