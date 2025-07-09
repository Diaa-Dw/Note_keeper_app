import {
  InfoOutlined,
  LockRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
} from "@mui/joy";
import { useState } from "react";
import { PasswordInputProps } from "./PasswordInput.type";

const PasswordInput = ({
  label,
  id,
  register,
  validation,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl error={error !== undefined}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={showPassword ? "text" : "password"}
        id={id}
        {...register(id, validation)}
        startDecorator={<LockRounded />}
        endDecorator={
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
          </IconButton>
        }
      />
      {error && (
        <FormHelperText>
          <InfoOutlined />
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordInput;
