import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          minHeight: "91.1vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={2} color="primary.main">
            Register
          </Typography>

          <RegisterForm />

          <Box sx={{ textAlign: "center", mt: 2 }}>
            {/* <Link to="/">Do you have an account?</Link> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
