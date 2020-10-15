import React from 'react'
import { SocialFollows } from '../social'
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from './index'

export const Widgets = ({ widget }) => {
  switch (widget) {
    case 'SocialFollow':
      return (
        <div>
          <SocialFollows />
        </div>
      )
    case 'RecentPosts':
      return <RecentPosts />
    case 'Categories':
      return <CategoriesWidget />
    case 'Tags':
      return <TagsWidget />
    case 'Newsletter':
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? (
        <Newsletter title="subscribe to our newsletter" />
      ) : null

    default:
      return ''
  }
}
