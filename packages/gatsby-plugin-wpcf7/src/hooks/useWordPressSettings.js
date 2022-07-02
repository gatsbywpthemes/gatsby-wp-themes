import { useStaticQuery, graphql } from "gatsby";

const useWordPressSettings = () => {
  const data = useStaticQuery(graphql`
    query GET_GATSBY_SITEURL {
      site {
        siteMetadata {
          wordPressUrl
        }
      }
    }
  `);
  return data.site.siteMetadata?.wordPressUrl;
};

export default useWordPressSettings;
