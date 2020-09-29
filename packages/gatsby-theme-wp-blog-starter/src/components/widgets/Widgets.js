/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { SocialFollows } from '../social'
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from './index'
import { socialStyles } from '../../styles'

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
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? (
        <Newsletter title="subscribe to our newsletter" />
      ) : null

    default:
      return ''
  }
}
