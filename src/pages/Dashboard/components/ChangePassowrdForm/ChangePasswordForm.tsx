import { Button } from "@mui/joy";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import PasswordInput from "../../../../components/PasswordInput";
import { passwordValidation } from "../../../Login/validation/Login.schema";
import { confirmPasswordValidation } from "../../../Signup/validation/Signup.schema";
import { UpdatePasswordFormType } from "./ChangePasswordForm.type";

const ChangePasswordForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassowrd: "",
    },
  });

  const handlePasswordUpdate = (data: UpdatePasswordFormType) => {
    console.log("🚀 ~ handlePasswordUpdate ~ data:", data);
  };

  const newPassword = watch("newPassword");
  return (
    <Stack
      spacing={2}
      component={"form"}
      onSubmit={handleSubmit(handlePasswordUpdate)}
    >
      <PasswordInput
        label='Old Password'
        id='oldPassword'
        register={register}
        validation={passwordValidation}
        error={errors.oldPassword?.message}
      />
      <PasswordInput
        label='New Password'
        id='newPassword'
        register={register}
        validation={passwordValidation}
        error={errors.newPassword?.message}
      />
      <PasswordInput
        label='Confirm New Password'
        id='confirmPassowrd'
        register={register}
        validation={confirmPasswordValidation(newPassword)}
        error={errors.confirmPassowrd?.message}
      />
      <Button type='submit' color='primary' fullWidth loading={isLoading}>
        Update Password
      </Button>
    </Stack>
  );
};

export default ChangePasswordForm;
