import React from 'react'
import { CommentsList } from 'bootstrap5ThemeComponents'
import { useCommentsList } from 'bootstrap5ThemeComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'bootstrap5ThemeComponents/comments/context'

export const WordPressComments = ({ post }) => {
  const commentsFromQuery = useCommentsList(post)
  return (
    <section className="border-top border-dark pt-4 mb-5">
      <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
        <CommentsList />
      </CommentsListContext.Provider>
    </section>
  )
}
