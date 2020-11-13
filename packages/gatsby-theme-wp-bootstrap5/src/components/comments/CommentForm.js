import React from 'react'
import { Fragment, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useForm } from 'react-hook-form'

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
    placeholder: 'Joe Doe',
  },
  {
    tag: 'input',
    name: 'email',
    type: 'email',
    label: 'Email*',
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    placeholder: 'joe@doe.com',
  },
  {
    tag: 'input',
    name: 'url',
    type: 'url',
    label: 'Website',
    required: false,
    pattern: /^$|(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
    placeholder: 'https://joe.doe.com',
  },
]

export const CommentForm = ({
  commentId = 0,
  postId,
  cancelReply,
  doOnCompleted,
}) => {
  const { register, handleSubmit, errors } = useForm()
  const [commentStatus, setCommentStatus] = useState(false)
  const [addComment] = useMutation(commentSubmitQuery, {
    onCompleted() {
      setCommentStatus('success')
      doOnCompleted()
      setTimeout(function () {
        setCommentStatus('')
        cancelReply()
      }, 5000)
    },
    onError() {
      setCommentStatus('error')
    },
  })

  const CommentNotes = () => {
    return (
      <p className="comment-notes text-center">
        <span id="email-notes">Your email address will not be published.</span>
        <br />
        Required fields are marked <span className="required">*</span>
      </p>
    )
  }

  const CommentSubmitButton = () => {
    return (
      <button
        className="btn btn-dark text-uppercase"
        type="submit"
        disabled={commentStatus === 'loading'}
      >
        Post Comment
      </button>
    )
  }

  const onSubmit = (data) => {
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
        <div>
          {!commentId && <h2 className="h3 text-center">Leave a comment</h2>}
          {!!commentId && (
            <button
              type="button"
              className="btn btn-sm btn-dark"
              onClick={cancelReply}
            >
              <span>Cancel</span>
            </button>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <CommentNotes />
            {inputFields.map((el) => {
              const Tag = el.tag
              const style = Tag === 'textarea' ? { height: '8rem' } : {}
              return (
                <div
                  key={el.name}
                  className={`form-floating mb-2 comment-form-${el.name}`}
                >
                  <Tag
                    className="form-control"
                    ref={register({
                      required: el.required,
                      pattern: el.pattern,
                    })}
                    type={el.type}
                    id={el.name}
                    name={el.name}
                    placeholder={el.placeholder}
                    aria-required={el.required}
                    style={{ ...style }}
                  />
                  <label htmlFor={el.name}>{el.label}</label>
                  {errors[el.name] && errors[el.name].type === 'required' && (
                    <span className="error">Required</span>
                  )}
                  {errors[el.name] && errors[el.name].type === 'pattern' && (
                    <span className="error">Invalid value</span>
                  )}
                </div>
              )
            })}
            <CommentSubmitButton />
          </form>
        </div>
      )}
    </Fragment>
  )
}
