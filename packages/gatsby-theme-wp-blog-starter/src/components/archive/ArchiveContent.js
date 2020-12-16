/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Sidebar } from '../index'
import { ArchiveTitle, PostsList, Pagination } from './index'

export const ArchiveContent = ({ posts, ctx, name }) => {
  const { layoutWidth, archiveSidebar, sidebarWidgets } = useThemeOptions()

  const containerStyles =
    sidebarWidgets && archiveSidebar
      ? {
          maxWidth: 'container',
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
    <Container
      sx={{ ...containerStyles, maxWidth: 'container' }}
      className="mainContainer"
    >
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
