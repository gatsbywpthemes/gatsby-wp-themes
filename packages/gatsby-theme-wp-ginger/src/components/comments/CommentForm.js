/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { commentStyles, replyButton } from '../../styles/comments'

const commentSubmitQuery = gql`
  mutation(
    $author: String
    $commentOn: Int
    $content: String
    $authorEmail: String
    $parent: ID
  ) {
    createComment(
      input: {
        clientMutationId: "CreateComment"
        author: $author
        commentOn: $commentOn
        content: $content
        authorEmail: $authorEmail
        parent: $parent
      }
    ) {
      success
    }
  }
`

const inputFields = [
  {
    tag: 'textarea',
    name: 'comment',
    type: null,
    label: 'Comment*',
    required: true,
    placeholder: 'Your comment',
    pattern: null,
  },
  {
    tag: 'input',
    name: 'author',
    type: 'text',
    label: 'Name*',
    required: true,
    pattern: null,
  },
  {
    tag: 'input',
    name: 'email',
    type: 'email',
    label: 'Email*',
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  {
    tag: 'input',
    name: 'url',
    type: 'url',
    label: 'Website',
    required: false,
    pattern: /^$|(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
  },
]

const CommentForm = ({ commentId = 0, postId, cancelReply, doOnCompleted }) => {
  const { register, handleSubmit, errors } = useForm()
  const [commentStatus, setCommentStatus] = useState(false)
  const [addComment] = useMutation(commentSubmitQuery, {
    onCompleted() {
      setCommentStatus('success')
      setTimeout(function() {
        doOnCompleted()
        setCommentStatus('')
      }, 5000)
    },
    onError() {
      setCommentStatus('error')
    },
  })

  const CommentNotes = () => {
    return (
      <p className="comment-notes">
        <span id="email-notes">Your email address will not be published.</span>
        <br />
        Required fields are marked <span className="required">*</span>
      </p>
    )
  }

  const CommentSubmitButton = () => {
    return (
      <button
        className="submit-button"
        type="submit"
        disabled={commentStatus === 'loading'}
      >
        Post Comment
      </button>
    )
  }

  const onSubmit = data => {
    setCommentStatus('loading')
    addComment({
      variables: {
        author: data.author,
        commentOn: postId,
        content: data.comment,
        authorEmail: data.email,
        parent: commentId,
      },
    })
  }

  const CommentStatusFeedback = () => {
    switch (commentStatus) {
      case 'success':
        return (
          <p>
            Your comment has been successfully submitted. If it does not appear
            in a few seconds, it means that it is awaiting moderation.
          </p>
        )
      case 'loading':
        return <p>Please wait. Your comment is being submitted.</p>
      case 'error':
        return (
          <p>There was an error in your submission. Please try again later.</p>
        )
      default:
        return ''
    }
  }

  return (
    <Fragment>
      {!!commentStatus && <CommentStatusFeedback />}
      {!commentStatus && (
        <div sx={{ ...commentStyles.formWrapper }}>
          {!commentId && (
            <h2 sx={{ ...commentStyles.title }}>Leave a comment</h2>
          )}
          {!!commentId && (
            <button
              sx={{ ...replyButton }}
              type="button"
              className="comment-button-cancel"
              onClick={cancelReply}
            >
              <span>Cancel</span>
            </button>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ ...commentStyles.form }}
          >
            <CommentNotes />
            {inputFields.map(el => {
              const Tag = el.tag
              const textarea = Tag === 'textarea' ? { rows: 6, cols: 48 } : {}
              return (
                <p key={el.name} className={`comment-form-${el.name}`}>
                  <label htmlFor={el.name}>{el.label}</label>
                  <Tag
                    ref={register({
                      required: el.required,
                      pattern: el.pattern,
                    })}
                    type={el.type}
                    id={el.name}
                    name={el.name}
                    placeholder={el.placeholder}
                    aria-required={el.required}
                    {...textarea}
                  />
                  {errors[el.name] && errors[el.name].type === 'required' && (
                    <span className="error">Required</span>
                  )}
                  {errors[el.name] && errors[el.name].type === 'pattern' && (
                    <span className="error">Invalid value</span>
                  )}
                </p>
              )
            })}
            <CommentSubmitButton />
          </form>
        </div>
      )}
    </Fragment>
  )
}

export default CommentForm
