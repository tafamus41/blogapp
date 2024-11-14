import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentCard from "../components/blog/CommentCard";
import CommentForm from "../components/blog/CommentForm";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector } from "react-redux";
import UpdateModal from "../components/blog/UpdateModal";
import { NoDataMessage } from "../components/NoDataMessage";
import Loading from "../components/Loading";

const Detail = () => {
  const { getSingleBlog, getComments, getLikes, postLike, deleteBlog } =
    useBlogCalls();
  const { singleblog, likes, loading } = useSelector((state) => state.blog);
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);

  //!MODAL YAPISI
  const initialState = {
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: true,
  };

  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState(initialState);
  const handleOpen = () => {
    setData({
      categoryId: singleblog.categoryId?._id,
      title: singleblog.title,
      content: singleblog.content,
      image: singleblog.image,
      isPublish: singleblog.isPublish,
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };
  const handleLike = () => {
    if (likes.didUserLike) {
      postLike(id);
    } else {
      postLike(id);
    }
  };

  useEffect(() => {
    getSingleBlog(id);
    getComments();
    getLikes(id);
  }, [id]);
  const isoDate = singleblog.createdAt;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString();

  return (
    <>
      {loading ? (
        <Loading />
      ) : singleblog?._id ? (
        <Card
          sx={{
            maxWidth: "1000px",
            m: "auto",
            my: "2rem",
            minHeight: "84.4vh",
          }}
        >
          <CardMedia
            component="img"
            alt="Blog görseli"
            height="140"
            image={singleblog.image}
          />
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={singleblog.userId.username}
            subheader={`${formattedDate} ${formattedTime}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {singleblog.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {singleblog.content}
            </Typography>
          </CardContent>
          <Box>
            {singleblog.isPublish === false && (
              <Button onClick={() => handleOpen()}>Update</Button>
            )}
            {singleblog.isPublish === false && (
              <Button onClick={() => deleteBlog(singleblog._id)}>Delete</Button>
            )}
          </Box>
          <UpdateModal
            handleClose={handleClose}
            open={open}
            data={data}
            setData={setData}
          />
          <CardActions>
            <Button size="small" onClick={handleLike}>
              {likes.didUserLike ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteIcon />
              )}
              {singleblog.likes.length > 0
                ? likes.countOfLikes || singleblog.likes.length
                : singleblog.likes.length}
            </Button>
            <Button size="small" onClick={toggleComments}>
              {showComments ? <CommentIcon /> : <CommentIcon />}
              {singleblog.comments.length}
            </Button>
            <Button size="small">
              <RemoveRedEyeIcon />
              {singleblog.countOfVisitors}
            </Button>
          </CardActions>
          {showComments && (
            <>
              <CommentForm blogId={id} />
              {singleblog.comments?.map((comment) => (
                <CommentCard key={comment._id} comment={comment} />
              ))}
            </>
          )}
        </Card>
      ) : (
        <NoDataMessage />
      )}
    </>
  );
};

export default Detail;
