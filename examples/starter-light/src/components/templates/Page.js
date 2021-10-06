import React from "react"
import { Layout } from "../Layout"
import { ParsedContent, ActivatePageScripts } from "../../utils"
import { gutenbergStyles } from "../../styles/gutenbergStyles"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  const pageTemplate = headlesswp?.pageTemplate || "default"
  const skipTitle = headlesswp?.skipTitle || false
  return (
    <Layout page={page} type="page">
      <article>
        {!skipTitle && pageTemplate !== "full width" && (
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        )}
        <div
          className="entry-content"
          css={{
            ...gutenbergStyles,
            "&:after": {
              clear: "both",
              content: "''",
              display: "block",
            },
          }}
        >
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
