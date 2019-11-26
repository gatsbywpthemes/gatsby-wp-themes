import { useStaticQuery, graphql } from "gatsby"

const useWordPressSettings = () => {
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "gatsby-plugin-wordpress-parser" }) {
        pluginOptions {
          wordPressUrl
          uploadsUrl
        }
      }
    }
  `)
  return data.sitePlugin.pluginOptions
}

export default useWordPressSettings
