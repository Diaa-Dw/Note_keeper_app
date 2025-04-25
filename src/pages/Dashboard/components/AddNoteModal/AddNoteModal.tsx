import {
  Button,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import { AddNoteForm, AddNoteModalProps } from "./AddNoteModal.type";
import { useForm } from "react-hook-form";
import FormInput from "../../../../components/FormInput";
import { CloseRounded, TitleRounded } from "@mui/icons-material";
import { contentValidation, titleValidation } from "./Note.schema";
import FormTextarea from "../FormTextarea";
import { DialogHeader, StyledModalDialog } from "./AddNote.style";

const AddNoteModal = ({ open, onClose }: AddNoteModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddNoteForm>();
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
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onClose();
          }}
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

          <Button size='lg'>Add Note</Button>
        </Stack>
      </StyledModalDialog>
    </Modal>
  );
};

export default AddNoteModal;
