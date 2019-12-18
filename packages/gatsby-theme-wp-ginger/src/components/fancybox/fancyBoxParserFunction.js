import React from 'react'
import { domToReact } from 'html-react-parser'

const ClientSideOnlyLazy = React.lazy(() => import('./FancyBoxWrapper'))

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

export default fancyBoxParserFunction
