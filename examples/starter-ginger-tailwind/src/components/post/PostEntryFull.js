import React from "react";
import Image from "~/components/Image";
import Comments from "./Comments";
import PostEntryContent from "./PostEntryContent";
import PostEntryIntro from "./PostEntryIntro";
import PrevNextPostNavigation from "./PrevNextPostNavigation";
import ScrollToContentButton from "./ScrollToContentButton";
import Tags from "./Tags";

export default function PostEntryFull({ ctx, post }) {
  return (
    <article>
      <header data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <div>
          <div className="featured-wrapper">
            <Image img={post.featuredImage} />
          </div>
          <PostEntryIntro post={post} ctx={ctx} />
          <ScrollToContentButton />
        </div>
      </header>
      <div id="content" className="page-content">
        <PostEntryContent ctx={ctx} content={post.content} />
        {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
        <PrevNextPostNavigation ctx={ctx} />
      </div>
      <Comments post={post} />
    </article>
  );
}
