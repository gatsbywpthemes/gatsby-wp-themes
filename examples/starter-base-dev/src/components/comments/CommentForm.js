import React, { useContext } from "react"
import {
  Box,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"

import { CommentStatusFeedback } from "./index"
import { inputFields } from "./inputfields"
import { CommentsListContext } from "baseComponents/comments/context"
import { useCommentForm } from "baseComponents/comments/hooks/useCommentForm"

export const CommentForm = () => {
  const { activeComment, cancelReply } = useContext(CommentsListContext)
  const { register, errors, commentStatus, onSubmit } = useCommentForm()

  const CommentNotes = () => {
    return (
      <Box
        as="p"
        textStyle="special"
        textAlign="center"
        w="full"
        className="comment-notes"
      >
        <span id="email-notes">Your email address will not be published.</span>
        <br />
        Required fields are marked <span className="required">*</span>
      </Box>
    )
  }

  const CommentSubmitButton = () => {
    return (
      <Box w="full">
        <Button
          d="flex"
          ml="auto"
          className="submit-button"
          type="submit"
          disabled={commentStatus === "loading"}
        >
          Post Comment
        </Button>
      </Box>
    )
  }

  return (
    <>
      <CommentStatusFeedback commentStatus={commentStatus} />
      {!commentStatus && (
        <Box>
          {activeComment === 0 ? (
            <Box as="h2" textAlign="center" mb={8}>
              Leave a comment
            </Box>
          ) : (
            <Button
              variant="link"
              display="flex"
              ml="auto"
              color="inherit"
              className="comment-button-cancel"
              onClick={cancelReply}
            >
              <span>Cancel</span>
            </Button>
          )}
          <Flex
            as="form"
            wrap="wrap"
            justify="space-between"
            bg={colorMode("cardBg", "modes.dark.cardBg")}
            borderRadius="lg"
            p={["4", "8"]}
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
                      layerStyle="input"
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
          </Flex>
        </Box>
      )}
    </>
  )
}
