/** @jsx jsx */
import { jsx } from 'theme-ui'
import SocialFollows from '../social/SocialFollows'
import CategoriesWidget from '../widgets/Categories'
import TagsWidget from '../widgets/Tags'
import RecentPosts from '../widgets/RecentPosts'

const Widgets = ({ widget }) => {
  switch (widget) {
    case 'SocialFollow':
      return <SocialFollows />
    case 'RecentPosts':
      return <RecentPosts />
    case 'Categories':
      return <CategoriesWidget />
    case 'Tags':
      return <TagsWidget />
    default:
      return ''
  }
}

export default Widgets
