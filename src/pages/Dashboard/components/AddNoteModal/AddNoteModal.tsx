import { TitleRounded } from "@mui/icons-material";
import { Button, Modal, Stack, Typography } from "@mui/joy";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormTextarea } from "..";
import { FormInput } from "../../../../components";
import { createNewNoteRequest } from "../../API/note.api";
import {
  contentValidation,
  titleValidation,
} from "../../validation/Note.schema";
import { StyledModalDialog } from "./AddNote.style";
import { AddNoteForm } from "./AddNoteModal.type";

const AddNoteModal = ({ open, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddNoteForm>();

  useEffect(() => {
    reset();
  }, [open, reset]);

  const queryClient = useQueryClient();
  const noteMutation = useMutation({
    mutationFn: createNewNoteRequest,
    onSuccess: () => {
      toast.success(`New note has been created!`);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
      reset();
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
      <StyledModalDialog sx={{ width: "90%", maxWidth: "550px" }}>
        <Typography level='h3'>Create new project</Typography>

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

          <Stack direction='row' spacing={2} justifyContent='flex-end' mt={2}>
            <Button variant='outlined' color='neutral' onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant='solid'
              color='primary'
              type='submit'
              loading={noteMutation.isPending}
            >
              Add Note
            </Button>
          </Stack>
        </Stack>
      </StyledModalDialog>
    </Modal>
  );
};

export default AddNoteModal;
