/** @jsx jsx */
import { jsx } from 'theme-ui'
import SocialFollows from '../social/SocialFollows'
import CategoriesWidget from '../widgets/Categories'
import TagsWidget from '../widgets/Tags'
import RecentPosts from '../widgets/RecentPosts'
import Newsletter from '../widgets/Newsletter'

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
    case 'Newsletter':
      return <Newsletter />
    default:
      return ''
  }
}

export default Widgets
