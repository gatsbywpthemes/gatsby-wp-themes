import { useStaticQuery, graphql } from 'gatsby'

export const useSiteSettings = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          dateFormat
          title
          description
          language
          url
          timezone
        }
      }
    }
  `)

  /* the language is returned in underscore format , we fix it here */

  data.wp.generalSettings.language =
    data.wp.generalSettings.language.replace('_', '-') || 'en-US'
  return data.wp.generalSettings
}
