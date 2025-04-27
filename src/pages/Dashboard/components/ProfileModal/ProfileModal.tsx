import { Close } from "@mui/icons-material";
import {
  Button,
  Input,
  Modal,
  ModalDialog,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { useAuthState } from "../../../../contexts/Auth/useAuth";
import UpdateUsernameForm from "../UpdateUsernameForm";

const ProfileModal = ({ open, onClose }) => {
  const { user } = useAuthState();

  const handleUsernameUpdate = () => {};

  if (!user) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog layout='center' sx={{ width: 400 }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography level='h3'>Your Profile</Typography>
          <Button color={"neutral"} variant={"outlined"} onClick={onClose}>
            <Close />
          </Button>
        </Stack>

        {/* Profile Information */}
        <Sheet variant='outlined' sx={{ p: 2, borderRadius: "md", mb: 2 }}>
          <UpdateUsernameForm name={user.username} />
        </Sheet>

        <Typography level='h4' component='h3' mb={1}>
          Change Password
        </Typography>

        {/* Change Password Form */}
        <Stack spacing={2}>
          <Input type='password' placeholder='Old Password' />
          <Input type='password' placeholder='New Password' />
          <Input type='password' placeholder='Confirm New Password' />
          <Button color='primary' fullWidth>
            Update Password
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default ProfileModal;
