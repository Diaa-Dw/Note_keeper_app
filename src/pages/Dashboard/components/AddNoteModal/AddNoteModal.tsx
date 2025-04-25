import { CloseRounded, TitleRounded } from "@mui/icons-material";
import { Button, DialogTitle, Modal, Stack, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormInput from "../../../../components/FormInput";
import { createNewNote } from "../../api/note.api";
import FormTextarea from "../FormTextarea";
import { DialogHeader, StyledModalDialog } from "./AddNote.style";
import { AddNoteForm, AddNoteModalProps } from "./AddNoteModal.type";
import { contentValidation, titleValidation } from "./Note.schema";

const AddNoteModal = ({ open, onClose }: AddNoteModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddNoteForm>();

  const noteMutation = useMutation({
    mutationFn: createNewNote,
    onSuccess: (data) => {
      toast.success(`${data.title} has been created!`);
      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onAddNote = (data: AddNoteForm) => {
    const { title, content } = data;
    noteMutation.mutate({ title, content });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalDialog>
        <DialogHeader>
          <DialogTitle>
            <Typography>Create new project</Typography>
          </DialogTitle>
          <Button variant='outlined' color='neutral' onClick={onClose}>
            <CloseRounded />
          </Button>
        </DialogHeader>

        <Stack
          spacing={2}
          component={"form"}
          onSubmit={handleSubmit(onAddNote)}
        >
          <FormInput
            label='Title'
            type='text'
            placeholder='Note title'
            startDecorator={<TitleRounded />}
            id='title'
            register={register}
            validation={titleValidation}
            error={errors?.title?.message}
          />

          <FormTextarea
            label='Content'
            type='text'
            placeholder='Note content'
            id='content'
            minRows={3}
            maxRows={6}
            register={register}
            validation={contentValidation}
            error={errors?.content?.message}
          />

          <Button
            type='submit'
            size='lg'
            loading={noteMutation.isPending || isSubmitting}
          >
            Add Note
          </Button>
        </Stack>
      </StyledModalDialog>
    </Modal>
  );
};

export default AddNoteModal;
