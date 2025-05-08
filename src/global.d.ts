import type { Theme } from "@mui/joy/styles";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
declare global {
  interface StyledProp {
    theme: Theme;
  }

  interface WithChildren {
    children: React.ReactNode;
  }

  interface User {
    id: string;
    username: string;
    photo: string;
  }

  interface Note {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
  }
  interface Pagination {
    next: number | null;
    prev: number | null;
    page: number;
    limit: number;
    totalPages: number;
    totalCount: number;
  }

  interface NotesResponse {
    results: Note[];
    pagination: Pagination;
  }

  interface ModalProps {
    open: boolean;
    onClose: () => void;
  }

  type Register = UseFormRegister;
  type Validation = RegisterOptions;
}
