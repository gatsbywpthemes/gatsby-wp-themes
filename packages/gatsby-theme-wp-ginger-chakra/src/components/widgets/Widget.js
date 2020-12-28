import React from 'react'
import {
  CategoriesWidget,
  TagsWidget,
  RecentPosts,
  Newsletter,
  SocialFollows,
} from 'gingerThemeComponents'

export const Widget = ({ widget }) => {
  switch (widget) {
    case 'SocialFollow':
      return <SocialFollows />
    case 'RecentPosts':
      return <RecentPosts />
    case 'Categories':
      return <CategoriesWidget />
    case 'Tags':
      return <TagsWidget />
    case 'Newsletter':
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? <Newsletter /> : null
    default:
      return ''
  }
}
