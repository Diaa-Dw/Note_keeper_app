import { Modal, ModalDialog, Button, Typography, Stack } from "@mui/joy";
import { ConfirmDeleteModalProps } from "./ConfirmDeleteModal.type";

export default function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog variant='outlined'>
        <Typography level='h3'>Confirm Deletion</Typography>
        <Typography>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='flex-end' mt={2}>
          <Button variant='outlined' color='neutral' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='solid' color='danger' onClick={onConfirm}>
            Delete
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
}
