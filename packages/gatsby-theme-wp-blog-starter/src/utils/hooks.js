import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

const useLayoutStyles = (type, templateName) => {
  const { sidebarWidgets, layoutWidth } = useThemeOptions()
  const pageTemplate = templateName?.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          maxWidth: 'container',
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth[type] }

  const sidebarSide = sidebarPage
    ? pageTemplate === `left sidebar`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, layoutWidth[type]] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, layoutWidth[type]] } }
      : ''
    : ''

  return {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
    layoutWidth,
  }
}

export { useLayoutStyles }
