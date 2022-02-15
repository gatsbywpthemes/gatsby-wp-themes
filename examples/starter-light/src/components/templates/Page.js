import React from "react"
import { Layout } from "~/components/Layout"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri } = page

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original
  return (
    <Layout page={page} type="page">
      <Seo
        isFrontPage={isFrontPage}
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <article className="p-5 card sm:p-10">
        <h1
          className="mb-10 text-center uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="content">
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
