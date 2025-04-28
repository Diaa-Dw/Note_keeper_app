import { useNavigate, useParams } from "react-router-dom";
import { verifyEmailRequest } from "../api/verify.api";
import { useMutation } from "@tanstack/react-query";
import { useAuthDispatch } from "../../../contexts/Auth/useAuth";

export function useVerifyEmail() {
  const dispatch = useAuthDispatch();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => verifyEmailRequest(token!),
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: user });
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    },
    onError: (error: Error) => {
      console.error(error.message);
    },
  });

  return { token, mutation };
}
