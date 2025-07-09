import { Button } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "../../validation/auth.validation";
import { resetPasswordRequest } from "./API/resetPassword.api";
import {
  ResetPasswordCard,
  ResetPasswordWrapper,
} from "./styles/ResetPassword.style";
import { ResetPasswordFormType } from "./types/ResetPassword.type";

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormType>();

  const newPassword = watch("newPassword");

  const mutation = useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      resetPasswordRequest(token, password),
    onSuccess: () => {
      reset();
      toast.success("Successfully reset password🎉");
      navigate("/");
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while trying to reset your password. Please try again.";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: ResetPasswordFormType) => {
    if (!token) {
      toast.error("Token is invalid!");
      return;
    }
    mutation.mutate({ token, password: data.newPassword });
  };

  return (
    <ResetPasswordWrapper component={"main"}>
      <ResetPasswordCard component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <PasswordInput
          label='New Password'
          id='newPassword'
          register={register}
          validation={passwordValidation}
          error={errors.newPassword?.message}
        />
        <PasswordInput
          label='Confirm New Password'
          id='confirmPassword'
          register={register}
          validation={confirmPasswordValidation(newPassword)}
          error={errors.confirmPassword?.message}
        />
        <Button
          type='submit'
          color='primary'
          fullWidth
          loading={mutation.isPending}
        >
          Reset Password
        </Button>
      </ResetPasswordCard>
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
