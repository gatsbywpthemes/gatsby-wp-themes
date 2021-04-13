import React, { useRef, useState, useEffect } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { useColorMode, Container } from '@chakra-ui/react'

export const DisqusComments = ({ post, disqus }) => {
  const { colorMode } = useColorMode()
  const [reload, setReload] = useState(true)

  const cm = useRef(colorMode)
  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }
  useEffect(() => {
    setTimeout(() => {
      if (cm.current !== colorMode) {
        setReload((r) => !r)
        cm.current = colorMode
      }
    }, 100)
  }, [colorMode])
  return (
    <Container>
      <DiscussionEmbed
        reload={String(reload)}
        shortname={disqusConfig.shortname}
        config={{ ...disqusConfig.config }}
      />
    </Container>
  )
}
