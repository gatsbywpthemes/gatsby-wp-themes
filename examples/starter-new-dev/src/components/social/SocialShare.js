import React from 'react'
import { Center, Heading, IconButton, HStack } from '@chakra-ui/react'
import { Twitter, Facebook, Pinterest } from './icons'
import { FiShare2 } from 'react-icons/fi'

export const SocialShare = ({ url, title, media }) => {
  return (
    <Center flexDirection="column" mt={10}>
      <Heading as="h3" fontSize="base" textTransform="uppercase" mb={4}>
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
        <Twitter url={url} title={title} textStyle="link">
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
