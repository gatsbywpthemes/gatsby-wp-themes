import React, { useState } from "react"
import { useCommentsList } from "./hooks/useCommentsList"
import {
  CommentsListContext,
  ActiveCommentContext,
  SetActiveCommentContext,
} from "./context"
import { CommentsList } from "./CommentsList"
import { CommentsContainer } from "./CommentsContainer"

const ActiveCommentProvider = ({ children }) => {
  const [activeComment, setActiveComment] = useState(0)
  return (
    <SetActiveCommentContext.Provider value={setActiveComment}>
      <ActiveCommentContext.Provider value={activeComment}>
        {children}
      </ActiveCommentContext.Provider>
    </SetActiveCommentContext.Provider>
  )
}

export const WordPressComments = ({ post }) => {
  const commentsFromQuery = useCommentsList(post)
  return (
    <CommentsContainer>
      <CommentsListContext.Provider value={commentsFromQuery}>
        <ActiveCommentProvider>
          <CommentsList />
        </ActiveCommentProvider>
      </CommentsListContext.Provider>
    </CommentsContainer>
  )
}
