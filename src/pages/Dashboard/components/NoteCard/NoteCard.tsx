import { DeleteRounded, EditNoteRounded } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/joy";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteNote } from "../../api/note.api";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { NoteHeader } from "./NoteCard.style";
import { NoteCardProps } from "./NoteCard.type";

const NoteCard = ({ note }: NoteCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { title, content, _id } = note;
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: () => deleteNote(_id),
    onSuccess: (data) => {
      console.log("🚀 ~ NoteCard ~ data:", data);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const onDeleteNote = () => {
    deleteMutation.mutate();
    setOpenDeleteModal(false);
  };
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
        onConfirm={onDeleteNote}
      />
    </Card>
  );
};

export default NoteCard;
