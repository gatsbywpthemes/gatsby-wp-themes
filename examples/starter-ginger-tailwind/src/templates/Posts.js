import React from "react";

export default function Posts({ posts, ctx }) {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx;
  console.log({ posts });
  return <div>Posts</div>;
}
