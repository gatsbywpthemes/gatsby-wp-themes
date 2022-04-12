import React, { useContext, memo } from "react";
import { CommentDate } from "./CommentDate";
import { CommentForm } from "./CommentForm";
import { CommentContent } from "./CommentContent";
import { CommentAuthor } from "./CommentAuthor";
import { ReplyButton } from "./ReplyButton";
import { CommentNestingInfo } from "./CommentNestingInfo";
import { CommentContainer } from "./CommentContainer";
import { SetActiveCommentContext } from "./context";

export const Comment = memo(
  ({ comment, withReply, activeComment }) => {
    const { author, date, content, commentId } = comment;
    const setActiveComment = useContext(SetActiveCommentContext);
    return (
      <CommentContainer>
        <CommentAuthor name={author?.node?.name} url={author?.node?.url} />
        <CommentDate date={date} />
        <CommentContent content={content} />
        {withReply ? (
          activeComment === commentId ? (
            <CommentForm />
          ) : (
            <ReplyButton onClick={() => setActiveComment(commentId)} />
          )
        ) : (
          <CommentNestingInfo />
        )}
      </CommentContainer>
    );
  },
  (prev, next) =>
    (prev.activeComment === prev.comment.commentId &&
      next.activeComment === next.comment.commentId) ||
    (prev.activeComment !== prev.comment.commentId &&
      next.activeComment !== next.comment.commentId)
);
