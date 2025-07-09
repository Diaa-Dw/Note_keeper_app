import { Button, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { ShowNoteModalProps } from "./ShowNoteModal.type";
import { Close } from "@mui/icons-material";

const ShowNoteModal = ({
  open,
  title,
  content,
  onClose,
}: ShowNoteModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: "90%", maxWidth: "450px" }}>
        <Stack spacing={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography level='h3'>{title}</Typography>
            <Button color={"neutral"} variant={"outlined"} onClick={onClose}>
              <Close />
            </Button>
          </Stack>

          <Typography sx={{ wordBreak: "break-word" }}>{content}</Typography>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default ShowNoteModal;
