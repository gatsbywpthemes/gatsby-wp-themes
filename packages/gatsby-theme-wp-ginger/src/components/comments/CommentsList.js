/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { commentStyles } from '../../styles/comments'

const CommentsList = ({ post }) => {
  const { comments } = post
  const [activeComment, setActiveComment] = useState(0)
  const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = id => {
    setActiveComment(id)
  }
  return (
    <Fragment>
      {comments.nodes.length > 0 ? (
        <section>
          <h2 sx={{ ...commentStyles.title }}>Comments</h2>
          <ul sx={{ ...commentStyles.list }}>
            {comments.nodes.map(comment => (
              <Fragment key={comment.id}>
                <Comment
                  withReply={true}
                  postId={post.postId}
                  activeComment={activeComment}
                  comment={comment}
                  addReply={addReply}
                  cancelReply={cancelReply}
                ></Comment>
                {comment.children.nodes.length > 0 && (
                  <ul>
                    {comment.children.nodes.map(reply => (
                      <Fragment key={reply.id}>
                        <Comment
                          withReply={true}
                          postId={post.postId}
                          activeComment={activeComment}
                          comment={reply}
                          addReply={addReply}
                          cancelReply={cancelReply}
                        ></Comment>
                        {reply.children.nodes.length > 0 && (
                          <ul>
                            {reply.children.nodes.map(replyRe => (
                              <Comment
                                withReply={false}
                                key={replyRe.id}
                                comment={replyRe}
                              />
                            ))}
                          </ul>
                        )}
                      </Fragment>
                    ))}
                  </ul>
                )}
              </Fragment>
            ))}
          </ul>
        </section>
      ) : (
        <p sx={{ ...commentStyles.noComments }}>No comments yet</p>
      )}
      {activeComment === 0 && <CommentForm postId={post.postId} />}
    </Fragment>
  )
}

export default CommentsList
