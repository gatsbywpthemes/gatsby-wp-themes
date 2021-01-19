import { useState, useContext } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { CommentsListContext } from 'gingerThemeComponents/comments/context'

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
export const useCommentForm = () => {
  const { databaseId, activeComment, cancelReply, doOnCompleted } = useContext(
    CommentsListContext
  )
  const { register, handleSubmit, errors } = useForm()
  const [commentStatus, setCommentStatus] = useState(false)
  const [addComment] = useMutation(commentSubmitQuery, {
    onCompleted() {
      setCommentStatus('success')
      setTimeout(function () {
        doOnCompleted()
        setCommentStatus('')
        cancelReply()
      }, 5000)
    },
    onError() {
      setCommentStatus('error')
    },
  })

  const onSubmit = (data) => {
    setCommentStatus('loading')
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
