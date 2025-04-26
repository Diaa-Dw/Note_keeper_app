import axios from "axios";
import { LoginFormData } from "../Login.type";
import Cookies from "js-cookie";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = "http://127.0.0.1:8080/api/v1/users/login";

const login = async ({ email, password }: LoginFormData) => {
  // Check if email and password are provided
  console.log("🚀 ~ login ~ email:", email);
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const res = await axios.post(
      API_URL,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );

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

    return user;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while logging in. Please try again later."
    );
  }
};

export default login;
