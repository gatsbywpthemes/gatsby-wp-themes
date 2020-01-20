/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import PostEntry from '../post/PostEntry'
import Pagination from './Pagination'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar.js'
import ArchiveTitle from './ArchiveTitle'

const ArchiveContent = ({ posts, ctx, paginationPrefix, name }) => {
  const {
    postsPrefix,
    widgetAreas: { sidebar },
    layoutWidth,
  } = useThemeOptions()

  const { widgets } = sidebar
  const sidebarArchive = sidebar.location.archive
  const sidebarPosition = sidebar.position
  const containerStyles =
    widgets && sidebarArchive
      ? {
          '.posts-list': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.archive }

  const sidebarSide =
    widgets && sidebarArchive
      ? sidebarPosition === `left`
        ? {
            flexDirection: `row-reverse`,
            '.posts-list': { pl: [0, 0, 0, layoutWidth.archive] },
          }
        : { '.posts-list': { pr: [0, 0, 0, layoutWidth.archive] } }
      : ''
  return (
    <Container sx={{ ...containerStyles }}>
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <Flex
        sx={{
          ...sidebarSide,
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <Box className="posts-list">
          {posts.map(post => (
            <PostEntry
              key={post.id}
              location="archive"
              post={post}
              postsPrefix={postsPrefix}
            />
          ))}
        </Box>
        {sidebarArchive && <Sidebar />}
      </Flex>
      <Pagination prefix={paginationPrefix} ctx={ctx} />
    </Container>
  )
}

export default ArchiveContent
