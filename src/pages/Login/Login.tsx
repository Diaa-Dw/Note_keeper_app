import FormInput from "../../components/FormInput";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {
  LoginCard,
  LoginWrapper,
  RightAlignedLinkWrapper,
} from "./Login.style";
import { Button, Link, Typography } from "@mui/joy";
import PasswordInput from "../../components/PasswordInput";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginCard>
        <Typography component={"h2"} level='h2'>
          Welcome Back
        </Typography>
        <FormInput
          label='Email'
          type='email'
          placeholder='example@gmail.com'
          startDecorator={<EmailRoundedIcon />}
        />

        <PasswordInput label='Password' />

        <Button size='lg'>Login</Button>

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
