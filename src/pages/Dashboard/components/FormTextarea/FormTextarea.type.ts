export interface FormTextareaProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  minRows: number;
  maxRows: number;
  register: Register;
  validation: Validation;
  error?: string;
}
