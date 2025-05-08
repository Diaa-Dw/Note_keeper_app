import { useNavigate, useParams } from "react-router-dom";
import { verifyEmailRequest } from "../API/verify.api";
import { useMutation } from "@tanstack/react-query";
import { useAuthDispatch } from "../../../contexts/Auth/useAuth";
import toast from "react-hot-toast";

export function useVerifyEmail() {
  const dispatch = useAuthDispatch();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => verifyEmailRequest(token!),
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { token, mutation };
}
