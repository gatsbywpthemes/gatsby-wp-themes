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

const PostEntry = ({ ctx, post }) => {
  const bgStyles = !!post.featuredImage
    ? {
        backgroundImage: `url(${post.featuredImage.imageFile.childImageSharp.fluid.src})`,
      }
    : {}
  console.log(article)
  return (
    <article data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
      <Flex
        sx={{
          ...article.full.splash,
          ...bgStyles,
        }}
        className="splash"
      >
        <PostEntryIntro
          post={post}
          ctx={ctx}
          location="single"
          variant={{ variant: 'card.full' }}
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
      {post.commentStatus === 'open' && (
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
