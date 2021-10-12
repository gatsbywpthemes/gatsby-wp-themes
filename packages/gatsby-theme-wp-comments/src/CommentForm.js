import React, { useContext } from "react"
import { useCommentForm } from "./hooks/useCommentForm"

import {
  CommentStatusFeedback,
  CommentSubmitButton,
  CommentNotes,
} from "./index"
import { inputFields } from "./inputfields"
import { ActiveCommentContext, SetActiveCommentContext } from "./context"

export const CommentForm = () => {
  const activeComment = useContext(ActiveCommentContext)
  const setActiveComment = useContext(SetActiveCommentContext)
  const { register, errors, commentStatus, onSubmit } = useCommentForm()

  return (
    <>
      <CommentStatusFeedback commentStatus={commentStatus} />
      {!commentStatus && (
        <div>
          {activeComment === 0 ? (
            <h2>Leave a comment</h2>
          ) : (
            <button
              className="comment-button-cancel"
              onClick={() => setActiveComment(0)}
            >
              <span>Cancel</span>
            </button>
          )}
          <form onSubmit={onSubmit} noValidate>
            <CommentNotes />
            {inputFields.map((el) => {
              const Tag = el.tag
              return (
                <div>
                  <label htmlFor={el.name}>
                    {el.label}
                    <Tag
                      {...register(el.name, {
                        required: el.required,
                        pattern: el.pattern,
                      })}
                      type={el.type}
                      id={el.name}
                      placeholder={el.placeholder}
                      aria-required={el.required}
                    />
                  </label>
                  {errors[el.name]?.type === "required" && (
                    <span className="error">Required</span>
                  )}
                  {errors[el.name]?.type === "pattern" && (
                    <span className="error">Invalid value</span>
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
