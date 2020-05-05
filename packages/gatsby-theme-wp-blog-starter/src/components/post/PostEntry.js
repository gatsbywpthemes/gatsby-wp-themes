/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { Link } from 'gatsby'
import PostEntryTitle from './PostEntryTitle'
import PostEntryMedia from './PostEntryMedia'
import PostEntryContent from './PostEntryContent'
import PostEntryMeta from './PostEntryMeta'
import PostEntryInfo from './PostEntryInfo'
import ReadMoreButton from './ReadMoreButton'
import normalize from 'normalize-path'
import SocialShare from '../social/SocialShare'
import articleStyles from '../../styles/articleStyles'

const PostEntry = ({ post, location, ...props }) => {
  const noImgClass = !post.featuredImage ? 'no-img' : ''
  const media = post.featuredImage
    ? post.featuredImage.remoteFile.childImageSharp.fluid.src
    : null
  return (
    <article
      className="entry"
      sx={{
        ...articleStyles,
        '.entry-content': {
          pb: `m`,
          borderBottom: t => `1px solid ${t.colors.border}`,
        },
      }}
      {...props}
    >
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <div className={`content ${noImgClass}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        <div className="entry-footer" sx={{ mt: `xl` }}>
          <PostEntryMeta className="entry-meta" post={post} />
          <ReadMoreButton location={location} post={post} />
        </div>
        {location === 'single' && (
          <SocialShare
            url={normalize(`/${post.uri}`)}
            title={post.title}
            media={media}
          />
        )}
      </div>
    </article>
  )
}

export default PostEntry
