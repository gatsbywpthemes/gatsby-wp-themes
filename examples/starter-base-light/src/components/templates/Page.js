import React from "react"

import { Layout } from "../Layout"

import { gutenbergStyles } from "baseStyles/gutenbergStyles"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page

  return (
    <Layout page={page} type="page">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Page
