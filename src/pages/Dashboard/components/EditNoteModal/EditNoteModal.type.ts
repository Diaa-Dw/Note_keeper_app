export interface EditModalFormType {
  title: string;
  content: string;
}

export interface EditNoteModalProps extends ModalProps {
  title: string;
  content: string;
  noteId: string;
}
