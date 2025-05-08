import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getCurrentUser } from "../API/user.api";
import { useAuthDispatch } from "../contexts/Auth/useAuth";

const useLoadAuth = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const hasJWT = !!Cookies.get("jwt");

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: hasJWT,
  });

  useEffect(() => {
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }

    if (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Failed to load auth, please login.";

      toast.error(message);
      navigate("/login");
    }
  }, [user, error, dispatch, navigate]);
};

export default useLoadAuth;
