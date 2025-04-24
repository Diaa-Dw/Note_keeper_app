import axios from "axios";
import { LoginFormData } from "../Login.type";
import Cookies from "js-cookie";

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

    const data = res.data.data;
    const user = {
      id: data.user._id,
      username: data.user.username,
      photo: data.user?.photo || "",
    };
    const token = data.token;
    //store the user data in local storage
    if (data) {
      localStorage.setItem("user", JSON.stringify(user));
      Cookies.set("token", data.token, {
        expires: 7,
        sameSite: "Lax",
        secure: true,
      });
    }

    return { user, token };
  } catch (error: unknown) {
    console.log("🚀 ~ login ~ error:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Login failed. Please check your credentials.";
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default login;
