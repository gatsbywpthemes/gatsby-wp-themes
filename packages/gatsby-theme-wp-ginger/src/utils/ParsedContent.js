import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'
import { domToReact } from 'html-react-parser'

const ClientSideOnlyLazy = React.lazy(() =>
  import('../components/FancyBoxWrapper')
)

let counter = 0

const fancyBoxParserFunction = (node, { parserOptions }) => {
  const isSSR = typeof window === 'undefined'
  if (
    node.name &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf('wp-block-gallery') > -1
  ) {
    counter = counter + 1
    return (
      <>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy
              classNames={node.attribs.class}
              counter={counter}
              tag={node.name}
            >
              {domToReact(node.children, parserOptions)}
            </ClientSideOnlyLazy>
          </React.Suspense>
        )}
      </>
    )
  }
}

const ParsedContent = ({ content }) => {
  console.log('parsing')
  return (
    <ContentParser
      content={content}
      customFn={[cf7ParserFunction, fancyBoxParserFunction]}
    />
  )
}

export default ParsedContent
