/** @jsx jsx */
import { jsx, Flex } from '@chakra-ui/core'
import { Container } from 'starterUiComponents'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Sidebar } from 'starterComponents'
import { ArchiveTitle, PostsList, Pagination } from 'starterComponents'
import { useLayoutWidth } from 'starterUtils/hooks'

export const ArchiveContent = ({ posts, ctx, name }) => {
  const { archiveSidebar, sidebarWidgets } = useThemeOptions()

  const [archiveWidth, xl] = useLayoutWidth('archive')

  const containerStyles =
    sidebarWidgets && archiveSidebar
      ? {
          maxWidth: xl,
          '.posts-list': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: archiveWidth() }

  const sidebarSide =
    sidebarWidgets && archiveSidebar
      ? archiveSidebar === `left`
        ? {
            flexDirection: `row-reverse`,
            '.posts-list': {
              pl: [0, 0, 0, 8],
            },
          }
        : {
            '.posts-list': {
              pr: [0, 0, 0, 8],
            },
          }
      : ''

  return (
    <Container className="mainContainer" sx={{ ...containerStyles }}>
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
