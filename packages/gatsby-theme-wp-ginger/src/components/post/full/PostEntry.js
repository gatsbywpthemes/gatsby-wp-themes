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

const PostEntry = ({ ctx, post }) => {
  const bgStyles = !!post.featuredImage
    ? {
        backgroundImage: `url(${post.featuredImage.imageFile.childImageSharp.fluid.src})`,
      }
    : {}
  const { addComments } = useThemeOptions()
  console.log(post)
  return (
    <article>
      <Flex
        sx={{
          ...article.full.splash,
          ...bgStyles,
        }}
        className="splash"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
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
      <div
        id="content"
        sx={{
          ...article.full.content,
        }}
      >
        <PostEntryContent ctx={ctx} content={post.content} location="single" />
        <Tags post={post} location="single" />
        <PrevNextPostNavigation ctx={ctx} />
      </div>
      {!!addComments && post.commentStatus === 'open' && (
        <section
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="ease"
          sx={{
            ...article.full.content.dark,
          }}
        >
          <CommentsList post={post} />
        </section>
      )}
    </article>
  )
}

export default PostEntry
