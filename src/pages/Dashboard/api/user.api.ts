import Cookies from "js-cookie";
import { UpdatePasswordFormType } from "../components/ChangePassowrdForm/ChangePasswordForm.type";
import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/updatePassword`;

export const updatePassword = async ({
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
    console.log("🚀 ~ res:", res);

    // if (res.data.status !== "success") {
    //   throw new Error(
    //     "An unexpected error occurred while logging in. Please try again later."
    //   );
    // }
    // const data = res.data.data;

    // setCookie("jwt", data.token, import.meta.env.VITE_JWT_EXPIRES_IN);

    return null;
  } catch (error: unknown) {
    console.log("🚀 ~ error:", error);
    handleAxiosError(
      error,
      "An unexpected error occurred while updating password please try again. Please try again later."
    );
  }
};
