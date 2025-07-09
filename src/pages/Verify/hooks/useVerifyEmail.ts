import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthDispatch } from "../../../contexts/Auth/useAuth";
import { verifyEmailRequest } from "../API/verify.api";

export function useVerifyEmail() {
  const dispatch = useAuthDispatch();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user", token],
    queryFn: () => verifyEmailRequest(token!),
    enabled: !!token,
  });

  if (user) {
    dispatch({ type: "LOGIN", payload: user });
    navigate("/");
    toast.success("Email verified successfully 🎉");
  }

  if (error) {
    toast.error(
      error instanceof Error
        ? error.message
        : "Something went wrong while verifying your email."
    );
  }

  return { isLoading, error };
}
