import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { FormInputProps } from "./FormInput.type";
import { InfoOutlined } from "@mui/icons-material";

const FormInput = ({
  label,
  type = "text",
  startDecorator,
  placeholder = "",
  id,
  register,
  validation,
  error,
}: FormInputProps) => {
  return (
    <FormControl error={error !== undefined}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        startDecorator={startDecorator}
        id={id}
        {...register(id, validation)}
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

export default FormInput;
