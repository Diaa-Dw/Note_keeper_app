import { DeleteRounded, EditNoteRounded } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/joy";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteNote } from "../../api/note.api";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import EditNoteModal from "../EditNoteModal";
import { NoteHeader } from "./NoteCard.style";
import { NoteCardProps } from "./NoteCard.type";
import ShowNoteModal from "../ShowNoteModal";
import toast from "react-hot-toast";

const NoteCard = ({ note }: NoteCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [showFullNote, setShowFullNote] = useState(false);
  const { title, content, _id } = note;

  const isLongContent = content.length > 100;
  const previewContent = isLongContent
    ? content.substring(0, 100) + "..."
    : content;

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: () => deleteNote(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error(error.message);
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
          <Button
            variant='plain'
            color='neutral'
            size='sm'
            onClick={() => setOpenEditModal(true)}
          >
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
        <Typography sx={{ wordBreak: "break-all" }}>
          {previewContent}
        </Typography>
        {isLongContent && (
          <Button
            variant='plain'
            onClick={() => setShowFullNote(true)}
            sx={{ alignSelf: "flex-start", mt: "10px" }}
          >
            Show More
          </Button>
        )}
      </CardContent>

      <Typography>2025-04-24</Typography>

      <ConfirmDeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={onDeleteNote}
      />

      <EditNoteModal
        open={openEditModal}
        title={title}
        content={content}
        noteId={_id}
        onClose={() => setOpenEditModal(false)}
      />

      <ShowNoteModal
        open={showFullNote}
        title={title}
        content={content}
        onClose={() => setShowFullNote(false)}
      />
    </Card>
  );
};

export default NoteCard;
