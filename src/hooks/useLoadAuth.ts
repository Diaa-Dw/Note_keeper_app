import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getCurrentUserRequest } from "../API/user.api";
import { useAuthDispatch, useAuthState } from "../contexts/Auth/useAuth";

const useLoadAuth = () => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const hasJWT = !!Cookies.get("jwt");

  const { data, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserRequest,
    enabled: hasJWT && !user,
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: "LOGIN", payload: data });
    }

    if (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Failed to load auth, please login.";

      toast.error(message);
      navigate("/login");
    }
  }, [data, error, dispatch, navigate]);
};

export default useLoadAuth;
