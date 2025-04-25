import { Input } from "@mui/joy";
import { SearchInputProps } from "./SearchInput.type";
import { SearchRounded } from "@mui/icons-material";

const SearchInput = ({
  type = "search",
  placeholder = "",
  onChange,
}: SearchInputProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      startDecorator={<SearchRounded />}
      onChange={onChange}
      size='lg'
      sx={{ width: "100%", maxWidth: "360px" }}
    />
  );
};

export default SearchInput;
