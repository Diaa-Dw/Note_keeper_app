import { Button } from "@mui/joy";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "../Signup/validation/Signup.schema";
import {
  ResetPasswordCard,
  ResetPasswordWrapper,
} from "./styles/ResetPassword.style";
import { ResetPasswordFormType } from "./types/ResetPassword.type";
import toast from "react-hot-toast";
import { resetPassword } from "./api/resetPassword.api";

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ResetPasswordFormType>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ResetPasswordFormType) => {
    const { newPassword: password } = data;
    try {
      if (!token) {
        throw new Error("Token is invalid!");
      }
      await resetPassword(token, password);
      reset();
      toast.success("Successfuly reset password🎉");
      navigate("/");
    } catch (error) {
      let errorMessage = "";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage =
          "Somthing went wrong while trying to reset your password. Please try again.";
      }
      toast.error(errorMessage);
    }
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
        <Button type='submit' color='primary' fullWidth loading={isLoading}>
          Reset Password
        </Button>
      </ResetPasswordCard>
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
