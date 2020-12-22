import React from 'react'
import { Twitter, Facebook, Pinterest, Linkedin } from './icons'
import { FiShare2 } from 'react-icons/fi'
import { Flex, Box, useColorModeValue } from '@chakra-ui/react'

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        mx="auto"
        mb="3"
        w="8"
        h="8"
        bg={useColorModeValue('cardColor', 'modes.dark.cardColor')}
        color={useColorModeValue('cardBg', 'modes.dark.cardBg')}
        borderRadius="50%"
        fontSize="sm"
        aria-label="Share on social networks"
      >
        <FiShare2 />
      </Flex>

      <Flex
        as="ul"
        wrap="wrap"
        justify="center"
        mb="8"
        textStyle="listRaw"
        fontSize="xs"
        fontWeight="bold"
      >
        <Box as="li" textStyle="separateWithSlashes">
          <Twitter url={url} title={title}>
            Twitter
          </Twitter>
        </Box>
        <Box as="li" textStyle="separateWithSlashes">
          <Facebook url={url} quote={title}>
            Facebook
          </Facebook>
        </Box>
        <Box as="li" textStyle="separateWithSlashes">
          <Pinterest url={url} media={media}>
            Pinterest
          </Pinterest>
        </Box>
        <Box as="li" textStyle="separateWithSlashes">
          <Linkedin url={url}>Linkedin</Linkedin>
        </Box>
      </Flex>
    </>
  )
}
