import axios from "axios";

export const handleAxiosError = (error: unknown, fallbackMessage: string) => {
  console.log("🚀 ~ handleAxiosError ~ error:", error);
  if (axios.isAxiosError(error)) {
    const message =
      error?.response?.data?.message || error?.message || fallbackMessage;
    throw new Error(message);
  } else {
    throw new Error(fallbackMessage);
  }
};
