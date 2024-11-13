const CommentCard = ({ comment }) => {
  return (
    <>
      <div>
        <h4>{comment.userId.username}</h4> {/* Yazan kişi ismi */}
        <p>{comment.comment}</p> {/* Yorum içeriği */}
      </div>
    </>
  );
};

export default CommentCard;
