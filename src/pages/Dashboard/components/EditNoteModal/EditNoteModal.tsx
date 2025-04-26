import { Box, Button, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { EditNoteModalProps } from "./EditNoteModal.type";
import FormInput from "../../../../components/FormInput";
import { TitleRounded } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import FormTextarea from "../FormTextarea";
import {
  titleValidation,
  contentValidation,
} from "../../validation/Note.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../../api/note.api";
import toast from "react-hot-toast";

const EditNoteModal = ({
  open,
  title,
  content,
  noteId,
  onClose,
}: EditNoteModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm({
    defaultValues: {
      title,
      content,
    },
  });

  const queryClient = useQueryClient();

  const editNoteMutation = useMutation({
    mutationFn: ({ title, content, noteId }) =>
      updateNote(title, content, noteId),
    onSuccess: (data) => {
      toast.success("Note updated successfully🎉");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
    },
    onError: (error) => {
      console.log("🚀 ~ error:", error);
    },
  });

  const onEditNote = (data) => {
    const { title, content } = data;
    editNoteMutation.mutate({ title, content, noteId });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: "90%", maxWidth: "450px" }}>
        <Stack spacing={2}>
          <Typography level='h3'>Edit Note</Typography>

          <Stack
            spacing={2}
            component={"form"}
            onSubmit={handleSubmit(onEditNote)}
          >
            <FormInput
              label='Title'
              type='text'
              placeholder='Note title'
              id='title'
              startDecorator={<TitleRounded />}
              register={register}
              validation={titleValidation}
              error={errors.title?.message}
            />

            <FormTextarea
              label='Content'
              type='text'
              placeholder='Note title'
              id='content'
              minRows={4}
              maxRows={6}
              register={register}
              validation={contentValidation}
              error={errors.content?.message}
            />

            <Stack direction='row' justifyContent='flex-end' spacing={2}>
              <Button variant='outlined' color='neutral' onClick={onClose}>
                Cancel
              </Button>
              <Button type='submit' color='primary'>
                Save Changes
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default EditNoteModal;
