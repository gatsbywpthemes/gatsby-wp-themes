import { useStaticQuery, graphql } from 'gatsby'

export const useHeadlessWPOptions = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          s32: gatsbyImageData(
            height: 32
            width: 32
            quality: 100
            layout: FIXED
          )
          s192: gatsbyImageData(
            height: 192
            width: 192
            quality: 100
            layout: FIXED
          )
          s180: gatsbyImageData(
            height: 180
            width: 180
            quality: 100
            layout: FIXED
          )
          s270: gatsbyImageData(
            height: 270
            width: 270
            quality: 80
            layout: FIXED
          )
        }
      }
      wp {
        headlesswp {
          addWordPressComments
          addWordPressSearch
          addColorModes
          widgetAreas {
            name
            widgets
          }
          archiveSidebarPosition
          logo {
            localFile {
              childImageSharp {
                original {
                  src
                }
                gatsbyImageData(
                  height: 72
                  quality: 80
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
            }
          }
          darkModeLogo {
            localFile {
              childImageSharp {
                original {
                  src
                }
                gatsbyImageData(
                  height: 72
                  quality: 80
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
            }
          }

          favicon {
            localFile {
              childImageSharp {
                s32: gatsbyImageData(
                  height: 32
                  width: 32
                  quality: 100
                  layout: FIXED
                )
                s192: gatsbyImageData(
                  height: 192
                  width: 192
                  quality: 100
                  layout: FIXED
                )
                s180: gatsbyImageData(
                  height: 180
                  width: 180
                  quality: 100
                  layout: FIXED
                )
                s270: gatsbyImageData(
                  height: 270
                  width: 270
                  quality: 80
                  layout: FIXED
                )
              }
            }
          }
          socialFollowLinks {
            name
            url
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
  return {
    ...data.wp.headlesswp,
    ...(data.wp.headlesswp &&
      data.wp.headlesswp.favicon && {
        faviconFile: data.wp.headlesswp.favicon.localFile,
      }),
    // only add wigetAreas if queried
    ...(data.wp.headlesswp && { widgetAreas: { ...widgetAreas } }),
    // only add archiveSidebarPosition if queried
    ...(data.wp.headlesswp && { archiveSidebarPosition }),
  }
}
