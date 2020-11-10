/** @jsx jsx */
import { jsx, Center, Heading, IconButton, HStack } from '@chakra-ui/core'
import React from 'react'
import { Twitter, Facebook, Pinterest } from './icons'
import { FiShare2 } from 'react-icons/fi'

export const SocialShare = ({ url, title, media }) => {
  return (
    <Center flexDirection="column" mt={10}>
      <Heading as="h3" fontSize="md" textTransform="uppercase">
        Share on social media
      </Heading>
      <IconButton
        isRound={true}
        variant="outline"
        colorScheme="gray"
        size="sm"
        cursor="auto"
        icon={<FiShare2 />}
      />

      <HStack fontWeight="bold" fontSize="sm" mt={4}>
        <Twitter url={url} title={title}>
          Twitter
        </Twitter>
        <span>/</span>
        <Facebook url={url} quote={title}>
          Facebook
        </Facebook>
        <span>/</span>
        <Pinterest url={url} media={media}>
          Pinterest
        </Pinterest>
      </HStack>
    </Center>
  )
}
