/** @jsx jsx */
import { jsx, Flex } from '@chakra-ui/core'
import { TransparentCard } from 'uiComponents'
import moment from 'moment'
import { CommentForm } from './index'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <Flex
      as="button"
      type="button"
      mt={4}
      ml="auto"
      textStyle="special"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
    >
      Reply
    </Flex>
  )
}

const Author = ({ name, url }) => {
  return (
    <div>
      {url ? (
        <a
          className="comment-author"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      ) : (
        <span className="comment-author">{name}</span>
      )}
    </div>
  )
}

export const Comment = (props) => {
  const {
    comment,
    activeComment,
    postId,
    withReply,
    addReply,
    cancelReply,
    doOnCompleted,
  } = props
  return (
    <TransparentCard as="li" listStyleType="none" mb={4} className="comment">
      <Author name={comment.author.name} url={comment.author.url} />
      {moment(comment.date).format(`MMMM D, YYYY`)}
      <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm
            commentId={comment.commentId}
            postId={postId}
            cancelReply={cancelReply}
            doOnCompleted={doOnCompleted}
          />
        ) : (
          <Flex>
            <Reply commentId={comment.commentId} actionOnClick={addReply} />
          </Flex>
        )
      ) : (
        <p className="comment-nesting-info">
          Only two levels of nesting is supported.
        </p>
      )}
    </TransparentCard>
  )
}
