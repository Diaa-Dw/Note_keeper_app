import { Button, Typography } from "@mui/joy";
import { SignupnCard, SignupnWrapper } from "./styles/Signup.style";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import { EmailRounded, Person } from "@mui/icons-material";
import PasswordInput from "../../components/PasswordInput";
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "./validation/Signup.schema";
import { useMutation } from "@tanstack/react-query";
import signup from "./api/signup.auth";
import { SignupFormData } from "./types/Signup.type";
import toast from "react-hot-toast";
import AuthGuard from "../../components/AuthGuard";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();

  const password = watch("password");

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error(
          "An unexpected error occurred while signup please try again."
        );
      }
    },
  });

  const onSignup = (data: SignupFormData) => {
    const { username, email, password } = data;
    signupMutation.mutate({ username, email, password });
  };

  return (
    <AuthGuard requireAuth={false}>
      <SignupnWrapper>
        <SignupnCard component={"form"} onSubmit={handleSubmit(onSignup)}>
          <Typography component={"h2"} level='h2'>
            Create your account
          </Typography>

          <FormInput
            label='Full Name'
            id='username'
            type='text'
            placeholder='Full Name'
            startDecorator={<Person />}
            register={register}
            validation={usernameValidation}
            error={errors.username?.message}
          />

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

          <PasswordInput
            label='Password'
            id='password'
            register={register}
            validation={passwordValidation}
            error={errors.password?.message}
          />

          <PasswordInput
            label='Confirm Password'
            id='confirmPassword'
            register={register}
            validation={confirmPasswordValidation(password)}
            error={errors.confirmPassword?.message}
          />

          <Button
            type='submit'
            size='lg'
            loading={signupMutation.isPending || isSubmitting}
          >
            Sign up
          </Button>

          <Typography level='body-sm' textAlign='center' fontSize='1.2rem'>
            Already have an account?{" "}
            <Link className='link primary' to='/login'>
              Login
            </Link>
          </Typography>
        </SignupnCard>
      </SignupnWrapper>
    </AuthGuard>
  );
};

export default Signup;
