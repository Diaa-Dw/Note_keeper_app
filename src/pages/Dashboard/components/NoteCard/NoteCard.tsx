import { DeleteRounded, EditNoteRounded } from "@mui/icons-material";
import { Card, Typography, CardContent, Button, Box } from "@mui/joy";
import { NoteHeader } from "./NoteCard.style";

const NoteCard = () => {
  return (
    <Card sx={{ width: 420 }} variant='outlined'>
      <NoteHeader>
        <Typography level='h3'>Project Ideas</Typography>
        <Box>
          <Button variant='plain' color='neutral' size='sm'>
            <Typography>
              <EditNoteRounded />
            </Typography>
          </Button>

          <Button variant='plain' color='neutral' size='sm'>
            <Typography>
              <DeleteRounded />
            </Typography>
          </Button>
        </Box>
      </NoteHeader>

      <CardContent>
        <Typography>
          Brainstorming session outcomes: 1. Mobile app for task management 2.
          AI-powered content generator 3. Social platform for developers
        </Typography>
      </CardContent>

      <Typography>2025-04-24</Typography>
    </Card>
  );
};

export default NoteCard;
