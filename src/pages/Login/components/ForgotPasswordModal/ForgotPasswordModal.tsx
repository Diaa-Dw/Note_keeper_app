import { Button, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { useForm } from "react-hook-form";
import FormInput from "../../../../components/FormInput";
import { EmailRounded } from "@mui/icons-material";
import { emailValidation } from "../../validation/Login.schema";
import { forgotPassword } from "../../api/auth.api";
import toast from "react-hot-toast";
import { ForgotPasswordFormType } from "./ForgotPasswordModal.type";
import { useMutation } from "@tanstack/react-query";

const ForgotPasswordModal = ({ open, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormType>();

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success(
        "Reset Password link sent successfully. Please check your email."
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: ForgotPasswordFormType) => {
    const { email } = data;
    forgotPasswordMutation.mutate(email);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: "90%", maxWidth: "350px" }}>
        <Typography level='h3'>Reset Password</Typography>

        <Stack spacing={2} component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='Email'
            type='email'
            id='email'
            placeholder='example@gmail.com'
            startDecorator={<EmailRounded />}
            register={register}
            validation={emailValidation}
            error={errors.email?.message}
          />

          <Stack direction='row' spacing={2} justifyContent='flex-end' mt={2}>
            <Button variant='outlined' color='neutral' onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant='solid'
              color='primary'
              type='submit'
              loading={isSubmitting}
            >
              Reset Password
            </Button>
          </Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default ForgotPasswordModal;
