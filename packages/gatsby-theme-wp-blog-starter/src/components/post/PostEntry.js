/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
} from './index'
import normalize from 'normalize-path'
import { SocialShare } from '../social'

import { articleStyles } from '../../styles'

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? 'no-img' : ''
  const media = post.featuredImage
    ? post.featuredImage.localFile.childImageSharp.fluid.src
    : null
  return (
    <article
      className="entry"
      sx={{
        ...articleStyles,
        '.entry-content': {
          pb: `m`,
          borderBottom: (t) => `1px solid ${t.colors.border}`,
        },
      }}
      {...props}
    >
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <div className={`content ${noImgClass}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title gsReveal"
        />
        <PostEntryInfo className="entry-info gsReveal" post={post} />

        <PostEntryContent
          location={location}
          post={post}
          className="gsReveal"
        />

        <div className="entry-footer" sx={{ mt: `xl` }}>
          <PostEntryMeta className="entry-meta gsReveal" post={post} />
          <ReadMoreButton
            location={location}
            post={post}
            className="gsReveal gsRevealFromLeft"
          />
        </div>
        {location === 'single' && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
              className="gsReveal"
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </div>
    </article>
  )
}
