import React from "react"
import { Layout } from "../Layout"
import { ActivatePageScripts } from "../../utils"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  const pageTemplate = headlesswp?.pageTemplate || "default"
  const skipTitle = headlesswp?.skipTitle || false

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
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
        className={`${pageTemplate === "full width" ? "" : "card sm:p-10 p-5"}`}
      >
        {!skipTitle && pageTemplate !== "full width" && (
          <h1
            className="mb-10 text-center uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <div className="content">
          <ActivatePageScripts />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
