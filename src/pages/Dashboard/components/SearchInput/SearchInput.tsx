import { Input } from "@mui/joy";
import { SearchInputProps } from "./SearchInput.type";
import { SearchRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

const SearchInput = ({
  type = "search",
  placeholder = "",
  setDebouncedTerm,
}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms after user stops typing

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, setDebouncedTerm]);

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={searchTerm}
      startDecorator={<SearchRounded />}
      onChange={(e) => setSearchTerm(e.target.value)}
      size='lg'
      sx={{ width: "100%", maxWidth: "360px" }}
    />
  );
};

export default SearchInput;
