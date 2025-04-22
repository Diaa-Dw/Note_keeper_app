import {
  LockRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { FormControl, FormLabel, IconButton, Input } from "@mui/joy";
import { useState } from "react";
import { PasswordInputProps } from "./PasswordInput.type";

const PasswordInput = ({ label }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={showPassword ? "text" : "password"}
        startDecorator={<LockRounded />}
        endDecorator={
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
          </IconButton>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
