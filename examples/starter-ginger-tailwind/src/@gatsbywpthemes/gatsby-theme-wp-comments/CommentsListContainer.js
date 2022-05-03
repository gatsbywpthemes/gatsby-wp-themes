import React from "react";

export const CommentsListContainer = ({ children }) => {
  return (
    <section>
      <h2>Comments</h2>
      <ul>{children}</ul>
    </section>
  );
};
