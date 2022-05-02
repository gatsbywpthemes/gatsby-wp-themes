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
        <div className="relative h-[70vh] lg:min-h-screen lg:h-screen blog-header">
          <div className="featured-wrapper absolute inset-0 w-full h-full">
            <Image img={post.featuredImage} />
          </div>
          <div className="content absolute inset-0 flex items-center justify-center">
            <div className="t-w lg:w-[45rem] bg-white z-[1] relative text-center bg-opacity-80 border-8 p-8 border-white">
              <PostEntryIntro post={post} ctx={ctx} />
              {/* <ScrollToContentButton /> */}
            </div>
          </div>
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
