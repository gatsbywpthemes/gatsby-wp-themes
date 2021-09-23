const PageSeoFromWP = `seo {
      metaDesc
      metaKeywords
      opengraphAuthor
      opengraphDescription
      schema {
        articleType
        pageType
      }
      opengraphType
      opengraphTitle
      opengraphModifiedTime
      opengraphUrl
      twitterDescription
      twitterTitle
      cornerstone
      title
      opengraphImage {
        localFile {
          childImageSharp {
            original {
              src
              height
              width
            }
          }
        }
      }
      twitterImage {
        localFile {
          childImageSharp {
            original {
              src
              height
              width
            }
          }
        }
      }
    }
  `

module.exports = PageSeoFromWP
