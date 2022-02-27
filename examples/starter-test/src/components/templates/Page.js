import React from "react"
import { Layout } from "~/components/Layout"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  return (
    <Layout page={page} type="page">
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  )
}

export default Page
