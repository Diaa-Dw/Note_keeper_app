import { Button, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles/NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography level='h1'>404</Typography>
      <Typography level='h2'>Oops! Page not found.</Typography>
      <Typography level='body-md'>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        variant='solid'
        color='primary'
        size='lg'
        onClick={() => navigate("/")}
      >
        Go back home
      </Button>
    </Container>
  );
};

export default NotFound;
