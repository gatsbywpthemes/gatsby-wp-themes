import React, { useContext } from "react"
import { useCommentForm } from "../hooks/useCommentForm"
import { ActiveCommentContext, SetActiveCommentContext } from "../context"
import { CommentStatusFeedback } from "../CommentStatusFeedback"
import { CommentNotes } from "../CommentNotes"
import { CommentSubmitButton } from "./CommentSubmitButton"
import { Form } from "./Form"
import { CancelButton } from "./CancelButton"
import { Heading } from "./Heading"
import { FormFields } from "./FormFields"

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
            <Heading />
          ) : (
            <CancelButton onClick={() => setActiveComment(0)} />
          )}
          <Form onSubmit={onSubmit} noValidate>
            <CommentNotes />
            <FormFields register={register} errors={errors} />
            <CommentSubmitButton commentStatus={commentStatus} />
          </Form>
        </div>
      )}
    </>
  )
}
