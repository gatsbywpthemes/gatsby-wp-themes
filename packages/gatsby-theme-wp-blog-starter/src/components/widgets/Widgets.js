/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { SocialFollows } from '../social'
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from './index'

import socialStyles from '../../styles/socialStyles'

export const Widgets = ({ widget }) => {
  switch (widget) {
    case 'SocialFollow':
      return (
        <Flex
          sx={{
            ...socialStyles.follow,
          }}
        >
          <SocialFollows />
        </Flex>
      )
    case 'RecentPosts':
      return <RecentPosts />
    case 'Categories':
      return <CategoriesWidget />
    case 'Tags':
      return <TagsWidget />
    case 'Newsletter':
      return <Newsletter title="subscribe to our newsletter" />

    default:
      return ''
  }
}
