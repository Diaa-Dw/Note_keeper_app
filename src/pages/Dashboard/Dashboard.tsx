import { Button } from "@mui/joy";
import AuthGuard from "../../components/AuthGuard";
import SearchInput from "./components/SearchInput";
import {
  ActionsBox,
  DashboardContainer,
  NotesContainer,
} from "./Dashboard.style";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import NoteCard from "./components/NoteCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "./api/note.api";
import CircularProgress from "../../components/CirculareProgress";
import { Pagination } from "@mui/material";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  if (isLoading) {
    return <CircularProgress />;
  }
  const { results: notes, pagination } = data;
  console.log("🚀 ~ Dashboard ~ data:", data);

  return (
    <AuthGuard requireAuth={true}>
      <DashboardContainer>
        <ActionsBox>
          <SearchInput
            type='search'
            placeholder='Search a note'
            onChange={() => {}}
          />

          <Button
            size='lg'
            startDecorator={<Add />}
            sx={{ fontSize: "1.6rem" }}
            onClick={() => setOpenModal(true)}
          >
            Add Note
          </Button>
        </ActionsBox>

        <AddNoteModal open={openModal} onClose={() => setOpenModal(false)} />

        <NotesContainer>
          {notes.map((note: Note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </NotesContainer>

        <Pagination
          count={pagination.totalPages}
          page={page}
          color='primary'
          onChange={(_, value) => setPage(value)}
        />
      </DashboardContainer>
    </AuthGuard>
  );
};

export default Dashboard;
