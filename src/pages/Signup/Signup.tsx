import { Button, Link, Typography } from "@mui/joy";
import { SignupnCard, SignupnWrapper } from "./Signup.style";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import { EmailRounded, Person } from "@mui/icons-material";
import PasswordInput from "../../components/PasswordInput";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <SignupnWrapper>
      <SignupnCard>
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
          validation={{}}
          error={errors.username?.message}
        />

        <FormInput
          label='Email'
          type='email'
          id='email'
          placeholder='example@gmail.com'
          startDecorator={<EmailRounded />}
          register={register}
          validation={{}}
          error={errors.email?.message}
        />

        <PasswordInput
          label='Password'
          id='password'
          register={register}
          validation={{}}
          error={errors.password?.message}
        />

        <PasswordInput
          label='Confirm Password'
          id='password'
          register={register}
          validation={{}}
          error={errors.password?.message}
        />

        <Button type='submit' size='lg' loading={isSubmitting}>
          Sign up
        </Button>

        <Typography level='body-sm' textAlign='center' fontSize='1.2rem'>
          Already have an account?{" "}
          <Link level='body-sm' fontWeight={500} color='success' href='/login'>
            Login
          </Link>
        </Typography>
      </SignupnCard>
    </SignupnWrapper>
  );
};

export default Signup;
