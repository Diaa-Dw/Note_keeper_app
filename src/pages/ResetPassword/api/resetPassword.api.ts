import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import { setCookie } from "../../../utils/cookieHandler";

const API_URL = `import.meta.env.VITE_API/api/v1/users`;

export const resetPassword = async (token: string, password: string) => {
  try {
    const res = await axios.patch(`${API_URL}/resetPassword/${token}`, {
      password,
    });

    if (res.data.status !== "success") {
      throw new Error(
        "An unexpected error occurred while logging in. Please try again later."
      );
    }
    const data = res.data.data;
    const user = {
      id: data.user._id,
      username: data.user.username,
      photo: data.user?.photo || "",
    };

    //store the user data in local storage
    localStorage.setItem("user", JSON.stringify(user));
    setCookie("jwt", data.token, import.meta.env.VITE_JWT_EXPIRES_IN);
  } catch (error) {
    console.log("🚀 ~ resetPassword ~ error:", error);
    handleAxiosError(
      error,
      "An unexpected error occurred. Please try again later."
    );
  }
};
