import { FormControl, FormLabel, Input } from "@mui/joy";
import { FormInputProps } from "./FormInput.type";

const FormInput = ({
  label,
  type = "text",
  startDecorator,
  placeholder = "",
}: FormInputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        startDecorator={startDecorator}
      />
    </FormControl>
  );
};

export default FormInput;
