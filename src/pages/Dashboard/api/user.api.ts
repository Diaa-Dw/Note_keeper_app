import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";
import { UpdatePasswordFormType } from "../components/ChangePassowrdForm/ChangePasswordForm.type";

const API_URL = `${import.meta.env.VITE_API}/api/v1/users/updatePassword`;

const sendPasswordUpdate = async ({
  currentPassword,
  newPassword,
}: Omit<UpdatePasswordFormType, "confirmPassword">): Promise<void> => {
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
};

export const updatePasswordRequest = catchAsync(
  sendPasswordUpdate,
  "An unexpected error occurred while updating your password. Please try again later."
);
