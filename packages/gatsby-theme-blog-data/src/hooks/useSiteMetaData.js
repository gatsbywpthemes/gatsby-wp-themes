import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          social {
            name
            url
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
