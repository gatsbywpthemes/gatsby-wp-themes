import React from 'react'
import {
  CategoriesWidget,
  TagsWidget,
  RecentPosts,
  Newsletter,
  SocialFollows,
} from 'starterComponents'
import { DarkMode } from '@chakra-ui/react'

export const Widget = ({ widget, colorBg }) => {
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
        colorBg === 'dark' ? (
          <DarkMode>
            <Newsletter title="subscribe to our newsletter" />
          </DarkMode>
        ) : (
          <Newsletter title="subscribe to our newsletter" />
        )
      ) : null

    default:
      return ''
  }
}
