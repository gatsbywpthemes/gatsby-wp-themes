import React, { Suspense } from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { WordPressComments } from 'bootstrap5ThemeComponents'

const DisqusComments = React.lazy(() =>
  import(
    /* webpackChunkName: "DisqusComments", webpackExports: ["DisqusComments"] */ 'bootstrap5ThemeComponents'
  ).then((mod) => ({ default: mod.DisqusComments }))
)

export const Comments = ({ post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <Suspense fallback={<></>}>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <WordPressComments post={post} />
      )}
      {!!disqus && (
        <div className="border-top border-dark pt-4">
          <DisqusComments disqus={disqus} post={post} />
        </div>
      )}
    </Suspense>
  )
}
