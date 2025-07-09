import { EmailRounded, Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, PasswordInput } from "../../components";
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../../validation/auth.validation";
import { signupRequest } from "./API/auth.api";
import { SignupnCard, SignupnWrapper } from "./styles/Signup.style";
import { SignupFormData } from "./types/Signup.type";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const password = watch("password");

  const signupMutation = useMutation({
    mutationFn: signupRequest,
    onSuccess: (data) => {
      navigate("/");
      reset();
      const message =
        data?.message || "Verify token send to email successfully!";
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSignup = (data: SignupFormData) => {
    const { username, email, password } = data;
    signupMutation.mutate({ username, email, password });
  };

  return (
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

        <Button type='submit' size='lg' loading={signupMutation.isPending}>
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
  );
};

export default Signup;
