import { InfoOutlined } from "@mui/icons-material";
import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";
import { FormTextareaProps } from "./FormTextarea.type";

const FormTextarea = ({
  label,
  type = "text",
  placeholder = "",
  id,
  minRows,
  maxRows,
  register,
  validation,
  error,
}: FormTextareaProps) => {
  return (
    <FormControl error={error !== undefined}>
      <FormLabel>{label}</FormLabel>
      <Textarea
        type={type}
        placeholder={placeholder}
        id={id}
        {...register(id, validation)}
        minRows={minRows}
        maxRows={maxRows}
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

export default FormTextarea;
