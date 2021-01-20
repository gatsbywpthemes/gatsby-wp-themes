import { useStaticQuery, graphql } from 'gatsby'

export const useGatsbyWPSettings = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        gatsbywpthemes {
          slideMenuWidgets
          sidebarWidgets
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

  return data.wp.gatsbywpthemes || {}
}
