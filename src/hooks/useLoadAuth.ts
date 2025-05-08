import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../API/user.api";
import { useAuthDispatch } from "../contexts/Auth/useAuth";

const useLoadAuth = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: !isUserLoaded,
  });

  useEffect(() => {
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      setIsUserLoaded(true);
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
