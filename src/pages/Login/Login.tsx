import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Button, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, PasswordInput } from "../../components";
import { useAuthDispatch } from "../../contexts/Auth/useAuth";
import {
  emailValidation,
  passwordValidation,
} from "../../validation/auth.validation";
import { loginRequest } from "./API/auth.api";
import { ForgotPasswordModal } from "./components";
import {
  LoginCard,
  LoginWrapper,
  RightAlignedLinkWrapper,
} from "./styles/Login.style";
import { LoginFormData } from "./types/Login.type";

const Login = () => {
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (user) => {
      if (user) {
        toast.success(`Welcome back, ${user.username}!`);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      }
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const onLogin = (data: LoginFormData) => {
    const { email, password } = data;
    loginMutation.mutate({ email, password });
  };

  return (
    <LoginWrapper component={"main"}>
      <LoginCard component={"form"} onSubmit={handleSubmit(onLogin)}>
        <Typography component={"h2"} level='h2'>
          Welcome Back
        </Typography>
        <FormInput
          label='Email'
          type='email'
          id='email'
          placeholder='example@gmail.com'
          startDecorator={<EmailRoundedIcon />}
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

        <Button type='submit' size='lg' loading={loginMutation.isPending}>
          Login
        </Button>

        <RightAlignedLinkWrapper>
          <Button
            color={"neutral"}
            variant={"plain"}
            onClick={() => setOpenForgotPasswordModal(true)}
          >
            Forgot Password?
          </Button>
        </RightAlignedLinkWrapper>

        <Typography level='body-sm' textAlign='center' fontSize='1.2rem'>
          Don&apos;t have an account?{" "}
          <Link className='link primary' to='/signup'>
            Sign up
          </Link>
        </Typography>
      </LoginCard>
      <ForgotPasswordModal
        open={openForgotPasswordModal}
        onClose={() => setOpenForgotPasswordModal(false)}
      />
    </LoginWrapper>
  );
};

export default Login;
