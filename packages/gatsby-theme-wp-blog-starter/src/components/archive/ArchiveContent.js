/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import PostEntry from '../post/PostEntry'
import Pagination from './Pagination'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar.js'
import ArchiveTitle from './ArchiveTitle'
import PostsList from './PostsList'

const ArchiveContent = ({ posts, ctx, paginationPrefix, name }) => {
  const { layoutWidth, archiveSidebar, sidebarWidgets } = useThemeOptions()

  const containerStyles =
    sidebarWidgets && archiveSidebar
      ? {
          '.posts-list': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.archive }

  const sidebarSide =
    sidebarWidgets && archiveSidebar
      ? archiveSidebar === `left`
        ? {
            flexDirection: `row-reverse`,
            '.posts-list': { pl: [0, 0, 0, layoutWidth.archive] },
          }
        : { '.posts-list': { pr: [0, 0, 0, layoutWidth.archive] } }
      : ''
  return (
    <Container sx={{ ...containerStyles }} className="mainContainer">
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <Flex
        sx={{
          ...sidebarSide,
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <PostsList posts={posts} />
        {archiveSidebar && <Sidebar widgets={sidebarWidgets} />}
      </Flex>
      <Pagination ctx={ctx} />
    </Container>
  )
}

export default ArchiveContent
