import Cookies from "js-cookie";
import { UpdatePasswordFormType } from "../components/ChangePassowrdForm/ChangePasswordForm.type";
import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = "http://127.0.0.1:8080/api/v1/users/updatePassword";

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

    Cookies.set("jwt", data.token, {
      expires: 7,
      sameSite: "Lax",
      secure: true,
    });

    return null;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};
