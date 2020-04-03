/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import PostEntryIntro from '../PostEntryIntro'
import PostEntryContent from '../PostEntryContent'
import PrevNextPostNavigation from '../PrevNextPostNavigation'
import Tags from '../Tags'
import CommentsList from '../../comments/CommentsList'
import { FiChevronsDown } from 'react-icons/fi'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { article } from '../../../styles/article'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Image from '../../images/Image'
import { commentsSection } from '../../../styles/comments'

const PostEntry = ({ ctx, post }) => {
  const bgStyles = !!post.featuredImage
    ? {
        backgroundImage: `url(${post.featuredImage.imageFile.childImageSharp.fluid.src})`,
      }
    : {}
  const { addWordPressComments } = useThemeOptions()
  return (
    <article>
      <header data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <Flex
          sx={{
            ...article.full.splash,
            ...bgStyles,
          }}
          className="splash"
        >
          <div
            className="featured-wrapper"
            sx={{
              display: 'none',
              position: 'absolute',
              zIndex: '-3',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Image img={post.featuredImage} />
          </div>
          <PostEntryIntro
            post={post}
            ctx={ctx}
            location="single"
            variant={'full'}
          />
          <button
            type="button"
            sx={{
              ...article.button.scrolldown,
            }}
            aria-label="Scroll to content"
            onClick={() => scrollTo('#content')}
          >
            <FiChevronsDown />
          </button>
        </Flex>
      </header>
      <div
        id="content"
        sx={{
          ...article.full.content,
        }}
      >
        <PostEntryContent ctx={ctx} content={post.content} location="single" />
        {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
        <PrevNextPostNavigation ctx={ctx} />
      </div>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <section sx={commentsSection}>
          <CommentsList post={post} />
        </section>
      )}
    </article>
  )
}

export default PostEntry
