import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_USER_API;

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
    Cookies.set("jwt", data.token, {
      expires: 7,
      sameSite: "Lax",
      secure: true,
    });
  } catch (error) {
    console.log("🚀 ~ resetPassword ~ error:", error);
    handleAxiosError(
      error,
      "An unexpected error occurred. Please try again later."
    );
  }
};
