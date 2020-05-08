/** @jsx jsx */
import { jsx } from 'theme-ui'
import { SocialFollows } from '../social'
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from './index'

export const Widgets = ({ widget }) => {
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
      return <Newsletter />
    default:
      return ''
  }
}
