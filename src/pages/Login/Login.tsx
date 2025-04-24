import FormInput from "../../components/FormInput";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {
  LoginCard,
  LoginWrapper,
  RightAlignedLinkWrapper,
} from "./Login.style";
import { Button, Link, Typography } from "@mui/joy";
import PasswordInput from "../../components/PasswordInput";
import { useForm } from "react-hook-form";
import { LoginFormData } from "./Login.type";
import { emailValidation, passwordValidation } from "./Login.schema";
import { useMutation } from "@tanstack/react-query";
import login from "./api/login";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuthDispatch } from "../../contexts/Auth/useAuth";

const Login = () => {
  console.log(Cookies.get("jwt"));
  const dispatch = useAuthDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: ({ user, token }) => {
      toast.success(`Welcome back, ${user.username}!`);
      dispatch({ type: "LOGIN", payload: { user, token } });
    },
    onError: (error) => {
      toast.error(
        error?.message || "Somting went wrong while login please try again."
      );
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

        <Button
          type='submit'
          size='lg'
          loading={loginMutation.isPending || isSubmitting}
        >
          Login
        </Button>

        <RightAlignedLinkWrapper>
          <Link level='body-sm' color='neutral' href='/forgotPassword'>
            Forgot Password?
          </Link>
        </RightAlignedLinkWrapper>

        <Typography level='body-sm' textAlign='center' fontSize='1.2rem'>
          Don&apos;t have an account?{" "}
          <Link level='body-sm' fontWeight={500} color='success' href='/signup'>
            Sign up
          </Link>
        </Typography>
      </LoginCard>
    </LoginWrapper>
  );
};

export default Login;
