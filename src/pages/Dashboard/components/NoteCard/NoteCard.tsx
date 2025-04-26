import { DeleteRounded, EditNoteRounded } from "@mui/icons-material";
import { Card, Typography, CardContent, Button, Box } from "@mui/joy";
import { NoteHeader } from "./NoteCard.style";
import { NoteCardProps } from "./NoteCard.type";
import { useState } from "react";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import { useMutation } from "@tanstack/react-query";

const NoteCard = ({ note }: NoteCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { title, content } = note;
  return (
    <Card sx={{ width: 380 }} variant='outlined'>
      <NoteHeader>
        <Typography level='h3'>{title}</Typography>
        <Box>
          <Button variant='plain' color='neutral' size='sm'>
            <Typography>
              <EditNoteRounded />
            </Typography>
          </Button>

          <Button
            variant='plain'
            color='neutral'
            size='sm'
            onClick={() => setOpenDeleteModal(true)}
          >
            <Typography>
              <DeleteRounded />
            </Typography>
          </Button>
        </Box>
      </NoteHeader>

      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>

      <Typography>2025-04-24</Typography>

      <ConfirmDeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {}}
      />
    </Card>
  );
};

export default NoteCard;
