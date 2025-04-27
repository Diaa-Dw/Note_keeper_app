import { Button } from "@mui/joy";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import PasswordInput from "../../../../components/PasswordInput";
import { passwordValidation } from "../../../Login/validation/Login.schema";
import { confirmPasswordValidation } from "../../../Signup/validation/Signup.schema";
import { UpdatePasswordFormType } from "./ChangePasswordForm.type";
import { useMutation } from "@tanstack/react-query";
import { updatePassowrd } from "../../api/user.api";
import toast from "react-hot-toast";

const ChangePasswordForm = () => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const updatePassswordMutation = useMutation({
    mutationFn: updatePassowrd,
    onSuccess: () => {
      toast.success("Password updated successfully🎉");
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handlePasswordUpdate = (data: UpdatePasswordFormType) => {
    const { currentPassword, newPassword } = data;
    updatePassswordMutation.mutate({ currentPassword, newPassword });
  };

  const newPassword = watch("newPassword");
  return (
    <Stack
      spacing={2}
      component={"form"}
      onSubmit={handleSubmit(handlePasswordUpdate)}
    >
      <PasswordInput
        label='Current Password'
        id='currentPassword'
        register={register}
        validation={passwordValidation}
        error={errors.currentPassword?.message}
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
        id='confirmPassword'
        register={register}
        validation={confirmPasswordValidation(newPassword)}
        error={errors.confirmPassword?.message}
      />
      <Button
        type='submit'
        color='primary'
        fullWidth
        loading={updatePassswordMutation.isPending || isLoading}
      >
        Update Password
      </Button>
    </Stack>
  );
};

export default ChangePasswordForm;
