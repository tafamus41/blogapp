import React from "react";
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
          Developed by tafamus41
        </Typography>

        <Typography variant="body1">
          Copyright &copy; {new Date().getFullYear()} 
        </Typography>
      </Box>
    </Box>
  );
};

export default FooTer;
