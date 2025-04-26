import { Dispatch, SetStateAction } from "react";

export interface SearchInputProps {
  type: string;
  placeholder: string;
  setDebouncedTerm: Dispatch<SetStateAction<string>>;
}
