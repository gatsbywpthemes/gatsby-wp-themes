/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import SocialFollows from '../social/SocialFollows'
import CategoriesWidget from '../widgets/Categories'
import TagsWidget from '../widgets/Tags'
import RecentPosts from '../widgets/RecentPosts'
import socialStyles from '../../styles/socialStyles'

const Widgets = ({ widget }) => {
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

    default:
      return ''
  }
}

export default Widgets
