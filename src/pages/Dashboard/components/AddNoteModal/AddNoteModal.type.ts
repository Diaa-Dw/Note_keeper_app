export interface AddNoteModalProps {
  open: boolean;
  onClose: () => void;
}

export interface AddNoteForm {
  title: string;
  content: string;
}
