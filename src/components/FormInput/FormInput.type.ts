import { SxProps } from "@mui/material";

export interface FormInputProps {
  label?: string;
  type: string;
  startDecorator: React.ReactNode;
  placeholder: string;
  id: string;
  register: Register;
  validation: Validation;
  error?: string;
  sx?: SxProps;
}
