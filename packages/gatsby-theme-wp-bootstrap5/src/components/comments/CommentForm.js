/* eslint-disable no-useless-escape */
import React, { useContext } from 'react'
import { useCommentForm } from 'bootstrap5ThemeComponents/comments/hooks/useCommentForm'
import {
  CommentStatusFeedback,
  CommentSubmitButton,
  CommentNotes,
} from 'bootstrap5ThemeComponents'
import { inputFields } from './inputfields'
import { CommentsListContext } from 'bootstrap5ThemeComponents/comments/context'

export const CommentForm = () => {
  const { activeComment, cancelReply } = useContext(CommentsListContext)
  const { register, errors, commentStatus, onSubmit } = useCommentForm()

  return (
    <>
      <CommentStatusFeedback commentStatus={commentStatus} />
      {!commentStatus && (
        <div>
          {activeComment === 0 ? (
            <h2 className="h3 text-center">Leave a comment</h2>
          ) : (
            <button
              type="button"
              className="btn btn-sm btn-dark"
              onClick={cancelReply}
            >
              <span>Cancel</span>
            </button>
          )}
          <form onSubmit={onSubmit} noValidate>
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
                    {...register(el.name, {
                      required: el.required,
                      pattern: el.pattern,
                    })}
                    type={el.type}
                    id={el.name}
                    placeholder={el.placeholder}
                    aria-required={el.required}
                    style={{ ...style }}
                  />
                  <label htmlFor={el.name}>{el.label}</label>
                  {errors[el.name] && errors[el.name].type === 'required' && (
                    <span className="error text-danger">Required</span>
                  )}
                  {errors[el.name] && errors[el.name].type === 'pattern' && (
                    <span className="error text-danger">Invalid value</span>
                  )}
                </div>
              )
            })}
            <CommentSubmitButton commentStatus={commentStatus} />
          </form>
        </div>
      )}
    </>
  )
}
