import { Button } from "@mui/joy";
import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PasswordInput } from "../../../../components";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "../../../../validation/auth.validation";
import { updatePasswordRequest } from "../../API/user.api";
import { UpdatePasswordFormType } from "./ChangePasswordForm.type";

const ChangePasswordForm = () => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const updatePassswordMutation = useMutation({
    mutationFn: updatePasswordRequest,
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
        loading={updatePassswordMutation.isPending}
      >
        Update Password
      </Button>
    </Stack>
  );
};

export default ChangePasswordForm;
