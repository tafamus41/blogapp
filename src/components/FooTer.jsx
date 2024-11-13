import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
const FooTer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "70px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          Developed by some Fullstack Developers
        </Typography>

        <Typography variant="body1">
          Copyright &copy; {new Date().getFullYear()} nightBirds.co
        </Typography>
      </Box>
    </Box>
  );
};

export default FooTer;
