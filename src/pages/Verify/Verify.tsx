import { useVerifyEmail } from "./hooks/useVerifyEmail";
import { Alert, Box, CircularProgress, Typography } from "@mui/joy";

const Verify = () => {
  const { isLoading, error } = useVerifyEmail();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography level='h4'>Verifying your email...</Typography>
      </Box>
    );
  }
  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: 2,
          px: 2,
          textAlign: "center",
        }}
      >
        <Alert color='danger' variant='solid'>
          {error.message}
        </Alert>
        <Typography level='h4' color='danger'>
          Verification failed
        </Typography>
      </Box>
    );

  return null;
};

export default Verify;
