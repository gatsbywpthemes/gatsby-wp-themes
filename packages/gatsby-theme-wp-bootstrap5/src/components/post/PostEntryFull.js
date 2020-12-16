import React from 'react'
import {
  PostEntryTitle,
  PostEntryContent,
  PrevNextPostNavigation,
  Tags,
  PublicationDate,
  Categories,
  Author,
} from './index'
import { SocialShare } from '../social'
import { CommentsList } from '../comments'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Image } from '../images'
import { DiscussionEmbed } from 'disqus-react'
import { Sidebar } from '../index'

export const PostEntryFull = ({ ctx, post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()
  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }

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
              ? post.featuredImage.node.localFile.childImageSharp.fluid.src
              : null
          }
        />

        <PostEntryContent ctx={ctx} content={post.content} location="single" />
        <div className="shadow bg-light border p-4 mb-5">
          {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
          <PrevNextPostNavigation ctx={ctx} />
        </div>
        {!!addWordPressComments && post.commentStatus === 'open' && (
          <section className="border-top border-dark pt-4 mb-5">
            <CommentsList post={post} />
          </section>
        )}
        {!!disqus && (
          <div className="border-top border-dark pt-4">
            <DiscussionEmbed {...disqusConfig} />
          </div>
        )}
      </div>
      <Sidebar />
    </article>
  )
}
