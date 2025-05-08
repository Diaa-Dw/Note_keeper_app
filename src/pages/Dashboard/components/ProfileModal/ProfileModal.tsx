import { Close } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import { useAuthState } from "../../../../contexts/Auth/useAuth";
import { ChangePasswordForm } from "..";

const ProfileModal = ({ open, onClose }: ModalProps) => {
  const { user } = useAuthState();

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
        <Stack alignItems='center' spacing={1}>
          <Avatar
            alt={user?.username}
            color='primary'
            sx={{
              width: 50,
              height: 50,
              fontSize: "1.6rem",
            }}
          />
          <Typography level='h3' component={"h3"}>
            {user?.username}
          </Typography>
        </Stack>

        <Typography level='h4' component='h3' mb={1}>
          Change Password
        </Typography>

        <ChangePasswordForm />
      </ModalDialog>
    </Modal>
  );
};

export default ProfileModal;
