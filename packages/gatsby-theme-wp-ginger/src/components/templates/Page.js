/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import pageStyles from '../../styles/page'
import pageTitle from '../../styles/pageTitle'
import { useLayoutEffect } from 'react'
import jQuery from 'jquery'
import '@fancyapps/fancybox'

const Page = ({ page }) => {
  const { content } = page
  const ogType = page.isFrontPage ? 'website' : 'article'
  useLayoutEffect(() => {
    console.log(jQuery)
    //const $ = jQuery
    /* jQuery('.blocks-gallery-item a').fancybox({
      
    }) */
    jQuery().fancybox({
      selector: '.blocks-gallery-item a',
      buttons: ['slideShow', 'zoom', 'fullScreen', 'close'],
    })
    // Options will go here
  })

  return (
    <Layout useContainer={false}>
      <SEO
        title={page.title}
        description={page.excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : page.uri}
      />
      <article sx={{ pt: '4rem' }}>
        <h1 sx={pageTitle}>
          <span
            className="page-title-value"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
        </h1>
        <div className="entry-content" sx={pageStyles}>
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
