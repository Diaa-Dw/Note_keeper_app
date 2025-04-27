import { AccountCircle } from "@mui/icons-material";
import { Button, Stack } from "@mui/joy";
import { useForm } from "react-hook-form";
import FormInput from "../../../../components/FormInput";
import { usernameValidation } from "../../../Signup/validation/Signup.schema";
import { UpdateUsernameFormProps } from "./UpdateUsernameForm.type";

const UpdateUsernameForm = ({ name }: UpdateUsernameFormProps) => {
  const {
    register,
    watch,
    formState: { isLoading, errors },
  } = useForm({
    defaultValues: {
      username: name,
    },
  });

  const username = watch("username");
  const handleUsernameUpdate = () => {};
  return (
    <Stack spacing={2}>
      <Stack direction='row' alignItems='center' spacing={1}>
        <FormInput
          placeholder='Full Name'
          type='text'
          id='username'
          startDecorator={<AccountCircle />}
          register={register}
          validation={usernameValidation}
          error={errors.username?.message}
          sx={{ flexGrow: 1 }}
        />

        <Button
          size='sm'
          onClick={handleUsernameUpdate}
          disabled={name.toLocaleLowerCase() === username?.toLocaleLowerCase()}
          loading={isLoading}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default UpdateUsernameForm;
