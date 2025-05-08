import { Add } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { useState } from "react";
import { AddNoteModal, NotesContainer, SearchInput } from "./components";
import { ActionsBox, DashboardContainer } from "./styles/Dashboard.style";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState("");

  return (
    <DashboardContainer>
      <ActionsBox>
        <SearchInput
          type='search'
          placeholder='Search a note'
          setDebouncedTerm={setDebouncedTerm}
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

      <NotesContainer debouncedTerm={debouncedTerm} />

      <AddNoteModal open={openModal} onClose={() => setOpenModal(false)} />
    </DashboardContainer>
  );
};

export default Dashboard;
