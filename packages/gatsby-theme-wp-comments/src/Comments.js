import React from "react";
import { WordPressComments } from "./WordPressComments";

export const Comments = ({ post }) => {
  return post.commentStatus === "open" && <WordPressComments post={post} />;
};
