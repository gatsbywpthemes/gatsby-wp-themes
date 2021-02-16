import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
