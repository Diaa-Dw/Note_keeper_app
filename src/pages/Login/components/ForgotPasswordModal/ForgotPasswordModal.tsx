import { EmailRounded } from "@mui/icons-material";
import { Button, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormInput } from "../../../../components";
import { forgotPasswordRequest } from "../../API/auth.api";
import { ForgotPasswordFormType } from "./ForgotPasswordModal.type";
import { emailValidation } from "../../../../validation/auth.validation";

const ForgotPasswordModal = ({ open, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>();

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordRequest,
    onSuccess: () => {
      toast.success(
        "Reset Password link sent successfully. Please check your email."
      );
      onClose();
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
              loading={forgotPasswordMutation.isPending}
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
