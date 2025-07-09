import { Alert, Box, Stack } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { NoteCard } from "..";
import { CircularProgress } from "../../../../components";
import { fetchNotesRequest, searchNotesRequest } from "../../API/note.api";
import {
  PaginationContainer,
  StyledNotesContainer,
} from "./NoteContainer.style";
import { NoteContainerProps } from "./NoteContainer.type";

const NotesContainer = ({ debouncedTerm }: NoteContainerProps) => {
  const [page, setPage] = useState(1);
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["notes", page, debouncedTerm],
    queryFn: () => {
      if (debouncedTerm.trim() === "") {
        return fetchNotesRequest(page);
      } else {
        return searchNotesRequest(debouncedTerm, page);
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isFetching) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Stack direction={"row"} justifyContent={"center"}>
        <Alert color='danger' size='lg' sx={{ maxWidth: "350px", mt: "16px" }}>
          {error.message}
        </Alert>
      </Stack>
    );
  }

  const { results: notes, pagination } = data as NotesResponse;

  return (
    <Box>
      <StyledNotesContainer>
        {notes.length === 0 ? (
          <Alert color={"neutral"} size={"lg"}>
            No notes available
          </Alert>
        ) : (
          notes.map((note: Note) => <NoteCard key={note._id} note={note} />)
        )}
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
