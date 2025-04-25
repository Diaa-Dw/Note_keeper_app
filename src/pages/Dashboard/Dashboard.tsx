import { Button } from "@mui/joy";
import AuthGuard from "../../components/AuthGuard";
import SearchInput from "./components/SearchInput";
import { ActionsBox, DashboardContainer } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <AuthGuard requireAuth={true}>
      <DashboardContainer>
        <ActionsBox>
          <SearchInput
            type='search'
            placeholder='Search a note'
            onChange={() => {}}
          />

          <Button size='lg'>Add Note</Button>
        </ActionsBox>
      </DashboardContainer>
    </AuthGuard>
  );
};

export default Dashboard;
