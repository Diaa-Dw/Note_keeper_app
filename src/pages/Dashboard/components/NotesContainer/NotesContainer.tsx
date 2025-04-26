import { Box } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CircularProgress from "../../../../components/CirculareProgress";
import { fetchNotes, searchNotes } from "../../api/note.api";
import NoteCard from "../NoteCard";
import {
  PaginationContainer,
  StyledNotesContainer,
} from "./NoteContainer.style";
import { NoteContainerProps } from "./NoteContainer.type";

const NotesContainer = ({ debouncedTerm }: NoteContainerProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["notes", page, debouncedTerm],
    queryFn: () => {
      if (debouncedTerm.trim() === "") {
        return fetchNotes(page);
      } else {
        return searchNotes(debouncedTerm, page);
      }
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isLoading || isFetching) {
    return <CircularProgress />;
  }
  const { results: notes, pagination } = data;

  return (
    <Box>
      <StyledNotesContainer>
        {notes.map((note: Note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </StyledNotesContainer>

      {pagination.totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            count={pagination.totalPages}
            page={page}
            color='primary'
            onChange={(_, value) => setPage(value)}
          />
        </PaginationContainer>
      )}
    </Box>
  );
};

export default NotesContainer;
