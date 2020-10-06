/** @jsx jsx */
import { jsx } from 'theme-ui'
import moment from 'moment'
import { CommentForm } from './index'
import { commentStyles } from '../../styles'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      sx={commentStyles.replyButton}
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
    <li className="comment" sx={commentStyles.comment}>
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
          <Reply commentId={comment.commentId} actionOnClick={addReply} />
        )
      ) : (
        <p className="comment-nesting-info">
          Only two levels of nesting is supported.
        </p>
      )}
    </li>
  )
}
