import { FormLabel } from "@mui/joy";
import { StyledFormControl, StyledInput } from "./FormInput.style";
import { FormInputProps } from "./FormInput.type";

const FormInput = ({
  label,
  type = "text",
  startDecorator,
  placeholder = "",
}: FormInputProps) => {
  return (
    <StyledFormControl>
      <FormLabel>{label}</FormLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        startDecorator={startDecorator}
      />
    </StyledFormControl>
  );
};

export default FormInput;
