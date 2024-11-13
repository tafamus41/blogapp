import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "83.1vh" }}>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        alignItems="center"
        sx={{
          my: "5rem",
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
            <PersonIcon />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="primary.main">
            Login
          </Typography>
          {/* LOGİN FORM */}
          <LoginForm />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
