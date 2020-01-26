/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import moment from 'moment'
import CommentForm from './CommentForm'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
    >
      Reply
    </button>
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

const Comment = props => {
  const {
    comment,
    activeComment,
    postId,
    withReply,
    addReply,
    cancelReply,
  } = props
  return (
    <li className="comment">
      <Author name={comment.author.name} url={comment.author.url} />
      {moment(comment.date).format(`MMMM D, YYYY`)}
      <Styled.root dangerouslySetInnerHTML={{ __html: comment.content }} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm
            commentId={comment.commentId}
            postId={postId}
            cancelReply={cancelReply}
          />
        ) : (
          <Reply commentId={comment.commentId} actionOnClick={addReply} />
        )
      ) : (
        <p className="comment-nesting-info">
          Only two levels nesting is supported.
        </p>
      )}
    </li>
  )
}

export default Comment
