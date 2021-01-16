import React from 'react'
import {
  PostEntryTitle,
  PostEntryContent,
  PrevNextPostNavigation,
  Tags,
  PublicationDate,
  Categories,
  Author,
  Comments,
  Sidebar,
} from 'bootstrap5ThemeComponents'
import { SocialShare } from '../social'
import { Image } from '../images'
import {} from '../index'

export const PostEntryFull = ({ ctx, post }) => {
  return (
    <article className="row">
      <header
        className="py-5 text-center"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Categories className="mb-3" post={post} />
        <PostEntryTitle post={post} ctx={ctx} location="single" />
        <PublicationDate post={post} location="single" /> &middot;{' '}
        <Author post={post} />
      </header>
      <div id="content" className="col-lg-9">
        <Image img={post.featuredImage} />

        <SocialShare
          url={post.uri}
          title={post.title}
          media={
            post.featuredImage
              ? post.featuredImage.node.localFile.childImageSharp.gatsbyImageData.src
              : null
          }
        />

        <PostEntryContent ctx={ctx} content={post.content} location="single" />
        <div className="shadow bg-light border p-4 mb-5">
          {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
          <PrevNextPostNavigation ctx={ctx} />
        </div>
        <Comments post={post} />
      </div>
      <Sidebar />
    </article>
  );
}
