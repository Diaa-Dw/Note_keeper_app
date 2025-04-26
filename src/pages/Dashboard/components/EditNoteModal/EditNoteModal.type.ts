export interface EditNoteModalProps {
  open: boolean;
  title: string;
  content: string;
  noteId: string;
  onClose: () => void;
}
