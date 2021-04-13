import React, { useContext } from 'react'
import { useCommentForm } from 'gingerThemeComponents/comments/hooks/useCommentForm'
import {
  Box,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
} from '@chakra-ui/react'
import { Input } from 'gingerThemeUiComponents/Input'
import {
  CommentStatusFeedback,
  CommentSubmitButton,
  CommentNotes,
} from 'gingerThemeComponents'
import { inputFields } from './inputfields'
import {
  ActiveCommentContext,
  SetActiveCommentContext,
} from 'gingerThemeComponents/comments/context'

export const CommentForm = () => {
  const activeComment = useContext(ActiveCommentContext)
  const setActiveComment = useContext(SetActiveCommentContext)
  const { register, errors, commentStatus, onSubmit } = useCommentForm()

  return (
    <>
      <CommentStatusFeedback commentStatus={commentStatus} />
      {!commentStatus && (
        <Box>
          {activeComment === 0 ? (
            <Box as="h2" textAlign="center">
              Leave a comment
            </Box>
          ) : (
            <Button
              variant="link"
              display="flex"
              ml="auto"
              color="inherit"
              className="comment-button-cancel"
              onClick={() => setActiveComment(0)}
            >
              <span>Cancel</span>
            </Button>
          )}
          <Flex
            as="form"
            wrap="wrap"
            justify="space-between"
            boxShadow="0 20px 40px rgba(0,0,0,.4)"
            p={['4', '8']}
            sx={{
              '.comment &': {
                boxShadow: 'none',
              },
            }}
            onSubmit={onSubmit}
            noValidate
          >
            <CommentNotes />
            {inputFields.map((el) => {
              const Tag = el.tag
              const pStyles =
                Tag === 'textarea'
                  ? {
                      w: 'full',
                    }
                  : {
                      w: ['full', 'calc(50% - 1rem)'],
                    }
              const textarea =
                Tag === 'textarea' ? { rows: 6, cols: 48, h: 'auto' } : {}
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
                    {errors[el.name]?.type === 'required' && (
                      <span className="error">Required</span>
                    )}
                    {errors[el.name]?.type === 'pattern' && (
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
