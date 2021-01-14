import React, { useRef, useState, useEffect } from 'react'
import { DiscussionEmbed } from 'disqus-react'

export const DisqusComments = ({ post, disqus }) => {
  const [reload, setReload] = useState(true)

  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }

  return (
    <div className="border-top border-dark pt-4">
      <DiscussionEmbed
        shortname={disqusConfig.shortname}
        config={{ ...disqusConfig.config }}
      />
    </div>
  )
}
