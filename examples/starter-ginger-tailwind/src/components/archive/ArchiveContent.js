import React from "react";
import PostEntry from "../post/PostEntry";
import ArchiveTitle from "./ArchiveTitle";
import Description from "./Description";
import Pagination from "./Pagination";

export default function ArchiveContent({
  posts,
  ctx,
  name,
  text = "Posts from: ",
  description,
}) {
  return (
    <div className="page-wrapper">
      <section className="page-content">
        {name && <ArchiveTitle text={text} name={name} />}
        {description && <Description description={description} />}
        {posts.nodes &&
          posts.nodes.map((post, index) => (
            <PostEntry key={post.id} post={post} isFirst={index === 0} />
          ))}
      </section>
      <Pagination ctx={ctx} />
    </div>
  );
}
