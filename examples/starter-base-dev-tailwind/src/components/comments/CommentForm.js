import React, { useContext } from "react"
import {
  Box,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"
import { Input, TextSpecial } from "baseUiComponents"
import { CommentStatusFeedback } from "./index"
import { inputFields } from "./inputfields"
import { CommentsListContext } from "baseComponents/comments/context"
import { useCommentForm } from "baseComponents/comments/hooks/useCommentForm"
import clsx from "clsx"

export const CommentForm = () => {
  const { activeComment, cancelReply } = useContext(CommentsListContext)
  const { register, errors, commentStatus, onSubmit } = useCommentForm()

  const CommentNotes = () => {
    return (
      <TextSpecial as="p" className="w-full text-center comment-notes">
        <span id="email-notes">Your email address will not be published.</span>
        <br />
        Required fields are marked <span className="required">*</span>
      </TextSpecial>
    )
  }

  const CommentSubmitButton = () => {
    return (
      <div className="w-full">
        <button
          className="flex ml-auto submit-button"
          type="submit"
          disabled={commentStatus === "loading"}
        >
          Post Comment
        </button>
      </div>
    )
  }

  return (
    <>
      <CommentStatusFeedback commentStatus={commentStatus} />
      {!commentStatus && (
        <div>
          {activeComment === 0 ? (
            <h2 className="mb-8 text-center">Leave a comment</h2>
          ) : (
            <button
              className="flex ml-auto comment-button-cancel"
              onClick={cancelReply}
            >
              <span>Cancel</span>
            </button>
          )}
          <form
            className={clsx(
              "flex flex-wrap justify-between",
              "bg-cardBg dark:bg-dark-cardBg",
              "rounded-lg",
              "p-4 sm:p-8"
            )}
            onSubmit={onSubmit}
            noValidate
          >
            <CommentNotes />
            {inputFields.map((el) => {
              const Tag = el.tag
              const pStyles =
                Tag === "textarea"
                  ? {
                      w: "full",
                    }
                  : {
                      w: ["full", "calc(50% - 1rem)"],
                    }
              const textarea =
                Tag === "textarea" ? { rows: 6, cols: 48, h: "auto" } : {}
              return (
                <FormControl
                  key={el.name}
                  isInvalid={errors[el.name]}
                  mb="6"
                  {...pStyles}
                >
                  <FormLabel
                    textStyle="special"
                    fontWeight="bold"
                    htmlFor={el.name}
                    mb="0"
                  >
                    {el.label}
                    <Input
                      as={Tag}
                      d="block"
                      {...register(el.name, {
                        required: el.required,
                        pattern: el.pattern,
                      })}
                      type={el.type}
                      id={el.name}
                      placeholder={el.placeholder}
                      aria-required={el.required}
                      {...textarea}
                    />
                  </FormLabel>
                  <FormErrorMessage fontStyle="italic" mt="0">
                    {errors[el.name]?.type === "required" && (
                      <span className="error">Required</span>
                    )}
                    {errors[el.name]?.type === "pattern" && (
                      <span className="error">Invalid value</span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              )
            })}
            <CommentSubmitButton commentStatus={commentStatus} />
          </form>
        </div>
      )}
    </>
  )
}
