import { useState, useContext, useEffect, useRef } from "react"
import { useMutation, gql } from "@apollo/client"
import { useForm } from "react-hook-form"
import {
  CommentsListContext,
  ActiveCommentContext,
  SetActiveCommentContext,
} from "../context"

const commentSubmitQuery = gql`
  mutation (
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
export const useCommentForm = () => {
  const timeoutRef = useRef(null)
  const { databaseId, doOnCompleted } = useContext(CommentsListContext)
  const activeComment = useContext(ActiveCommentContext)
  const setActiveComment = useContext(SetActiveCommentContext)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        doOnCompleted()
      }
    }
  }, [doOnCompleted])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [commentStatus, setCommentStatus] = useState(false)
  const [addComment] = useMutation(commentSubmitQuery, {
    onCompleted() {
      setCommentStatus("success")
      timeoutRef.current = setTimeout(function () {
        doOnCompleted()
        setCommentStatus("")
        setActiveComment(0)
      }, 5000)
    },
    onError() {
      setCommentStatus("error")
    },
  })

  const onSubmit = (data) => {
    setCommentStatus("loading")
    addComment({
      variables: {
        author: data.author,
        commentOn: databaseId,
        content: data.comment,
        authorEmail: data.email,
        parent: activeComment,
      },
    })
  }

  return {
    register,
    handleSubmit,
    errors,
    commentStatus,
    onSubmit: handleSubmit(onSubmit),
  }
}
