import { useStaticQuery, graphql } from "gatsby"

const useWordPressSettings = () => {
  const data = useStaticQuery(graphql`
    query GET_GATSBY_PLUGIN_WPCF7_OPTIONS {
      sitePlugin(name: { eq: "@gatsbywpthemes/gatsby-plugin-wpcf7" }) {
        pluginOptions {
          wordPressUrl
        }
      }
    }
  `)
  return data.sitePlugin.pluginOptions
}

export default useWordPressSettings
