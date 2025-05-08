import { TitleRounded } from "@mui/icons-material";
import { Button, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormTextarea } from "..";
import { FormInput } from "../../../../components";
import { updateNoteRequest } from "../../API/note.api";
import {
  contentValidation,
  titleValidation,
} from "../../validation/Note.schema";
import { EditModalFormType, EditNoteModalProps } from "./EditNoteModal.type";

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
    formState: { errors },
  } = useForm<EditModalFormType>({
    defaultValues: {
      title,
      content,
    },
  });

  const queryClient = useQueryClient();

  const editNoteMutation = useMutation({
    mutationFn: ({
      title,
      content,
      noteId,
    }: Omit<EditNoteModalProps, "open" | "onClose">) =>
      updateNoteRequest(title, content, noteId),
    onSuccess: () => {
      toast.success("Note updated successfully🎉");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onEditNote = (data: EditModalFormType) => {
    const { title, content } = data;
    editNoteMutation.mutate({ title, content, noteId });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: "90%", maxWidth: "550px" }}>
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
              <Button
                type='submit'
                color='primary'
                loading={editNoteMutation.isPending}
              >
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
