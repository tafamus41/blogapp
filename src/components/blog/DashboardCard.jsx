import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

export default function DashboardCard({ blog }) {
  const navigate = useNavigate();
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(blog.likes.length);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1); // Eğer like edilmişse, geri al
    } else {
      setLikeCount(likeCount + 1); // Eğer like edilmemişse, like et
    }
    setLiked(!liked); // Like durumunu tersine çevir
  };

  const isoDate = blog.createdAt;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString();

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="Porsche"
        height="140"
        image={blog.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "65px",
          }}
        >
          {blog.content}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Published Date : {`${formattedDate} ${formattedTime}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton onClick={handleLikeClick}>
            <FavoriteIcon sx={{ color: liked ? "red" : "inherit" }} />
          </IconButton>
          {likeCount}
          <IconButton>
            <ChatBubbleOutlineIcon />
            {blog.comments.length}
          </IconButton>
          <IconButton>
            <RemoveRedEyeIcon />
            {blog.countOfVisitors}
          </IconButton>
        </Box>
        <Button
          size="small"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
          }}
          onClick={() => navigate(`/detail/${blog._id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
