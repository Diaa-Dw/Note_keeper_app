import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../contexts/Auth/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutRequest } from "../API/user.api";
import toast from "react-hot-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      queryClient.removeQueries({ queryKey: ["user"] });
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    },
  });
};
