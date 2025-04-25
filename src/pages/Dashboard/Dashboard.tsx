import { Button } from "@mui/joy";
import AuthGuard from "../../components/AuthGuard";
import SearchInput from "./components/SearchInput";
import { ActionsBox, DashboardContainer } from "./Dashboard.style";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
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
      </DashboardContainer>
    </AuthGuard>
  );
};

export default Dashboard;
