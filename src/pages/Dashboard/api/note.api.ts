import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8080/api/v1/notes";

export const createNewNote = async ({
  title,
  content,
}: Omit<Note, "_id" | "createdAt">) => {
  try {
    const token = Cookies.get("jwt");

    const res = await axios.post(
      API_URL,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return res.data.data;
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
