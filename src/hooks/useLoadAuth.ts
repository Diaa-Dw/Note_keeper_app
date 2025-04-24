import { Dispatch, useEffect } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "../contexts/Auth/auth.type";

const useLoadAuth = (dispatch: Dispatch<AuthAction>) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt");
    const userJson = localStorage.getItem("user");

    try {
      const user: User | null = userJson ? JSON.parse(userJson) : null;

      if (token && user) {
        dispatch({
          type: "LOGIN",
          payload: {
            user,
            token,
          },
        });
      }
    } catch (error: unknown) {
      let message = "Failed to load auth, please login.";

      if (error instanceof Error && error.message) {
        message = error.message;
      }

      toast.error(message);
      navigate("/login");
    }
  }, [dispatch, navigate]);
};

export default useLoadAuth;
