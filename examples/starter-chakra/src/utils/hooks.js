import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { useToken } from '@chakra-ui/core'

const useLayoutWidth = (layoutType) => {
  const { layoutWidth } = useThemeOptions()
  const [xl, lg, md, sm] = useToken('sizes', [
    'container.xl',
    'container.lg',
    'container.md',
    'container.sm',
  ])

  function archiveWidth() {
    switch (layoutWidth[layoutType]) {
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

  return [archiveWidth, xl, lg, md, sm]
}

const useLayoutStyles = (layoutType, templateName) => {
  const { sidebarWidgets } = useThemeOptions()
  const pageTemplate = templateName?.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')
  const [archiveWidth, xl, md, lg, sm] = useLayoutWidth()

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          maxWidth: xl,
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: archiveWidth(layoutType) }

  const sidebarSide = sidebarPage
    ? pageTemplate === `left sidebar`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, 8] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, 8] } }
      : ''
    : ''

  return {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
    archiveWidth,
  }
}

export { useLayoutStyles, useLayoutWidth }
