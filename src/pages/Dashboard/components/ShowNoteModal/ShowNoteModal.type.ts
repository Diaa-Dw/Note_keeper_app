export interface ShowNoteModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}
