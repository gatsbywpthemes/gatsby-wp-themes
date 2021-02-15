import { useStaticQuery, graphql } from 'gatsby'

export const useHeadlessWPOptions = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        headlesswp {
          addWordPressComments
          addWordPressSearch
          widgetAreas {
            name
            widgets
          }
          archiveSidebarPosition
          logo {
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
          darkModeLogo {
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  // sidebars as object with sidebar areas as keys
  const widgetAreas = data.wp.headlesswp?.widgetAreas
    ? data.wp.headlesswp.widgetAreas.reduce(
        (ac, c) => ({ ...ac, [c.name]: c.widgets }),
        {}
      )
    : {}
  /* 
 // ex. usage
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.sidebarWidgets || []
  */

  const archiveSidebarPosition = data.wp.headlesswp?.archiveSidebarPosition
    ? data.wp.headlesswp.archiveSidebarPosition === 'none'
      ? false
      : data.wp.headlesswp.archiveSidebarPosition
    : null

  return (
    {
      ...data.wp.headlesswp,
      widgetAreas,
      archiveSidebarPosition,
    } || {}
  )
}