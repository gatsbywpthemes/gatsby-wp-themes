/** @jsx jsx */
import { jsx, Flex, useToken } from '@chakra-ui/core'
import { Container } from 'uiComponents'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Sidebar } from '../index'
import { ArchiveTitle, PostsList, Pagination } from './index'

export const ArchiveContent = ({ posts, ctx, paginationPrefix, name }) => {
  const { archiveSidebar, sidebarWidgets, layoutWidth } = useThemeOptions()
  const [xl, lg, md, sm] = useToken('sizes', [
    'container.xl',
    'container.lg',
    'container.md',
    'container.sm',
  ])
  function archiveWidth() {
    switch (layoutWidth.archive) {
      case 'xl':
        return xl
      case 'md':
        return md
      case 'lg':
        return lg
      case 'sm':
        return sm
      default:
        return '1280px'
    }
  }

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
