import { Box, Button, TextField } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";

const CommentForm = ({ blogId }) => {
  const [comment, setComment] = useState("");
  const { postComments } = useBlogCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      postComments(blogId, comment); // Yorum ve blogId ile postComment çağır
      setComment(""); // Yorum gönderildikten sonra inputu temizle
    }
  };
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { width: "100%" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="submit">{<AddCommentIcon />}</Button>
    </Box>
  );
};

export default CommentForm;
