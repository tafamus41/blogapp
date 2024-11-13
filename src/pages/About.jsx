import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <Card
      align="center"
      sx={{
        width: "100%",
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        minHeight: "89.3vh",
        border: "none",
      }}
    >
      <CardMedia
        sx={{ height: 100, width: 100 }}
        image="https://images.penguinrandomhouse.com/cover/9780593463291"
        title="night birds"
      />
      <CardContent>
        <Typography gutterBottom variant="h3">
          Night Birds
        </Typography>
        <Typography variant="h5">Non-stop Flying</Typography>
      </CardContent>
      <CardActions sx={{ gap: 2 }}>
        <LinkedInIcon sx={{ ":hover": { color: "blue", cursor: "pointer" } }} />
        <TwitterIcon sx={{ ":hover": { color: "blue", cursor: "pointer" } }} />
        <InstagramIcon sx={{ ":hover": { color: "red", cursor: "pointer" } }} />
        <YouTubeIcon sx={{ ":hover": { color: "red", cursor: "pointer" } }} />
      </CardActions>
    </Card>
  );
};

export default About;
