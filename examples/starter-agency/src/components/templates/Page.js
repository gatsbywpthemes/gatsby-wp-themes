import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { PageTitle } from "~/components/ui-components"
import { PageBlocks } from "~/components/blocks/PageBlocks"

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    uri,
    headlesswp,
    layoutBlocks: { blocks },
  } = page

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original
  const pageTemplate = headlesswp?.pageTemplate || "default"

  const skipTitle = headlesswp?.skipTitle || false

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
      <article
        className={`${pageTemplate === "default" && "max-w-lg mx-auto"}`}
      >
        {!skipTitle && !pageTemplate.includes("full") && (
          <PageTitle title={title} />
        )}
        <div className="content">
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
        <PageBlocks blocks={blocks} />
      </article>
    </Layout>
  )
}

export default Page
