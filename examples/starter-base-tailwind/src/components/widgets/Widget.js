import React from "react"
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from "./index"
import { SocialFollows } from "../social/SocialFollows"

export const Widget = ({ widget }) => {
  switch (widget) {
    case "SocialFollow":
      return (
        <div>
          <SocialFollows />
        </div>
      )
    case "RecentPosts":
      return <RecentPosts />
    case "Categories":
      return <CategoriesWidget />
    case "Tags":
      return <TagsWidget />
    case "Newsletter":
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? (
        <Newsletter title="subscribe to our newsletter" />
      ) : null

    default:
      return ""
  }
}
