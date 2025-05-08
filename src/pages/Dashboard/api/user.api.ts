import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import { UpdatePasswordFormType } from "../components/ChangePassowrdForm/ChangePasswordForm.type";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/updatePassword`;

export const updatePassword = async ({
  currentPassword,
  newPassword,
}: Omit<UpdatePasswordFormType, "confirmPassword">) => {
  try {
    await axios.patch(
      API_URL,
      {
        currentPassword,
        newPassword,
      },
      {
        withCredentials: true,
      }
    );

    return null;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while updating password please try again. Please try again later."
    );
  }
};
