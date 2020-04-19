/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { Link } from 'gatsby'
import PostEntryTitle from './PostEntryTitle'
import PostEntryMedia from './PostEntryMedia'
import PostEntryContent from './PostEntryContent'
import PostEntryMeta from './PostEntryMeta'
import PostEntryInfo from './PostEntryInfo'
import normalize from 'normalize-path'
import SocialShare from '../social/SocialShare'
import articleStyles from '../../styles/articleStyles'
import gutenberg from '../../styles/theme-gutenberg'

const PostEntry = ({ post, location }) => {
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
    >
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <div className={`content ${noImgClass}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />
        <div id="content" sx={{ ...gutenberg }}>
          <PostEntryContent
            location={location}
            post={post}
            className="entry-content"
          />
        </div>
        <div className="entry-footer" sx={{ mt: `xl` }}>
          <PostEntryMeta className="entry-meta" post={post} />
          {location !== 'single' && (
            <Flex sx={{ justifyContent: [`center`, `flex-end`] }}>
              <Button
                className="read-more"
                a11YTitle="Read More from this post"
                variant="secondary"
                sx={{ mt: `20px` }}
              >
                <Link to={`/${post.uri}`} aria-label="Read More from this post">
                  Read More
                </Link>
              </Button>
            </Flex>
          )}
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
